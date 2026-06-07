#!/usr/bin/env python3
"""Search a Claude Code session log without ingesting its entire history.

This is the search companion to cc-compact. Where cc-compact gives a bounded
overview of a session, this lets you *search* one — across everything the
session contains:

  - user     the human's typed prompts
  - agent    the assistant's text replies
  - command  Bash commands (the command + its description)
  - file     file operations (Read/Write/Edit/NotebookEdit) — path + content
  - tool     other tool calls (the tool name + its input)
  - output   tool results — command output, file contents read back, search
             hits, etc. (labelled with the tool/arg that produced them)

Three matching schemes (pick one):

  --regexp PATTERN   Python regular expression, searched anywhere in the item
  --glob PATTERN     shell-style glob (*, ?, [..]), searched anywhere
  --keyword "a b c"  space-separated keywords; partial (substring) matches
                     count. Items are ranked: more distinct keywords matched =
                     better, ties broken by total hit count. Only items that
                     match at least one keyword are returned.

regexp/glob are exact filters — an item is either a match or it isn't.
keyword is fuzzy and ranked.

Session resolution (pick one):
  --chat TEXT        a session id (UUID) OR a substring of its ai-title.
                     Auto-detected: looks like a UUID -> treated as id.
  --file PATH        use this JSONL file directly
  --id UUID          find <UUID>.jsonl under the projects dir
  --title TEXT       find the session whose ai-title contains TEXT

Other options:
  --type LIST        restrict to item types (comma-separated): any of
                     user,agent,command,file,tool,output
  --limit N          max results to show (default 5)
  --truncate N       max chars of matched text shown per result; the snippet
                     is centred on the match so you see the relevant part
                     (default 900 — tuned for a ~2k token total)
  --case-sensitive   make regexp/glob matching case-sensitive (default: not)

Sessions live at: ~/.claude/projects/<encoded-cwd>/<session-id>.jsonl
"""

import argparse
import fnmatch  # noqa: F401  (kept for reference; we hand-roll glob->regex)
import glob
import json
import os
import re
import sys

PROJECTS_DIR = os.path.expanduser("~/.claude/projects")

UUID_RE = re.compile(r"^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$", re.I)

# Tools that touch files on disk, and which input field holds the path.
FILE_TOOLS = {
    "Edit": "file_path",
    "Write": "file_path",
    "MultiEdit": "file_path",
    "NotebookEdit": "notebook_path",
    "Read": "file_path",
}

ALL_TYPES = ["user", "agent", "command", "file", "tool", "output"]


# --------------------------------------------------------------------------- #
# text helpers
# --------------------------------------------------------------------------- #
def esc(text):
    """Escape XML metacharacters for tag values and attributes."""
    return str(text).replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")


def oneline(text, n):
    """Collapse whitespace to a single line, then clip to n chars."""
    text = " ".join(str(text).split())
    return text if len(text) <= n else text[: n - 1] + "…"


def content_to_text(content):
    """A message's .content is either a string or a list of typed blocks."""
    if isinstance(content, str):
        return content
    if isinstance(content, list):
        parts = []
        for b in content:
            if isinstance(b, dict) and b.get("type") == "text":
                parts.append(b.get("text", ""))
        return "\n".join(p for p in parts if p)
    return ""


def tool_result_text(content):
    """tool_result .content is a string or a list of {type,text|...} blocks."""
    if isinstance(content, str):
        return content
    if isinstance(content, list):
        parts = []
        for b in content:
            if not isinstance(b, dict):
                continue
            if b.get("type") == "text":
                parts.append(b.get("text", ""))
            elif b.get("type") == "image":
                parts.append("[image]")
        return "\n".join(p for p in parts if p)
    return ""


def glob_to_regex(pat):
    """Translate a shell glob to a regex fragment we can re.search() anywhere.

    Unlike fnmatch (which anchors and matches the *whole* string), this is
    meant to find the pattern somewhere inside long, multi-line text — so
    `ab*c` matches any text containing 'ab' ... 'c'.
    """
    out = []
    i, n = 0, len(pat)
    while i < n:
        c = pat[i]
        if c == "*":
            out.append(".*")
        elif c == "?":
            out.append(".")
        elif c == "[":
            j = i + 1
            if j < n and pat[j] in "!^":
                j += 1
            if j < n and pat[j] == "]":
                j += 1
            while j < n and pat[j] != "]":
                j += 1
            if j >= n:
                out.append(r"\[")  # unterminated class -> literal
            else:
                stuff = pat[i + 1 : j]
                if stuff.startswith("!"):
                    stuff = "^" + stuff[1:]
                out.append("[" + stuff + "]")
                i = j
        else:
            out.append(re.escape(c))
        i += 1
    return "".join(out)


def snippet(text, start, end, n):
    """Return up to n chars of `text` centred on the span [start, end),
    with ellipses marking where it was clipped. Newlines preserved."""
    text = text.strip("\n")
    if len(text) <= n:
        return text
    span = end - start
    if span >= n:
        return text[start : start + n].rstrip() + " …[truncated]"
    pad = (n - span) // 2
    lo = max(0, start - pad)
    hi = min(len(text), lo + n)
    lo = max(0, hi - n)
    out = text[lo:hi].strip()
    if lo > 0:
        out = "…" + out
    if hi < len(text):
        out = out + "…"
    return out


# --------------------------------------------------------------------------- #
# session resolution
# --------------------------------------------------------------------------- #
def find_by_title(needle):
    needle = needle.lower()
    candidates = []  # (mtime, path, title)
    for path in glob.glob(os.path.join(PROJECTS_DIR, "**", "*.jsonl"), recursive=True):
        title = None
        try:
            with open(path, encoding="utf-8") as fh:
                for line in fh:
                    if '"ai-title"' not in line:
                        continue
                    try:
                        rec = json.loads(line)
                    except json.JSONDecodeError:
                        continue
                    if rec.get("type") == "ai-title":
                        t = rec.get("aiTitle", "")
                        if needle in t.lower():
                            title = t
                            break
        except OSError:
            continue
        if title is not None:
            candidates.append((os.path.getmtime(path), path, title))
    if not candidates:
        sys.exit(f"No session whose ai-title contains {needle!r}")
    candidates.sort(reverse=True)
    if len(candidates) > 1:
        sys.stderr.write("Multiple title matches (using newest):\n")
        for _, path, title in candidates:
            sys.stderr.write(f"  {path}  —  {title}\n")
    return candidates[0][1]


def find_by_id(uuid):
    matches = glob.glob(os.path.join(PROJECTS_DIR, "**", f"{uuid}.jsonl"), recursive=True)
    if not matches:
        sys.exit(f"No session file found for id {uuid} under {PROJECTS_DIR}")
    return matches[0]


def resolve_file(args):
    if args.file:
        return os.path.expanduser(args.file)
    if args.id:
        return find_by_id(args.id)
    if args.title:
        return find_by_title(args.title)
    if args.chat:
        chat = args.chat.strip()
        if UUID_RE.match(chat):
            return find_by_id(chat)
        return find_by_title(chat)
    sys.exit("Provide one of --chat, --file, --id, or --title")


# --------------------------------------------------------------------------- #
# item extraction
# --------------------------------------------------------------------------- #
def extract_items(path):
    """Walk the log once and produce a flat, ordered list of searchable items.

    Each item: {"type", "turn", "ts", "label", "text"}.
    """
    items = []
    turn = 0
    tool_meta = {}  # tool_use_id -> (tool_name, short_arg)

    def add(itype, label, text, ts):
        if not text or not text.strip():
            return
        items.append({"type": itype, "turn": turn, "ts": ts, "label": label, "text": text})

    with open(path, encoding="utf-8") as fh:
        for line in fh:
            line = line.strip()
            if not line:
                continue
            try:
                rec = json.loads(line)
            except json.JSONDecodeError:
                continue

            rtype = rec.get("type")
            ts = rec.get("timestamp")
            msg = rec.get("message") if isinstance(rec.get("message"), dict) else {}
            content = msg.get("content")

            if rtype == "user" and not rec.get("isMeta"):
                # Genuine prompt = plain string that isn't a wrapper/interrupt.
                if isinstance(content, str):
                    s = content.lstrip()
                    if s and not s.startswith(("<", "[Request interrupted", "Caveat:")):
                        turn += 1
                        add("user", "user prompt", content, ts)
                # tool_result blocks live inside user messages
                if isinstance(content, list):
                    for b in content:
                        if isinstance(b, dict) and b.get("type") == "tool_result":
                            tid = b.get("tool_use_id")
                            name, arg = tool_meta.get(tid, ("tool", ""))
                            label = f"{name} {arg}".strip()
                            add("output", f"output ← {label}", tool_result_text(b.get("content")), ts)

            elif rtype == "assistant" and isinstance(content, list):
                texts = []
                for b in content:
                    if not isinstance(b, dict):
                        continue
                    bt = b.get("type")
                    if bt == "text" and b.get("text", "").strip():
                        texts.append(b["text"])
                    elif bt == "tool_use":
                        name = b.get("name", "?")
                        inp = b.get("input", {}) or {}
                        tid = b.get("id")
                        if name == "Bash":
                            cmd = str(inp.get("command", ""))
                            desc = str(inp.get("description", ""))
                            body = cmd if not desc else f"{cmd}\n# {desc}"
                            add("command", oneline(cmd, 120), body, ts)
                            tool_meta[tid] = (name, oneline(cmd, 60))
                        elif name in FILE_TOOLS:
                            fp = str(inp.get(FILE_TOOLS[name], ""))
                            pieces = [f"[{name}] {fp}"]
                            for k in ("content", "old_string", "new_string"):
                                if inp.get(k):
                                    pieces.append(str(inp[k]))
                            add("file", f"{name} {fp}", "\n".join(pieces), ts)
                            tool_meta[tid] = (name, oneline(os.path.basename(fp) or fp, 60))
                        else:
                            try:
                                body = json.dumps(inp, ensure_ascii=False, indent=2)
                            except (TypeError, ValueError):
                                body = str(inp)
                            add("tool", name, f"[{name}]\n{body}", ts)
                            arg = inp.get("file_path") or inp.get("path") or inp.get("query") or ""
                            tool_meta[tid] = (name, oneline(str(arg), 60))
                if texts:
                    add("agent", "agent reply", "\n".join(texts), ts)

    return items


# --------------------------------------------------------------------------- #
# matching
# --------------------------------------------------------------------------- #
def match_regex(items, pattern, flags):
    try:
        rx = re.compile(pattern, flags | re.DOTALL)
    except re.error as e:
        sys.exit(f"Invalid regular expression: {e}")
    results = []
    for it in items:
        m = rx.search(it["text"])
        if m:
            results.append((it, m.start(), m.end(), None))
    return results


def match_keyword(items, query, flags):
    words = [w for w in query.split() if w]
    if not words:
        sys.exit("--keyword needs at least one word")
    ci = flags & re.IGNORECASE
    scored = []
    for it in items:
        text = it["text"]
        hay = text.lower() if ci else text
        distinct = 0
        total = 0
        first_pos = None
        first_len = 0
        for w in words:
            needle = w.lower() if ci else w
            cnt = hay.count(needle)
            if cnt:
                distinct += 1
                total += cnt
                pos = hay.find(needle)
                if first_pos is None or pos < first_pos:
                    first_pos = pos
                    first_len = len(needle)
        if distinct:
            scored.append((distinct, total, it, first_pos, first_pos + first_len))
    # Best first: more distinct keywords, then more total hits.
    scored.sort(key=lambda r: (-r[0], -r[1]))
    out = []
    for distinct, total, it, s, e in scored:
        out.append((it, s, e, f"{distinct}/{len(words)} kw, {total} hits"))
    return out


# --------------------------------------------------------------------------- #
# main
# --------------------------------------------------------------------------- #
def main():
    ap = argparse.ArgumentParser(
        description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter
    )
    # session resolution
    ap.add_argument("--chat", help="session id (UUID) or substring of its ai-title")
    ap.add_argument("--file", help="path to a session .jsonl")
    ap.add_argument("--id", help="session UUID")
    ap.add_argument("--title", help="substring of the session's ai-title")
    # match scheme (exactly one)
    mode = ap.add_mutually_exclusive_group(required=True)
    mode.add_argument("--regexp", metavar="PATTERN", help="regular-expression search")
    mode.add_argument("--glob", metavar="PATTERN", help="shell-glob search")
    mode.add_argument("--keyword", metavar="WORDS", help="ranked keyword search")
    # filters / shaping
    ap.add_argument("--type", help="restrict to item types (comma-separated): " + ",".join(ALL_TYPES))
    ap.add_argument("--limit", type=int, default=5, help="max results (default 5)")
    ap.add_argument("--truncate", type=int, default=900, help="max chars of matched text per result (default 900)")
    ap.add_argument("--case-sensitive", action="store_true", help="case-sensitive regexp/glob (default off)")
    args = ap.parse_args()

    path = resolve_file(args)

    wanted = None
    if args.type:
        wanted = {t.strip().lower() for t in args.type.split(",") if t.strip()}
        bad = wanted - set(ALL_TYPES)
        if bad:
            sys.exit(f"Unknown --type value(s): {', '.join(sorted(bad))}. Choose from {', '.join(ALL_TYPES)}")

    items = extract_items(path)
    if wanted:
        items = [it for it in items if it["type"] in wanted]

    flags = 0 if args.case_sensitive else re.IGNORECASE

    if args.regexp is not None:
        scheme, query = "regexp", args.regexp
        results = match_regex(items, args.regexp, flags)
    elif args.glob is not None:
        scheme, query = "glob", args.glob
        results = match_regex(items, glob_to_regex(args.glob), flags)
    else:
        scheme, query = "keyword", args.keyword
        # keyword is always case-insensitive for friendliness
        results = match_keyword(items, args.keyword, re.IGNORECASE)

    shown = results[: args.limit]

    out = sys.stdout.write
    out(
        f'<chat-query mode="{scheme}" query="{esc(query)}" '
        f'searched-items="{len(items)}" matched="{len(results)}" showing="{len(shown)}">\n'
    )
    out(f"  <file>{esc(path)}</file>\n")
    if not shown:
        out("  <no-matches />\n")
    for n, (it, s, e, note) in enumerate(shown, 1):
        attrs = f'n="{n}" type="{it["type"]}" turn="{it["turn"]}"'
        if note:
            attrs += f' score="{esc(note)}"'
        if it["ts"]:
            attrs += f' ts="{esc(it["ts"])}"'
        out(f"  <result {attrs}>\n")
        out(f"    <label>{esc(oneline(it['label'], 200))}</label>\n")
        snip = snippet(it["text"], s if s is not None else 0, e if e is not None else 0, args.truncate)
        out(f"    <match>\n{esc(snip)}\n    </match>\n")
        out("  </result>\n")
    out("</chat-query>\n")


if __name__ == "__main__":
    main()
