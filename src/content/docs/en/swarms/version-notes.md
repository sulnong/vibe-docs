---
title: "Version Notes"
description: "Track Swarms version changes around API, architecture, CLI, memory, provider, and deployment behavior."
---

# Version Notes

## Check before upgrading

- Package version and Python requirement.
- Agent or workflow APIs.
- CLI and YAML configuration.
- Provider, memory, and tool behavior.
- Production deployment and rollback path.

| Field | Value |
| --- | --- |
| Repository | `kyegomez/swarms` |
| Package | `swarms` |
| Version checked | `12.0.0` |
| Python requirement | `>=3.10,<4.0` |
| License | `Apache-2.0` |

## Version drift is normal

Agent APIs and orchestration behavior can change quickly. Pin versions for serious work and keep a small golden example for upgrades.

| Before upgrading | Reason |
| --- | --- |
| Package version | Know the rollback target. |
| Python requirement | Avoid environment surprises. |
| Agent and workflow APIs | Catch constructor or behavior changes. |
| Provider behavior | Detect output drift. |
| CLI and YAML | Avoid stale operational commands. |

## Current baseline

This guide checked swarms 12.0.0 with Python >=3.10,<4.0. Verify package metadata and release notes again before production upgrades.

## Related pages

- [Installation](/en/swarms/installation/)
- [Quickstart](/en/swarms/quickstart/)
- [Core Concepts](/en/swarms/core-concepts/)
- [Architecture Overview](/en/swarms/architectures/)

## References

- Changelog: https://docs.swarms.world/changelog/swarms-v12.md
- PyPI package: https://pypi.org/project/swarms/
