---
title: "Memory and Session Search"
description: "Use Hermes memory and sessions for continuity while keeping durable project facts in files that humans can review."
---

# Memory and Session Search

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

- [Installation](/en/hermes-agent/installation/)
- [First Reliable Run](/en/hermes-agent/first-run/)
- [Providers and Models](/en/hermes-agent/providers-and-models/)
- [Tools and Toolsets](/en/hermes-agent/tools-and-toolsets/)

## References

- Memory: https://hermes-agent.nousresearch.com/docs/user-guide/features/memory
- Sessions: https://hermes-agent.nousresearch.com/docs/user-guide/sessions
