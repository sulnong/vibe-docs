---
title: "CLI and TUI Workflow"
description: "Use the Hermes CLI and TUI for local sessions, project directories, session recovery, command-driven work, and reproducible outputs."
---

# CLI and TUI Workflow

The terminal is still the main Hermes surface. The CLI and TUI are useful not because they provide another chat box, but because chat, files, commands, project context, and session state live on the same work surface.

## The working directory is context

The directory where you launch Hermes affects visible files, project instructions, relative paths, and tool actions:

```bash
cd /path/to/project
git status --short
hermes
```

If the directory is wrong, even a careful prompt can drift. Before long tasks, check `pwd` and `git status --short`; it is cheaper than debugging accidental edits later.

## What the CLI is good for

The CLI is good for fast, local, interruptible work:

- Reading repository structure and finding relevant files.
- Asking Hermes to propose a change plan.
- Making small edits and reviewing the diff.
- Resuming an existing session.
- Controlling sessions, models, and tools through commands.

When a task needs a team-visible result, do not leave the result only in chat history. Put it in project docs, an issue, a commit, or another reviewable file.

## What the TUI is good for

The TUI is more comfortable for long sessions and multi-panel state: tool status, session details, input, and context are easier to keep in view. It is a good daily surface, but not a replacement for reproducible records.

A practical rule: exploration can live in the TUI; decisions should land in files. Otherwise, a few days later you may remember that Hermes said something, but not have anything reviewable to inspect.

## Turn interaction into repeatable work

Many workflows begin as chat. Once they stabilize, move them:

| Interactive phase | Stable home |
| --- | --- |
| “Read this repository this way every time” | `AGENTS.md`, `.hermes.md`, or project docs. |
| “Generate this report every time” | Skill or script. |
| “Check these files every time” | Tool, test, or checklist. |
| “Run this every week” | Cron, with logs and a shutdown path. |

Hermes is good at discovering workflows. Mature workflows do not always need to remain inside chat.

## Session recovery needs external anchors

Hermes supports session persistence, resume, and search, but important work should still have external anchors:

- The current goal lives in an issue, task card, or document.
- Intermediate artifacts are written to files, not only to the conversation.
- Changes are reviewed through Git diff.
- Important commands and failures can be found in the terminal or logs.

That makes recovery reliable. You are not asking the model to remember everything; you are letting it continue from visible state.

## A healthy daily loop

```text
1. Enter the right directory.
2. Check the working tree.
3. Ask Hermes to read and explain a plan first.
4. Limit the write scope.
5. Review the diff.
6. Move reusable rules into context, skills, or scripts.
```

This loop is slower than “let the agent do everything,” but it is steadier over time, especially on shared projects.

## Related pages

- [First Reliable Run](/en/hermes/first-run/)
- [Context Files](/en/hermes/context-files/)
- [Memory and Sessions](/en/hermes/memory-and-sessions/)
- [Tools and Toolsets](/en/hermes/tools-and-toolsets/)

## References

- CLI: https://hermes-agent.nousresearch.com/docs/user-guide/cli
- TUI: https://hermes-agent.nousresearch.com/docs/user-guide/tui
- Sessions: https://hermes-agent.nousresearch.com/docs/user-guide/sessions
