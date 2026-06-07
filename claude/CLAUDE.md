# Personal Claude Code Instructions

## Notifying me / sharing images via Discord

The `discord-send` CLI is on my PATH. Use it whenever I ask you to notify me when something is done, or to show me an image or video — send it to my Discord and I'll see it there.

```sh
discord-send 'Build finished successfully'
discord-send --attach ./screenshot.png 'Here is the rendered page'
```

## Responding to reviews

When asked to respond to reviews in a PR, check the PR description and all comments. Check out the PR branch. Decide if any changes are required or not, make changes if needed, commit and push once done. Always push the PR branch if responding to a PR, do not push to a different branch. 

