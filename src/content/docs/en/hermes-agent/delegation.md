---
title: "Subagent Delegation"
description: "Use Hermes child agents for parallel work when tasks are independent, bounded, and reviewable."
---

# Subagent Delegation

## Parallel work needs ownership

Add this capability only after the local path is reliable. Each entry point or task needs an owner, permission boundary, output shape, logs, and a stop path.

| Concern | Question |
| --- | --- |
| Authorization | Who can trigger it? |
| Scope | What can it read or write? |
| Output | Who receives the result? |
| Stop path | How can it be disabled quickly? |

## Delegate only separable work

Delegation helps when tasks are independent and reviewable. It hurts when the work is ambiguous, tightly coupled, or likely to edit the same files.

| Good delegated task | Why it works |
| --- | --- |
| Read one subsystem and return file paths | The output is bounded. |
| Implement one provider in one directory | Ownership is clear. |
| Review a finished change | It can run in parallel. |
| Compare two options | The answer can be checked. |

```text
You own src/providers/. Add support for one provider. Do not modify CLI files. Return changed paths, assumptions, and verification output.
```

## Related pages

- [Installation](/en/hermes-agent/installation/)
- [First Reliable Run](/en/hermes-agent/first-run/)
- [Providers and Models](/en/hermes-agent/providers-and-models/)
- [Tools and Toolsets](/en/hermes-agent/tools-and-toolsets/)

## References

- Delegation: https://hermes-agent.nousresearch.com/docs/user-guide/features/delegation
