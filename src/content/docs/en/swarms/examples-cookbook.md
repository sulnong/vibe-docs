---
title: "Examples Cookbook"
description: "Use Swarms examples as starting points, then add boundaries before adapting them to real systems."
---

# Examples Cookbook

## Examples are starting points

| Look for | Question |
| --- | --- |
| Task shape | Is it really your task? |
| Secrets | Where do they come from? |
| Side effects | Can it write, send, or delete? |
| Stopping | What limits loops and retries? |

## Examples show shape, not production readiness

Run examples in a disposable environment first. Before adapting one, identify secrets, side effects, loop limits, output shape, and review path.

| Look for | Question |
| --- | --- |
| Task shape | Is it actually your task? |
| Secrets | Where do keys come from? |
| Side effects | Can it write, send, spend, or delete? |
| Stopping | What limits loops and retries? |
| Output | Who or what consumes the result? |

## Move serious examples into application code

A useful example often grows into a workflow. When that happens, give it ownership, tests, configuration, and deployment notes like any other code.

## Related pages

- [Installation](/en/swarms/installation/)
- [Quickstart](/en/swarms/quickstart/)
- [Core Concepts](/en/swarms/core-concepts/)
- [Architecture Overview](/en/swarms/architectures/)

## References

- Examples: https://docs.swarms.world/examples/basic-agent.md
