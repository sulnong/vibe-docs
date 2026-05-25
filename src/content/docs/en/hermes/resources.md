---
title: "Resources and Update Tracking"
description: "Find Hermes Agent official docs, PyPI, GitHub releases, llms.txt, FAQ, providers, tools, and architecture references, and know when to re-verify."
---

# Resources and Update Tracking

Hermes changes quickly, and second-hand tutorials can age fast. For installation, providers, tools, gateway, and automation questions, start with official docs, PyPI, GitHub releases, and source before community posts.

## Most useful sources

| What to confirm | Start here |
| --- | --- |
| Install paths and platform differences | [Installation](https://hermes-agent.nousresearch.com/docs/getting-started/installation) |
| First run and model setup | [Quickstart](https://hermes-agent.nousresearch.com/docs/getting-started/quickstart) |
| Python requirement and package version | [PyPI hermes-agent](https://pypi.org/project/hermes-agent/) |
| Latest release | [GitHub releases](https://github.com/NousResearch/hermes-agent/releases) |
| Full documentation index | [llms.txt](https://hermes-agent.nousresearch.com/docs/llms.txt) |
| FAQ and common failures | [FAQ](https://hermes-agent.nousresearch.com/docs/reference/faq) |
| Source and issues | [GitHub repository](https://github.com/NousResearch/hermes-agent) |

## When to re-verify

Do not rely on old notes when:

- Writing team install docs.
- Pinning or upgrading a version.
- Enabling gateway, cron, or API server.
- Provider, model, OAuth, or pricing behavior changes.
- Production automation suddenly fails.
- Writing public technical docs or tutorials.

Version baselines need dates. For example: “Checked PyPI on 2026-05-25: `hermes-agent 0.14.0`, Python `>=3.11`.” A version claim without a date loses value quickly.

## Official docs by topic

| Topic | Official entry |
| --- | --- |
| CLI and TUI | https://hermes-agent.nousresearch.com/docs/user-guide/cli |
| Config and models | https://hermes-agent.nousresearch.com/docs/user-guide/configuration |
| Sessions | https://hermes-agent.nousresearch.com/docs/user-guide/sessions |
| Tools | https://hermes-agent.nousresearch.com/docs/user-guide/features/tools |
| Skills | https://hermes-agent.nousresearch.com/docs/user-guide/features/skills |
| Memory | https://hermes-agent.nousresearch.com/docs/user-guide/features/memory |
| Security | https://hermes-agent.nousresearch.com/docs/user-guide/security |
| Messaging | https://hermes-agent.nousresearch.com/docs/user-guide/messaging/index |
| Cron | https://hermes-agent.nousresearch.com/docs/user-guide/features/cron |
| Delegation | https://hermes-agent.nousresearch.com/docs/user-guide/features/delegation |
| MCP | https://hermes-agent.nousresearch.com/docs/user-guide/features/mcp |
| API Server | https://hermes-agent.nousresearch.com/docs/user-guide/features/api-server |
| Architecture | https://hermes-agent.nousresearch.com/docs/developer-guide/architecture |

## What to record locally

Do not mirror the official docs into your project. Record only the decisions that matter to your setup:

```text
Hermes version:
Install method:
Provider:
Model:
Enabled toolsets:
Gateway platforms:
Cron jobs:
Skills used:
Security boundaries:
Last verified:
Owner:
```

That makes future upgrades about known dependencies, not archaeology through chat history.

## Related pages

- [Installation](/en/hermes/installation/)
- [Providers and Models](/en/hermes/providers-and-models/)
- [Troubleshooting](/en/hermes/troubleshooting/)
- [Architecture](/en/hermes/architecture/)
