---
title: "Advanced Architectures"
description: "Approach advanced Swarms architectures only when simpler workflows have measurable limits."
---

# Advanced Architectures

## Start with data flow

```text
manager -> specialists -> judge -> synthesis
```

Draw inputs, outputs, and dependencies before choosing a class or architecture. The more complex the structure, the more important it is to preserve intermediate outputs, route decisions, cost, and timing.

| Shape | Use when |
| --- | --- |
| Line | Each step depends on the previous one. |
| Parallel | Multiple roles work independently on the same input. |
| Graph | Mixed dependencies and join points. |
| Router | Different tasks need different workflows. |

## Start with the data flow

Draw inputs, outputs, and dependencies before choosing an architecture. If the arrows are a straight line, a sequence is enough. If branches join later, use a graph. If different task types need different workflows, use routing.

```text
manager -> specialists -> judge -> synthesis
```

| Shape | Use when |
| --- | --- |
| Line | Each step depends on the previous output. |
| Parallel | Several roles can work independently. |
| Graph | Dependencies split and join. |
| Router | The first decision is which workflow should run. |

## Keep intermediate output

Complex agent systems need inspectable raw outputs. The final answer alone rarely explains which role introduced a wrong assumption.

## Related pages

- [Installation](/en/swarms/installation/)
- [Quickstart](/en/swarms/quickstart/)
- [Core Concepts](/en/swarms/core-concepts/)
- [Architecture Overview](/en/swarms/architectures/)

## References

- Workflows: https://docs.swarms.world/concepts/workflows.md
