---
title: "Reasoning Agents"
description: "Use reasoning patterns when ordinary single-pass output is not reliable enough and the improvement can be evaluated."
---

# Reasoning Agents

## Add reasoning layers only when benefit is measurable

Reflection, judges, multiple candidates, and synthesis add cost and latency. Prepare a small evaluation set first and prove they improve correctness, consistency, or review time.

## Reasoning layers should earn their cost

Reflection, judging, debate, and multi-candidate synthesis can improve hard tasks, but they add latency and spend. Use them when improvement can be measured.

| Pattern | Use when |
| --- | --- |
| Self-review | One draft needs a quality pass. |
| Judge agent | Several outputs need comparison. |
| Role debate | The task benefits from opposing viewpoints. |
| Synthesis | Independent findings need one final answer. |

## Evaluate before expanding

Keep a small set of prompts and expected qualities. If the reasoning pattern does not improve correctness, consistency, or review time, use the simpler agent.

## Related pages

- [Installation](/en/swarms/installation/)
- [Quickstart](/en/swarms/quickstart/)
- [Core Concepts](/en/swarms/core-concepts/)
- [Architecture Overview](/en/swarms/architectures/)

## References

- Agent: https://docs.swarms.world/api/agent.md
- Workflows: https://docs.swarms.world/concepts/workflows.md
