---
title: "Structured Outputs"
description: "Use JSON or typed outputs when downstream code needs reliable agent responses."
---

# Structured Outputs

## Define the schema first

```json
{"risk":"missing rollback path","severity":"high","evidence":"deployment notes mention no revert command"}
```

The point of structured output is validation, not tidy appearance. Missing fields, wrong types, and invalid enum values should be rejectable or retryable.

## Use structure when code reads the answer

If a person reads the response, prose may be enough. If another program consumes it, define the schema first and validate the result.

```json
{"risk":"missing rollback path","severity":"high","evidence":"deployment notes mention no revert command"}
```

| Failure | Handling |
| --- | --- |
| Missing field | Reject, retry, or send to review. |
| Wrong type | Validate before using. |
| Ambiguous value | Use enumerations or stricter schema. |

## Related pages

- [Installation](/en/swarms/installation/)
- [Quickstart](/en/swarms/quickstart/)
- [Core Concepts](/en/swarms/core-concepts/)
- [Architecture Overview](/en/swarms/architectures/)

## References

- Structured: https://docs.swarms.world/concepts/structured-outputs.md
