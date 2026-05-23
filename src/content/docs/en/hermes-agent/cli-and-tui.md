---
title: "CLI and TUI Workflow"
description: "Use Hermes terminal interfaces for daily sessions, navigation, recovery, and command-driven work."
---

# CLI and TUI Workflow

## The working directory is context

```bash
cd /path/to/project
hermes
```

Launching an agent from the wrong directory can misplace relative paths, project instructions, and tool actions. Long sessions should be recoverable, and important results should land in files visible to Git.

## CLI, TUI, and configuration files

Interactive interfaces are good for exploration; configuration files are good for repetition. Put reusable behavior into config or scripts and leave temporary reasoning in the session.

## Interactive work and repeatable work are different

Use the terminal interface for exploration, recovery, and daily sessions. When a behavior should repeat, move it into project instructions, a profile, or a small script rather than relying on a remembered chat turn.

| Need | Prefer |
| --- | --- |
| Explore a repository | CLI or TUI session |
| Repeat the same behavior | Profile, context file, or script |
| Recover old work | Named sessions and visible files |
| Share result with a team | Committed artifacts and notes |

```bash
cd /path/to/project
hermes
```

## Related pages

- [Installation](/en/hermes-agent/installation/)
- [First Reliable Run](/en/hermes-agent/first-run/)
- [Providers and Models](/en/hermes-agent/providers-and-models/)
- [Tools and Toolsets](/en/hermes-agent/tools-and-toolsets/)

## References

- Cli: https://hermes-agent.nousresearch.com/docs/user-guide/cli
- Tui: https://hermes-agent.nousresearch.com/docs/user-guide/tui
- Sessions: https://hermes-agent.nousresearch.com/docs/user-guide/sessions
