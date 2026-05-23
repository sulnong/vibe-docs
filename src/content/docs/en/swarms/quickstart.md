---
title: "Quickstart"
description: "Create a first Swarms Agent, run a harmless task, and inspect output before adding orchestration."
---

# Quickstart

## Run the smallest useful task

```python
from swarms import Agent

agent = Agent(
    agent_name="docs_summarizer",
    system_prompt="You summarize technical notes clearly and briefly.",
    model_name="gpt-4o-mini",
    max_loops=1,
)

result = agent.run("Write three practical checks before adopting a new agent framework.")
print(result)
```

The first run proves the basic path: the tool starts, reaches the model, and returns an inspectable result. Do not begin with production data, remote entry points, or high-risk tools.

| Signal | Meaning |
| --- | --- |
| Command or script runs | Environment and package installation are probably correct. |
| Model call succeeds | Provider configuration is usable. |
| Output is bounded | The loop or session did not run away. |
| State can be found | You can recover or debug later. |

## Make the first run low-risk

Run one Agent with one prompt and one output. Do not add a workflow, memory, tools, or routing until the single script returns a result you can inspect.

```bash
python first_agent.py
```

| If this fails | Look here first |
| --- | --- |
| Command or import fails | Installation and active environment. |
| Provider auth fails | Key source, model name, and provider account. |
| Output is too broad | Prompt, loop limit, and output instruction. |
| State is hard to find | Session, logs, and working directory. |

## Related pages

- [Installation](/en/swarms/installation/)
- [Core Concepts](/en/swarms/core-concepts/)
- [Architecture Overview](/en/swarms/architectures/)
- [Production](/en/swarms/production/)

## References

- Quickstart: https://docs.swarms.world/quickstart.md
- Agent: https://docs.swarms.world/api/agent.md
