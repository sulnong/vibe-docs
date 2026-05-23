---
title: "Kanban Board"
description: "Use Hermes Kanban for durable multi-agent task state when chat history is not enough."
---

# Kanban Board

## Boards store current state

Add this capability only after the local path is reliable. Each entry point or task needs an owner, permission boundary, output shape, logs, and a stop path.

| Concern | Question |
| --- | --- |
| Authorization | Who can trigger it? |
| Scope | What can it read or write? |
| Output | Who receives the result? |
| Stop path | How can it be disabled quickly? |

## A board is for current shared state

Use a board when several sessions or agents need durable coordination. The card should say what is being produced, who owns the next move, and how completion will be checked.

| Card field | Good content |
| --- | --- |
| Title | Concrete outcome, not a broad theme. |
| Owner | One person or agent responsible for movement. |
| Status | Where the work actually is. |
| Acceptance | How the result will be checked. |

## Keep long reasoning elsewhere

A board should not become a second chat transcript. Store decisions in project documents or issues, and keep the board focused on current work.

## Related pages

- [Installation](/en/hermes-agent/installation/)
- [First Reliable Run](/en/hermes-agent/first-run/)
- [Providers and Models](/en/hermes-agent/providers-and-models/)
- [Tools and Toolsets](/en/hermes-agent/tools-and-toolsets/)

## References

- Kanban: https://hermes-agent.nousresearch.com/docs/user-guide/features/kanban
