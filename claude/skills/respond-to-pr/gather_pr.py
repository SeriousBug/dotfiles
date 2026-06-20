#!/usr/bin/env python3
"""Gather a GitHub PR's metadata, reviews, and comments into one XML report.

This is the data-gathering half of the respond-to-pr skill. The agent runs this
script ONCE and works solely from its output. The script makes every `gh` call
needed, so the agent should not make additional `gh` calls unless absolutely
necessary.

Usage:
  gather_pr.py 106                      # by PR number (uses current repo)
  gather_pr.py https://github.com/o/r/pull/106   # by URL
  gather_pr.py                          # no arg -> PR for the current branch

If no PR can be resolved (e.g. nothing given and the current branch has no PR),
the script prints a <no_pr_found> marker and exits non-zero so the agent knows
to stop and ask the user what to do.

The XML output marks, for every author:
  is_me="true"   the comment was written by the authenticated gh user (you,
                 via the user's gh access). Do NOT reply to these as if they
                 were a reviewer; this is what the user (or you on their behalf)
                 already wrote.
  is_bot="true"  the author is a bot account. The agent MAY respond to bot
                 comments directly.
  is_human="true" a human other than the authenticated user. The agent must
                 NOT respond to these without the user's explicit confirmation.

Every review and comment carries an id="..." so the agent can reply to a
specific comment if the user asks.
"""

import json
import re
import subprocess
import sys
from xml.sax.saxutils import escape


def gh(args, check=True):
    """Run a gh command, return (returncode, stdout, stderr)."""
    proc = subprocess.run(
        ["gh", *args],
        capture_output=True,
        text=True,
    )
    if check and proc.returncode != 0:
        raise RuntimeError(proc.stderr.strip() or f"gh {' '.join(args)} failed")
    return proc.returncode, proc.stdout, proc.stderr


def gh_json(args):
    _, out, _ = gh(args)
    return json.loads(out) if out.strip() else None


def gh_api_paginated(path):
    """gh api with --paginate, returns a flat list."""
    _, out, _ = gh(["api", "--paginate", path])
    # --paginate concatenates JSON arrays as separate documents on separate
    # lines only when using --slurp; here gh merges into one array for array
    # endpoints, so a single json.loads works.
    out = out.strip()
    if not out:
        return []
    try:
        data = json.loads(out)
    except json.JSONDecodeError:
        # Multiple JSON arrays back to back; merge them.
        data = []
        decoder = json.JSONDecoder()
        idx = 0
        while idx < len(out):
            while idx < len(out) and out[idx].isspace():
                idx += 1
            if idx >= len(out):
                break
            obj, end = decoder.raw_decode(out, idx)
            if isinstance(obj, list):
                data.extend(obj)
            else:
                data.append(obj)
            idx = end
    return data


def resolve_pr(arg):
    """Resolve the PR. Returns dict with number, owner, repo, and base JSON,
    or None if no PR could be found."""
    fields = "number,title,body,url,author,state,isDraft,headRefName,baseRefName"
    view_args = ["pr", "view"]
    if arg:
        view_args.append(arg)
    view_args += ["--json", fields]
    code, out, err = gh(view_args, check=False)
    if code != 0:
        return None
    data = json.loads(out)
    # Parse owner/repo from the canonical PR url: github.com/{owner}/{repo}/pull/N
    m = re.search(r"github\.com/([^/]+)/([^/]+)/pull/(\d+)", data.get("url", ""))
    if not m:
        return None
    data["owner"], data["repo"] = m.group(1), m.group(2)
    data["number"] = int(m.group(3))
    return data


def get_me():
    try:
        _, out, _ = gh(["api", "user", "--jq", ".login"])
        return out.strip()
    except RuntimeError:
        return None


def user_attrs(user, me):
    """Build is_me / is_bot / is_human attribute string from a GitHub user obj."""
    if not user:
        return 'login="unknown"'
    login = user.get("login", "unknown")
    utype = user.get("type", "")
    is_bot = utype == "Bot" or login.endswith("[bot]")
    is_me = me is not None and login == me
    parts = [f'login="{escape(login, {chr(34): "&quot;"})}"']
    if is_me:
        parts.append('is_me="true"')
    elif is_bot:
        parts.append('is_bot="true"')
    else:
        parts.append('is_human="true"')
    return " ".join(parts)


def author_attrs_from_gh_view(author, me):
    """gh pr view's author obj uses `login` and `is_bot`."""
    login = (author or {}).get("login", "unknown")
    is_bot = (author or {}).get("is_bot", False)
    is_me = me is not None and login == me
    parts = [f'login="{escape(login, {chr(34): "&quot;"})}"']
    if is_me:
        parts.append('is_me="true"')
    elif is_bot:
        parts.append('is_bot="true"')
    else:
        parts.append('is_human="true"')
    return " ".join(parts)


def cdata(text):
    text = text or ""
    # ]]> cannot appear inside a CDATA section; split it if present.
    text = text.replace("]]>", "]]]]><![CDATA[>")
    return f"<![CDATA[{text}]]>"


def main():
    arg = sys.argv[1] if len(sys.argv) > 1 else ""

    pr = resolve_pr(arg)
    if pr is None:
        print("<no_pr_found>")
        if arg:
            print(f"  Could not resolve a PR from argument: {arg}")
        else:
            print("  No PR found for the current branch, and no PR number/URL was given.")
        print("</no_pr_found>")
        sys.exit(1)

    owner, repo, number = pr["owner"], pr["repo"], pr["number"]
    me = get_me()

    # Reviews (the review summaries + state): pulls/{n}/reviews
    reviews = gh_api_paginated(f"repos/{owner}/{repo}/pulls/{number}/reviews")
    # Per-line review comments: pulls/{n}/comments
    line_comments = gh_api_paginated(f"repos/{owner}/{repo}/pulls/{number}/comments")
    # General conversation comments: issues/{n}/comments
    issue_comments = gh_api_paginated(f"repos/{owner}/{repo}/issues/{number}/comments")

    # Group line comments by the review they belong to.
    by_review = {}
    orphan_line_comments = []
    for c in line_comments:
        rid = c.get("pull_request_review_id")
        if rid:
            by_review.setdefault(rid, []).append(c)
        else:
            orphan_line_comments.append(c)

    out = []
    out.append(
        f'<pull_request number="{number}" '
        f'repo="{escape(owner)}/{escape(repo)}" '
        f'state="{escape(pr.get("state", ""))}" '
        f'draft="{str(pr.get("isDraft", False)).lower()}" '
        f'url="{escape(pr.get("url", ""))}">'
    )
    out.append(f"  <title>{cdata(pr.get('title'))}</title>")
    out.append(f"  <author {author_attrs_from_gh_view(pr.get('author'), me)} />")
    out.append(f"  <description>{cdata(pr.get('body'))}</description>")

    out.append("  <reviews>")
    if not reviews:
        out.append("    <!-- no formal reviews -->")
    for r in reviews:
        rid = r.get("id")
        state = r.get("state", "")
        submitted = r.get("submitted_at", "") or ""
        body = r.get("body") or ""
        kids = by_review.get(rid, [])
        # Skip empty pending/commented reviews that carry no body and no comments.
        if not body.strip() and not kids and state in ("COMMENTED", "PENDING"):
            continue
        out.append(
            f'    <review id="{rid}" {user_attrs(r.get("user"), me)} '
            f'state="{escape(state)}" submitted_at="{escape(submitted)}">'
        )
        if body.strip():
            out.append(f"      <body>{cdata(body)}</body>")
        for c in kids:
            out.append(_render_line_comment(c, me, indent="      "))
        out.append("    </review>")
    out.append("  </reviews>")

    if orphan_line_comments:
        out.append("  <line_comments_outside_reviews>")
        for c in orphan_line_comments:
            out.append(_render_line_comment(c, me, indent="    "))
        out.append("  </line_comments_outside_reviews>")

    out.append("  <conversation_comments>")
    if not issue_comments:
        out.append("    <!-- no conversation comments -->")
    for c in issue_comments:
        out.append(
            f'    <comment id="{c.get("id")}" {user_attrs(c.get("user"), me)} '
            f'created_at="{escape(c.get("created_at", "") or "")}">'
        )
        out.append(f"      <body>{cdata(c.get('body'))}</body>")
        out.append("    </comment>")
    out.append("  </conversation_comments>")

    out.append("</pull_request>")
    print("\n".join(out))


def _render_line_comment(c, me, indent):
    attrs = [
        f'id="{c.get("id")}"',
        user_attrs(c.get("user"), me),
        f'path="{escape(c.get("path", "") or "")}"',
    ]
    line = c.get("line") or c.get("original_line")
    if line is not None:
        attrs.append(f'line="{line}"')
    if c.get("in_reply_to_id"):
        attrs.append(f'in_reply_to="{c["in_reply_to_id"]}"')
    parts = [f"{indent}<line_comment {' '.join(attrs)}>"]
    diff = (c.get("diff_hunk") or "").strip()
    if diff:
        parts.append(f"{indent}  <diff_hunk>{cdata(diff)}</diff_hunk>")
    parts.append(f"{indent}  <body>{cdata(c.get('body'))}</body>")
    parts.append(f"{indent}</line_comment>")
    return "\n".join(parts)


if __name__ == "__main__":
    main()
