---
title: "Memory and State"
description: "Use Swarms memory deliberately so continuity does not become hidden, stale context."
---

# Memory and State

## Use memory for preferences, not contracts

Memory is good for stable preferences and continuity. Facts that affect public output, production behavior, security, or API contracts belong in project files and version control.

| State | Better home |
| --- | --- |
| User preference | Memory. |
| Project rule | AGENTS.md or project docs. |
| Public documentation requirement | Versioned project instruction. |
| Audit evidence | Logs, artifacts, or commits. |

## Memory is not a database of truth

Use memory for stable preferences and continuity. Put requirements, contracts, public content rules, production configuration, and security decisions into project files where people can review changes.

| State | Better home |
| --- | --- |
| Stable user preference | Memory. |
| Project rule | AGENTS.md or project documentation. |
| Workflow contract | Versioned configuration or code. |
| Audit evidence | Logs, artifacts, or commits. |

## When memory causes trouble

If a bad assumption follows one session, inspect session state. If it follows every run, inspect memory and global context. Removing wrong memory is better than fighting it in every prompt.

## Related pages

- [Installation](/en/swarms/installation/)
- [Quickstart](/en/swarms/quickstart/)
- [Core Concepts](/en/swarms/core-concepts/)
- [Architecture Overview](/en/swarms/architectures/)

## References

- Memory: https://docs.swarms.world/concepts/memory.md
