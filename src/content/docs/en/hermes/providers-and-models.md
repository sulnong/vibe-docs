---
title: "Providers and Models"
description: "Choose a Hermes provider, model, auth path, fallback strategy, and auxiliary model setup with clear cost and failure behavior."
---

# Providers and Models

Hermes quality depends heavily on the model path. If install works but replies are slow, tool use is weak, context runs out, or cost jumps unexpectedly, the issue is often provider and model configuration rather than Hermes itself.

## Stabilize one main path first

For the first pass, choose one provider and one main model:

```bash
hermes model
```

Do not start with fallback, routing, several OAuth paths, and multiple local endpoints. That may look flexible, but it makes failures hard to explain. First answer:

| Question | Record |
| --- | --- |
| Who provides the model | OpenRouter, Nous Portal, OpenAI, Anthropic, local OpenAI-compatible endpoint, and so on. |
| Which model | Model name, context length, and required capabilities. |
| How auth works | API key, OAuth, environment variable, config file, or platform credential. |
| How cost works | Token pricing, subscription, quota, gateway cost, or local compute. |

Once that path completes the read-only and temporary-write checks in [First Reliable Run](/en/hermes/first-run/), consider advanced configuration.

## Provider changes more than price

Provider choice affects:

- Model quality and tool-call reliability.
- Context length and pressure on long-session compression.
- Latency, rate limits, and retry behavior.
- OAuth or API key maintenance.
- Whether auxiliary work such as browser extraction, vision, TTS, image generation, and summaries uses the same model path.

When a teammate says “Hermes is unstable,” first confirm whether they are using the same provider and model. Model differences can be larger than Hermes version differences.

## Keep config readable

Whether you use the interactive picker or hand-edited config, keep a short project note:

```text
Hermes provider baseline
- Main provider:
- Main model:
- Auth source:
- Auxiliary model strategy:
- Fallback:
- Last verified:
```

Do not write keys into docs or repositories. Record where credentials come from and who can rotate them.

## When to add fallback

Fallback improves availability, but it can hide the real failure. If the main provider auth breaks and fallback keeps running, the visible symptom may become “quality got worse” instead of “the main path is down.”

Before enabling fallback, define:

| Decision | Recommendation |
| --- | --- |
| Trigger | Be explicit: timeout, rate limit, auth failure, or unavailable model. |
| Visibility | Logs or output should show when fallback happened. |
| Cost boundary | The fallback model may be more expensive. |
| Behavior difference | Models can differ in tool use, formatting, and long-context behavior. |

If a workflow needs stable, auditable output, do not let fallback silently change the model.

## Auxiliary models cost money too

Some Hermes features use auxiliary model calls: web page summaries, image understanding, browser screenshot analysis, session titles, context compression, and similar side tasks. If the default strategy uses the main model, expensive reasoning models can make those side tasks expensive too.

A practical pattern is to use the main model for core reasoning and cheaper fast models for auxiliary work. Do that only when you can observe the quality of those auxiliary tasks; optimizing the model mix too early makes debugging harder.

## Local models and OpenAI-compatible endpoints

Hermes can use OpenAI-compatible endpoints, which is useful for local models, self-hosted gateways, and internal model services. Before routing Hermes there, verify outside the agent:

- The endpoint is reachable.
- The model name is correct.
- The configured context length is real.
- Tool calling or function calling behaves as expected.
- Timeouts and retries will not leave Hermes hanging.

Local models are attractive for privacy, cost, and offline work. If the model is weak at tool use, though, the overall Hermes experience will degrade.

## Related pages

- [First Reliable Run](/en/hermes/first-run/)
- [Tools and Toolsets](/en/hermes/tools-and-toolsets/)
- [Security Model](/en/hermes/security-model/)
- [Troubleshooting](/en/hermes/troubleshooting/)

## References

- Configuration: https://hermes-agent.nousresearch.com/docs/user-guide/configuration
- Configuring Models: https://hermes-agent.nousresearch.com/docs/user-guide/configuring-models
- Providers: https://hermes-agent.nousresearch.com/docs/integrations/providers
