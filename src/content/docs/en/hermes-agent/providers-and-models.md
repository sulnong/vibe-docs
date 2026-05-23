---
title: "Providers and Models"
description: "Configure Hermes providers, keys, models, fallback behavior, and cost boundaries without hiding the active model path."
---

# Providers and Models

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

- [Installation](/en/hermes-agent/installation/)
- [First Reliable Run](/en/hermes-agent/first-run/)
- [Tools and Toolsets](/en/hermes-agent/tools-and-toolsets/)
- [Skills System](/en/hermes-agent/skills/)

## References

- Configuration: https://hermes-agent.nousresearch.com/docs/user-guide/configuration
- Models: https://hermes-agent.nousresearch.com/docs/user-guide/configuring-models
