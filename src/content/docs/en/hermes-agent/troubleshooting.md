---
title: "Troubleshooting"
description: "Debug Hermes problems by layer: installation, provider auth, model calls, tools, memory, gateway, automation, and deployment."
---

# Troubleshooting

## Debug by layer

```bash
command -v hermes
hermes --help
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
command -v hermes
hermes --help
```

| Symptom | First place to look |
| --- | --- |
| Command or import fails | Install path, virtual environment, and package. |
| Auth fails | Provider key, model name, and account. |
| Tool fails | Run the tool outside the agent. |
| Output is noisy | Inspect prompt, context, intermediate outputs, and loop limits. |
| Deployment differs from local | Environment variables, network access, and runtime version. |

## Related pages

- [Installation](/en/hermes-agent/installation/)
- [First Reliable Run](/en/hermes-agent/first-run/)
- [Providers and Models](/en/hermes-agent/providers-and-models/)
- [Tools and Toolsets](/en/hermes-agent/tools-and-toolsets/)

## References

- Faq: https://hermes-agent.nousresearch.com/docs/reference/faq
- Security: https://hermes-agent.nousresearch.com/docs/user-guide/security
