---
title: "Production"
description: "Prepare Swarms workloads for production with observability, retries, limits, evaluation, and rollback."
---

# Production

## Production systems are still production systems

| Control | Purpose |
| --- | --- |
| Logs | Understand prompts, tools, errors, and cost. |
| Timeouts | Stop stuck calls. |
| Retries | Handle transient failures. |
| Budgets | Limit spend and latency. |
| Rollback | Return to the last safe behavior. |

Measure before scaling: model calls, tools, data access, queues, and synthesis have different limits.

## Production agent systems are still production systems

The framework handles orchestration, not operational responsibility. Add logs, timeouts, retries, budgets, evaluation, and rollback before trusting autonomous work.

| Control | Purpose |
| --- | --- |
| Logs | Understand prompts, routes, tool calls, errors, and cost. |
| Timeouts | Stop stuck calls and tools. |
| Retries | Handle transient provider or network failures. |
| Budgets | Limit spend and latency. |
| Rollback | Return to the last safe behavior. |

## Scale the measured bottleneck

Model calls, tool calls, data access, queues, and synthesis all bottleneck differently. Measure first; then decide whether to parallelize, cache, queue, or simplify.

## Related pages

- [Installation](/en/swarms/installation/)
- [Quickstart](/en/swarms/quickstart/)
- [Core Concepts](/en/swarms/core-concepts/)
- [Architecture Overview](/en/swarms/architectures/)

## References

- Production: https://docs.swarms.world/deployment/production-best-practices.md
- Monitoring: https://docs.swarms.world/deployment/monitoring.md
