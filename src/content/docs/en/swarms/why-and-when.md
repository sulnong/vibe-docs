---
title: "Why and When to Use Swarms"
description: "Decide when Swarms is a good fit, and when a single model call, script, LangGraph, CrewAI, or AutoGen-style framework may be simpler."
---

# Why and When to Use Swarms

## When it fits

- The task needs multi-turn context, tools, or files.
- The work repeats, so reusable procedure reduces explanation.
- The output can be inspected instead of trusted by tone.
- Failure can be stopped, retried, rolled back, or handed to a person.

## When to stay smaller

If a single model call, short script, or ordinary CLI is easier to inspect, do not add an agent system just to look advanced. Long-running or multi-agent designs should earn their place through clearer data flow, reuse, or more reliable review.

| Need | Starting point |
| --- | --- |
| One answer | Plain model call. |
| One role with tools | Single Swarms Agent. |
| Ordered stages | SequentialWorkflow. |
| Independent parallel work | Delegation or isolated tasks. |
| Unattended execution | Add logs, limits, and a stop path first. |

## Choose by operating model

Swarms is strongest when Python code needs explicit agent objects and orchestration choices. If one model call is enough, keep it simple. If a graph-shaped state machine is the central requirement, compare graph-first frameworks too.

| Use it when | Pause when |
| --- | --- |
| Several roles improve the result | One Agent can do the job |
| Parallelism or routing is real | The workflow is complex only on paper |
| Python-level control matters | A hosted product workflow is the real need |

## The practical test

Before adopting the framework for a workflow, write down the input, expected output, review step, and failure handling. If those are hard to state, the framework choice is probably not the real problem yet.

## Related pages

- [Installation](/en/swarms/installation/)
- [Quickstart](/en/swarms/quickstart/)
- [Core Concepts](/en/swarms/core-concepts/)
- [Architecture Overview](/en/swarms/architectures/)

## References

- Quickstart: https://docs.swarms.world/quickstart.md
- Workflows: https://docs.swarms.world/concepts/workflows.md
