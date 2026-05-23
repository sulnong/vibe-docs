---
title: "CLI and YAML"
description: "Use Swarms CLI and YAML files for repeatable agent and workflow runs."
---

# CLI and YAML

## YAML is for repetition

```yaml
agents:
  - name: researcher
    system_prompt: "Collect factual notes with source links."
workflow:
  type: sequential
```

Secrets, long private notes, and one-off experiments do not belong in reusable YAML. Configuration controls behavior, so review it like code.

## Interactive work and repeatable work are different

Use Python when the workflow is application logic. Use YAML or CLI configuration when the workflow should be run repeatedly by someone who should not edit code.

| Need | Prefer |
| --- | --- |
| Prototype logic | Python script |
| Run a known workflow | CLI or YAML |
| Store secrets | Environment or secrets manager |
| Review behavior | Versioned YAML near the project |

```yaml
agents:
  - name: researcher
    system_prompt: "Collect factual notes with source links."
workflow:
  type: sequential
```

## Related pages

- [Installation](/en/swarms/installation/)
- [Quickstart](/en/swarms/quickstart/)
- [Core Concepts](/en/swarms/core-concepts/)
- [Architecture Overview](/en/swarms/architectures/)

## References

- Cli: https://docs.swarms.world/cli/overview.md
- Cli Config: https://docs.swarms.world/cli/configuration.md
