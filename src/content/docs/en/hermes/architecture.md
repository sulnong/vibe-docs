---
title: "Architecture"
description: "Understand Hermes internals through the agent loop, provider runtime, prompt assembly, tools, sessions, gateway, and storage."
---

# Architecture

When reading Hermes internals, do not start with class names. Start with the path of one request: user input enters a session, context and prompt are assembled, provider runtime calls a model, the model may call tools, tool results return to the loop, and state is stored or sent back through the current surface.

```text
input -> session/context -> prompt assembly -> provider runtime
      -> agent loop -> tools -> result -> storage/gateway
```

That path helps you decide where a problem belongs.

## The agent loop is the core behavior

The agent loop controls how Hermes moves between model responses and tool calls. A complex task is usually not one model call; it is a sequence: read files, reason, call a tool, observe the result, continue.

When debugging, ask:

- Did the model receive the right context?
- Did the tool call match the schema?
- Did the tool result return to the next prompt?
- Does the loop have stop conditions, budgets, or confirmation points?
- Can the final answer be traced through intermediate steps?

If the final output is wrong, the last turn may not be the source. An earlier tool result, context compression, or prompt assembly step may already have introduced the bad assumption.

## Provider runtime decides the model path

Provider runtime resolves provider, model, credentials, API mode, fallback, and auxiliary models. Problems here often appear as:

- Wrong model selected.
- Auth failure.
- Silent fallback.
- Auxiliary tasks using an expensive model.
- OpenAI-compatible endpoint mismatch.

Provider configuration is not peripheral. It is part of the architecture.

## Prompt assembly decides what the agent knows

Hermes assembles system instructions, project context, user input, references, memory, session state, tool descriptions, and related layers into the prompt. Two problems are common:

- Too little context, so the model misses key constraints.
- Too much or dirty context, so stale assumptions or private process language steer the model.

This is why context files, memory, and skills need different jobs. They all eventually affect prompt assembly.

## Tools runtime is the side-effect layer

Tools runtime turns model intent into action: file reads and writes, commands, web browsing, external tools, MCP, media generation, and more. Architecturally, inspect:

- Whether tool schemas are clear.
- How permissions and toolsets are filtered.
- How errors return to the agent.
- Whether high-risk actions require approval.
- Whether logs can reconstruct calls.

Tool-layer bugs often do not look like “bad answer.” They look like “wrong action.” Security needs permissions and logs, not just model discipline.

## Gateway and automation change entry points

CLI is a local synchronous entry point. Gateway, cron, webhooks, API server, Kanban, and delegation add more entry points and state. Their architecture concerns are:

- Identity and authorization.
- Session routing.
- Config refresh for long-running processes.
- Logs and error delivery.
- Multi-agent state storage and recovery.

Remote-entry problems are often not model-quality problems. They are questions like “which session did this message enter,” “why could this user trigger that tool,” or “is the background process still using old config.”

## Find the layer by symptom

| Symptom | First layer to inspect |
| --- | --- |
| Command will not start | Install, CLI launcher, Python environment. |
| Model selection exists but calls fail | Provider runtime, credentials, endpoint. |
| Project rules are ignored | Prompt assembly, context files. |
| Tool arguments are wrong | Tools runtime, schema, model tool capability. |
| Gateway mixes conversations | Gateway internals, session routing. |
| Long-session quality drops | Context compression, session storage, memory. |

## Related pages

- [Providers and Models](/en/hermes/providers-and-models/)
- [Context Files](/en/hermes/context-files/)
- [Tools and Toolsets](/en/hermes/tools-and-toolsets/)
- [Troubleshooting](/en/hermes/troubleshooting/)

## References

- Architecture: https://hermes-agent.nousresearch.com/docs/developer-guide/architecture
- Agent Loop: https://hermes-agent.nousresearch.com/docs/developer-guide/agent-loop
- Prompt Assembly: https://hermes-agent.nousresearch.com/docs/developer-guide/prompt-assembly
- Provider Runtime: https://hermes-agent.nousresearch.com/docs/developer-guide/provider-runtime
- Gateway Internals: https://hermes-agent.nousresearch.com/docs/developer-guide/gateway-internals
