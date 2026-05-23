---
title: "Troubleshooting"
description: "Debug Swarms issues by isolating environment, provider, agent, tool, workflow, output, and deployment layers."
---

# Troubleshooting

## Debug by layer

```bash
python --version
python -m pip show swarms
```

| Symptom | First place to look |
| --- | --- |
| Command unavailable | Install and PATH. |
| Auth fails | Provider key and model name. |
| Tool fails | Test the tool alone. |
| Output is noisy | Inspect intermediate output and context. |

## Debug one layer at a time

Start with the smallest failing layer. Installation, provider auth, model call, tool execution, workflow synthesis, and deployment all fail differently.

```bash
python --version
python -m pip show swarms
python - <<'PY'
from swarms import Agent
print(Agent)
PY
```

| Symptom | First place to look |
| --- | --- |
| Command or import fails | Install path, virtual environment, and package. |
| Auth fails | Provider key, model name, and account. |
| Tool fails | Run the tool outside the agent. |
| Output is noisy | Inspect prompt, context, intermediate outputs, and loop limits. |
| Deployment differs from local | Environment variables, network access, and runtime version. |

## Related pages

- [Installation](/en/swarms/installation/)
- [Quickstart](/en/swarms/quickstart/)
- [Core Concepts](/en/swarms/core-concepts/)
- [Architecture Overview](/en/swarms/architectures/)

## References

- Quickstart: https://docs.swarms.world/quickstart.md
