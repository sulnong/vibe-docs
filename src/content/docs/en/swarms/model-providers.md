---
title: "Model Providers"
description: "Configure model providers for Swarms while keeping model choice, keys, cost, and fallback behavior visible."
---

# Model Providers

## Stabilize one provider first

Provider choice affects auth, cost, latency, context length, and tool behavior. Stabilize one provider and one model before adding fallback, routing, or more complex model combinations.

| Record | Why it matters |
| --- | --- |
| Provider | Explains auth and billing. |
| Model | Explains quality, context, and cost. |
| Key source | Explains how deployment receives credentials. |
| Fallback | Explains what happens on failure. |

## Provider configuration is part of the design

Model choice controls cost, latency, context length, reliability, and output style. Keep the active provider and model obvious in configuration or deployment notes.

| Decision | Record it because |
| --- | --- |
| Provider | It explains credentials, billing, and rate limits. |
| Model | It explains quality, context length, and cost. |
| Fallback | It changes failure behavior and can hide the primary error. |
| Evaluation prompt | It gives you a quick way to compare future model changes. |

```bash
# Example only: use the variable names required by your selected provider.
export OPENAI_API_KEY=...

```

## Related pages

- [Installation](/en/swarms/installation/)
- [Quickstart](/en/swarms/quickstart/)
- [Core Concepts](/en/swarms/core-concepts/)
- [Architecture Overview](/en/swarms/architectures/)

## References

- Providers: https://docs.swarms.world/integrations/model-providers.md
