---
title: "Core Concepts"
description: "Separate Swarms Agent, tools, memory, structured outputs, workflows, and swarms before composing them."
---

# Core Concepts

## Separate the building blocks

| Piece | Controls |
| --- | --- |
| Agent | Role, prompt, model, loop, and output. |
| Tool | Callable capability and side effects. |
| Memory | State across turns. |
| Workflow | How agents run and combine. |

Configuration should make model, loop, tools, and output expectations visible. Hidden defaults make cost and behavior hard to predict.

## Keep the pieces separate

An Agent, a tool, memory, structured output, and a workflow fail in different ways. Debugging is easier when each piece can be tested alone.

| Piece | Controls |
| --- | --- |
| Agent | Role, prompt, model, loop, and output. |
| Tool | Callable capability and side effects. |
| Memory | State across turns or runs. |
| Structured output | Shape expected by downstream code. |
| Workflow | How agents run and combine. |

## Make configuration readable

A future reader should be able to see the model, loop limit, tool access, output expectation, and owner without chasing hidden defaults.

## Related pages

- [Installation](/en/swarms/installation/)
- [Quickstart](/en/swarms/quickstart/)
- [Architecture Overview](/en/swarms/architectures/)
- [Production](/en/swarms/production/)

## References

- Agent: https://docs.swarms.world/api/agent.md
- Tools: https://docs.swarms.world/concepts/tools.md
- Workflows: https://docs.swarms.world/concepts/workflows.md
