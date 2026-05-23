---
title: "Hermes Agent Guide"
description: "Learn Hermes Agent as a long-running terminal agent: install it, configure providers, use tools and skills, add memory, and automate only when the local workflow is reliable."
---

# Hermes Agent Guide

Hermes Agent is a terminal-native autonomous coding and task agent from Nous Research with persistent memory, agent-created skills, messaging gateways, delegation, automation, and multiple execution backends.

## How to think about it

Treat Hermes as a long-running terminal workspace, not a one-shot prompt. It fits work that needs files, commands, sessions, memory, and reusable procedures. Keep the local session reliable before adding messaging, cron, or multi-agent coordination.

## Current version baseline

| Field | Value |
| --- | --- |
| Repository | `NousResearch/hermes-agent` |
| Package | `hermes-agent` |
| Version checked | `0.14.0` |
| Python requirement | `>=3.11` |
| License | `MIT` |

## Keep reading

- [Installation](/en/hermes-agent/installation/)
- [First Reliable Run](/en/hermes-agent/first-run/)
- [Providers and Models](/en/hermes-agent/providers-and-models/)
- [Tools and Toolsets](/en/hermes-agent/tools-and-toolsets/)
- [Skills System](/en/hermes-agent/skills/)
- [Troubleshooting](/en/hermes-agent/troubleshooting/)

## What to read first

If Hermes is new in the project, read installation and first-run material before anything else. The features that look exciting, such as messaging gateways, cron jobs, delegation, and persistent memory, are much easier to evaluate after a plain local session works.

| Reader situation | Best next page |
| --- | --- |
| Need to install | [Installation](/en/hermes-agent/installation/) |
| Installed but not configured | [First Reliable Run](/en/hermes-agent/first-run/) |
| Model choice is unclear | [Providers and Models](/en/hermes-agent/providers-and-models/) |
| Already automating work | [Security Model](/en/hermes-agent/security-model/) |

## What this guide assumes

The version baseline is hermes-agent 0.14.0, with Python >=3.11. Agent projects move quickly, so use these docs as a practical map and verify exact commands against the official documentation before pinning production behavior.

## Related pages

- [Installation](/en/hermes-agent/installation/)
- [First Reliable Run](/en/hermes-agent/first-run/)
- [Providers and Models](/en/hermes-agent/providers-and-models/)
- [Tools and Toolsets](/en/hermes-agent/tools-and-toolsets/)

## References

- Repository: https://github.com/NousResearch/hermes-agent
- Official docs: https://hermes-agent.nousresearch.com/docs/
- LLM docs index: https://hermes-agent.nousresearch.com/docs/llms.txt
- PyPI package: https://pypi.org/project/hermes-agent/
