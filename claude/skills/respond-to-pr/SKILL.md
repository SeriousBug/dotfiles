---
name: respond-to-pr
description: Read the reviews and comments on a GitHub PR and decide how to respond. Invoked as `/respond-to-pr 106`, `/respond-to-pr <pr-url>`, or `/respond-to-pr` (no arg, uses the PR for the current branch). Gathers everything via one helper script, evaluates each review point, fixes obvious bugs/security issues, and asks the user for the nuanced calls. May reply to bot comments; only replies to humans after the user confirms.
---

You are responding to the reviews and comments on a GitHub pull request. Look
at what the reviewers said, decide what actually needs to change, make the
changes, and respond appropriately.

## Step 1: Gather the PR

The argument is the PR number, a PR URL, or nothing:

- **A number** (`106`) — pass it as-is.
- **A URL** (`https://github.com/owner/repo/pull/106`) — pass the whole URL.
- **Nothing** — pass nothing; the script resolves the PR for the current branch.

Run the helper **once**:

```sh
python3 ~/.claude/skills/respond-to-pr/gather_pr.py <number-or-url-or-nothing>
```

The script makes every `gh` call needed — PR title, description, all reviews,
per-line review comments, and conversation comments, formatted as XML. **Work
solely from its output. Do not make additional `gh` calls unless absolutely
necessary** — the script already gives you everything.

If it prints `<no_pr_found>`, **stop and ask the user** which PR to work on. Do
not guess.

## Step 2: Read the output

The XML marks every author:

- `is_me="true"` — written by the user's own gh account (the user, or you on
  their behalf earlier). This is not a reviewer asking you for something; it is
  what was already written. Do not "reply" to it.
- `is_bot="true"` — a bot account (review bots, CI). You **may** respond to and
  act on these directly.
- `is_human="true"` — a human other than the user. **Do not respond to these**
  until the user confirms (see Step 4).

Every `<review>`, `<comment>`, and `<line_comment>` has an `id="..."` — use it
if the user asks you to reply to a specific comment.

## Step 3: Evaluate, don't obey

You do **not** have to do everything the reviewers say. Evaluate each point and
decide whether it actually needs to be addressed:

- **Obvious bugs and security vulnerabilities — fix them.** No need to ask.
- **Anything nuanced** (design trade-offs, style preferences, debatable
  refactors, anything where reasonable people disagree, or where you are
  unsure) — **ask the user to make the final call** before acting. Lay out the
  reviewer's point and your read on it, and let the user decide.

Check out the PR branch before making changes. When you make changes, commit
and push to the **PR branch** (never a different branch), per the user's global
review-response instructions.

## Step 4: Responding to comments

- **Bot comments** — you may reply directly (e.g. `gh pr comment`, or a reply
  to a review comment via the GitHub API using its `id`) and act on them.
- **Human comments** — draft your intended response, **show it to the user, and
  ask for confirmation**. Only post a reply to a human after the user okays it.

When the user asks you to reply to a specific comment, use its `id` from the XML
to target it.
