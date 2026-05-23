---
title: "Tools and Toolsets"
description: "Understand Hermes tools and toolsets as permissioned capabilities, not just convenient commands."
---

# Tools and Toolsets

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

- [Installation](/en/hermes-agent/installation/)
- [First Reliable Run](/en/hermes-agent/first-run/)
- [Providers and Models](/en/hermes-agent/providers-and-models/)
- [Skills System](/en/hermes-agent/skills/)

## References

- Tools: https://hermes-agent.nousresearch.com/docs/user-guide/features/tools
- Security: https://hermes-agent.nousresearch.com/docs/user-guide/security
