---
title: "Why and When to Use Hermes Agent"
description: "Decide whether Hermes Agent is the right operating model for a task, or whether a shorter CLI, script, chatbot, or workflow runner is enough."
---

# Why and When to Use Hermes Agent

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
| One role with tools | Local Hermes session. |
| Ordered stages | Clear prompt and tool boundaries. |
| Independent parallel work | Delegation or isolated tasks. |
| Unattended execution | Add logs, limits, and a stop path first. |

## Choose by operating model

Hermes is strongest when the agent is close to the terminal and needs continuity. If the job is deterministic, a script is still easier to test. If the job is mostly conversation, a chat surface may be enough.

| Use it when | Pause when |
| --- | --- |
| The work spans files, commands, and sessions | The answer is a one-off explanation |
| Skills or memory reduce repeated setup | Hidden state would make review harder |
| Remote access is useful later | You cannot explain how to stop the agent |

## The practical test

Before adopting the framework for a workflow, write down the input, expected output, review step, and failure handling. If those are hard to state, the framework choice is probably not the real problem yet.

## Related pages

- [Installation](/en/hermes-agent/installation/)
- [First Reliable Run](/en/hermes-agent/first-run/)
- [Providers and Models](/en/hermes-agent/providers-and-models/)
- [Tools and Toolsets](/en/hermes-agent/tools-and-toolsets/)

## References

- Official docs: https://hermes-agent.nousresearch.com/docs/
- Quickstart: https://hermes-agent.nousresearch.com/docs/getting-started/quickstart
- Security: https://hermes-agent.nousresearch.com/docs/user-guide/security
