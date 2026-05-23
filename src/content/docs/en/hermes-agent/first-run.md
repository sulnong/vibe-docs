---
title: "First Reliable Run"
description: "Run a first local Hermes session, prove the model connection, and locate the state you will need for recovery."
---

# First Reliable Run

## Run the smallest useful task

```bash
hermes
```

The first run proves the basic path: the tool starts, reaches the model, and returns an inspectable result. Do not begin with production data, remote entry points, or high-risk tools.

| Signal | Meaning |
| --- | --- |
| Command or script runs | Environment and package installation are probably correct. |
| Model call succeeds | Provider configuration is usable. |
| Output is bounded | The loop or session did not run away. |
| State can be found | You can recover or debug later. |

## Make the first run low-risk

Ask Hermes to perform a harmless read-only task first, then a tiny write into a temporary location. That proves the terminal path without touching application files.

```text
Read README.md and write a five-bullet summary to /tmp/hermes-first-run.md. Do not modify project files.
```

| If this fails | Look here first |
| --- | --- |
| Command or import fails | Installation and active environment. |
| Provider auth fails | Key source, model name, and provider account. |
| Output is too broad | Prompt, loop limit, and output instruction. |
| State is hard to find | Session, logs, and working directory. |

## Related pages

- [Installation](/en/hermes-agent/installation/)
- [Providers and Models](/en/hermes-agent/providers-and-models/)
- [Tools and Toolsets](/en/hermes-agent/tools-and-toolsets/)
- [Skills System](/en/hermes-agent/skills/)

## References

- Quickstart: https://hermes-agent.nousresearch.com/docs/getting-started/quickstart
- Cli: https://hermes-agent.nousresearch.com/docs/user-guide/cli
- Sessions: https://hermes-agent.nousresearch.com/docs/user-guide/sessions
