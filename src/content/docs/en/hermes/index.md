---
title: "Hermes Agent Guide"
description: "Understand Hermes Agent through installation, first run, provider setup, tool boundaries, memory, skills, and automation paths."
---

# Hermes Agent Guide

Hermes Agent is a terminal-native agent from Nous Research. It is not just another chat window. It can work inside a directory, read files, run commands, call tools, keep sessions, use memory, and connect to messaging platforms.

If you only need an explanation, a normal chatbot is lighter. Hermes becomes interesting when the model needs to stay close to a codebase, reuse project rules, resume prior work, or accept tasks through Telegram, Discord, Slack, webhooks, and other surfaces.

## Start with the right expectation

Hermes is strongest when it puts the model inside an operating environment. That environment can reach code, the shell, browser tools, external services, and messaging gateways. The upside is real, and so is the blast radius.

Do not turn on every feature on day one. A more reliable learning path is:

1. Install it and confirm the `hermes` command is visible.
2. Configure one provider and one model.
3. Run a small read-only task and check that the session returns a bounded answer.
4. Then try file edits, shell commands, browser tools, memory, and skills.
5. Add gateway, cron, delegation, Kanban, MCP, or API server only after the local path is boring.

That order sounds conservative, but it prevents the usual first-week confusion: not knowing whether the problem is install, auth, model choice, tool execution, or the prompt itself.

## Current version baseline

| Field | Value |
| --- | --- |
| Repository | `NousResearch/hermes-agent` |
| Package | `hermes-agent` |
| PyPI version | `0.14.0` |
| Python requirement | `>=3.11` |
| Latest release | `v2026.5.16` |

These values were checked against PyPI and GitHub releases on 2026-05-25. Hermes moves quickly, so recheck the official docs, PyPI, and release notes before pinning production behavior.

## Choose your next page

| Your situation | Next page |
| --- | --- |
| You have not installed Hermes yet | [Installation](/en/hermes/installation/) |
| It is installed but you have not completed a full session | [First Reliable Run](/en/hermes/first-run/) |
| You are unsure which provider or model to use | [Providers and Models](/en/hermes/providers-and-models/) |
| You worry about file edits or shell commands | [Tools and Toolsets](/en/hermes/tools-and-toolsets/) and [Security Model](/en/hermes/security-model/) |
| You want durable project behavior | [Context Files](/en/hermes/context-files/), [Memory and Sessions](/en/hermes/memory-and-sessions/), and [Skills System](/en/hermes/skills/) |
| You want Telegram, cron, subagents, or Kanban | [Automation and Collaboration](/en/hermes/automation/) |

## A minimal working path

The shortest useful path is not “install it and let it edit the project.” First prove each layer:

```bash
python --version
pip install hermes-agent
hermes --help
hermes model
hermes
```

For the first conversation, ask for a low-risk task such as reading the README and writing a summary to a temporary file. Once that works consistently, expand the tool surface.

## Where Hermes fits

| Task shape | Fit |
| --- | --- |
| Read a repository, summarize structure, find relevant files | Good fit, start read-only. |
| Make a small code change and preserve a diff | Good fit with a clear scope and review. |
| Repeat release notes, research reports, or routine checks | Good candidate for skills or cron. |
| Accept tasks from a remote chat platform | Possible, but authorization and shutdown matter. |
| Production databases, money movement, account changes, releases | Keep human confirmation in the path. |
| Fully deterministic transformations | A script is usually better. |

## How this guide is organized

This guide does not mirror every official command. It focuses on the decisions that make early Hermes use succeed or fail: how to install it, how to verify the first session, how to choose a model, when to delay advanced features, and where to look when something breaks.

Read these four pages first:

- [Installation](/en/hermes/installation/)
- [First Reliable Run](/en/hermes/first-run/)
- [Providers and Models](/en/hermes/providers-and-models/)
- [Tools and Toolsets](/en/hermes/tools-and-toolsets/)

Then move into memory, skills, automation, integrations, architecture, or troubleshooting based on the work in front of you.

## References

- Hermes Agent documentation: https://hermes-agent.nousresearch.com/docs/
- Official llms.txt: https://hermes-agent.nousresearch.com/docs/llms.txt
- GitHub repository: https://github.com/NousResearch/hermes-agent
- PyPI package: https://pypi.org/project/hermes-agent/
