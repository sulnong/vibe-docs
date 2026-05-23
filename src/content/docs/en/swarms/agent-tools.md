---
title: "Agent Tools"
description: "Attach tools to Swarms agents while controlling schemas, side effects, errors, and permissions."
---

# Agent Tools

## Tools are permission boundaries

Tools turn model output into action. Each tool should state accepted inputs, what it may modify, how it fails, and how it can be tested alone.

| Tool type | Default boundary |
| --- | --- |
| Read-only lookup | Usually safe to open first. |
| File write | Limit directories and preserve diffs. |
| Shell command | Dangerous commands need confirmation. |
| External API | Needs timeout, budget, and logs. |

```text
Inspect the repository and explain the plan first. Do not edit files. Stop before writes or destructive commands.
```

## Tools need contracts

A tool is not just a helper. It is a capability with inputs, outputs, side effects, and a failure mode. Test the tool outside the agent when possible, then let the agent call it.

| Tool can | Boundary to add |
| --- | --- |
| Read files | Limit the working directory. |
| Write files | Review diffs before commit. |
| Run commands | Confirm destructive commands. |
| Call APIs | Use timeouts, budgets, and logs. |
| Publish or send | Keep human approval in the path. |

```text
Inspect the repository and propose a change. Do not edit files yet. Stop before running any destructive command.
```

## Related pages

- [Installation](/en/swarms/installation/)
- [Quickstart](/en/swarms/quickstart/)
- [Core Concepts](/en/swarms/core-concepts/)
- [Architecture Overview](/en/swarms/architectures/)

## References

- Tools: https://docs.swarms.world/concepts/tools.md
