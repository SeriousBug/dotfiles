---
name: cc-query-chat
description: Search a past Claude Code session by id or name — across prompts, replies, commands, files, and tool output — via regexp, glob, or ranked keyword.
---

You are searching a previous Claude Code session for specific information,
without reading its whole history. The bundled helper script resolves the
session, walks it once, and prints only the matching items.

**Hard rule: you may NOT read the session `.jsonl` file by any means** — no
`cat`, `head`, `tail`, `jq`, `grep`, `Read`, nothing. Run the helper script and
work solely from its output. That is the only thing allowed to touch the file.

The helper lives at `~/.claude/skills/cc-query-chat/query_session.py`.

## Step 1: Resolve the session

The session is identified by id or name, passed via `--chat`:

It auto-detects whether the parameter is a UUID or title.
Titles are case insensitive matched.
If you already know it's a title vs an id, `--title`/`--id`/`--file` also work.

## Step 2: Choose a matching scheme

Exactly one of these is required:

- **`--regexp PATTERN`** — Python regex, searched anywhere in each item.
  Exact filter: an item either matches or it doesn't.
  ```sh
  ... --chat '<id or name>' --regexp 'ab.*c'
  ```
- **`--glob PATTERN`** — shell glob (`*`, `?`, `[..]`), searched anywhere in
  each item. Exact filter.
  ```sh
  ... --chat '<id or name>' --glob 'ab*c'
  ```
- **`--keyword "WORDS"`** — space-separated keywords with partial (substring)
  matches. Results are **ranked**: the more distinct keywords an item matches
  the higher it scores (ties broken by total hit count), best first.
  ```sh
  ... --chat '<id or name>' --keyword 'data pipeline error delivery'
  ```

regexp and glob are case-insensitive by default (pass `--case-sensitive` to
change that); keyword is always case-insensitive.

## Step 3: Narrow and shape the results

- **`--type LIST`** — restrict to item types (comma-separated). Types:
  - `user` — the human's prompts
  - `agent` — the assistant's text replies
  - `command` — Bash commands (command + description)
  - `file` — file operations (Read/Write/Edit/NotebookEdit): path + content
  - `tool` — other tool calls (name + input)
  - `output` — tool results: command output, file contents read back, etc.

  e.g. `--type command,output` to search only what was run and what it printed.

- **`--limit N`** — max results (default 5).
- **`--truncate N`** — max chars of matched text per result; the shown snippet
  is centred on the match.

The defaults are tuned so that output is short enough to note pollute context.
Do not raise them without good reason. If raising `truncate`, you might want to lower `limit` and vice versa.

## Step 4: Read the output

It prints an XML-tagged report: a header with how many items were searched and
matched, then one `<result>` per hit with its `type`, `turn` number, timestamp,
keyword score (for keyword mode), a `<label>` (e.g. the command or file path),
and the matched `<match>` snippet.

Iterate if needed — refine the pattern, switch schemes (keyword to discover,
regexp/glob to pinpoint), add a `--type` filter, or raise `--limit`/`--truncate`
— rather than reading the raw log. Avoid over-querying, if you don't find
what you're looking for after a few queries then stop.

If you must dig into queries deeply, start an agent prompted with this tool
to dig into the query without polluting your own context.

