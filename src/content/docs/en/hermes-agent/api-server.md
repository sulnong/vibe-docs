---
title: "API Server"
description: "Expose Hermes through an OpenAI-compatible API only when another application truly needs a network interface."
---

# API Server

## Define the external contract first

MCP, AOP, and API servers expose local agent capability to other systems. Before using them seriously, define authentication, tool lists, input schemas, rate limits, logs, and failure handling.

| Question | Reason |
| --- | --- |
| Who calls it? | Defines authentication. |
| What can be called? | Defines tool filtering. |
| What happens on failure? | Defines retry and rollback. |
| How is it observed? | Defines logs and tracing. |

## External interfaces need explicit contracts

MCP servers, AOP services, and API servers all make agent behavior callable by another system. Define auth, tool lists, input schemas, rate limits, logs, and failure handling before relying on them.

| Question | Design consequence |
| --- | --- |
| Who calls it? | Authentication and authorization. |
| What can be called? | Tool filtering and schemas. |
| How long can it run? | Timeouts and queueing. |
| What if it fails? | Retry, rollback, and user-visible errors. |
| How is it observed? | Logs, traces, and metrics. |

## Wrap a known local workflow

Do not expose an interface to behavior you cannot run locally. The network surface should wrap a workflow that already has clear permissions and recovery.

## Related pages

- [Installation](/en/hermes-agent/installation/)
- [First Reliable Run](/en/hermes-agent/first-run/)
- [Providers and Models](/en/hermes-agent/providers-and-models/)
- [Tools and Toolsets](/en/hermes-agent/tools-and-toolsets/)

## References

- Api: https://hermes-agent.nousresearch.com/docs/user-guide/features/api-server
