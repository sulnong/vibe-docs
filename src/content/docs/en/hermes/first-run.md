---
title: "First Reliable Run"
description: "Configure a Hermes model, run a low-risk local session, and confirm the output, state, and recovery path are inspectable."
---

# First Reliable Run

The first Hermes run should not be a large task. Its job is to prove the smallest chain: the command starts, provider auth works, the model responds, the working directory is correct, output is bounded, and you know where to look if it fails.

## Start from the working directory

Hermes reads the current directory, project context, and available tools. Start from a low-risk project, ideally one you can inspect with Git:

```bash
cd /path/to/project
git status --short
hermes
```

For a trial run, a temporary directory with a README is enough. Do not start the first session from a production repository, a secrets directory, or a working tree full of important uncommitted changes.

## Configure one model first

The official quickstart treats `hermes model` as the key setup step. It walks through provider, model, and authentication choices:

```bash
hermes model
```

Do not begin with routing or fallback. Get one provider and one model working first. Compare quality, cost, latency, and context length after the basic path is stable.

If you use an OpenAI-compatible local server or self-hosted model, test the endpoint, model name, and key with the smallest possible request first. Many “agent” problems are really model-route problems.

## Make the first task read-only

Use a prompt like:

```text
Read README.md and summarize what this project does in five bullets. Do not modify files.
```

This checks three things: Hermes sees the right directory, the model can return a structured answer, and the session respects a no-write boundary.

If this is unstable, do not add browser tools, shell commands, gateway, or cron yet. Go back to the install and provider layers.

## Then write only to a temporary path

After the read-only task works, try a low-risk write:

```text
Read README.md and write a short summary to /tmp/hermes-first-run.md. Do not modify project files.
```

Then inspect the result yourself:

```bash
ls -l /tmp/hermes-first-run.md
sed -n '1,80p' /tmp/hermes-first-run.md
git status --short
```

`git status --short` should not show project changes caused by the task. If it does, inspect the diff before expanding scope.

## Record the first successful path

A useful team note can be very short:

```text
OS:
Shell:
Hermes version:
Python version:
Provider:
Model:
First successful command:
Working directory:
```

This is not paperwork for its own sake. It tells the next person which version, model, and environment made the behavior true.

## If the first run fails

Debug one layer at a time:

| Symptom | First place to look |
| --- | --- |
| `hermes` is unavailable | [Installation](/en/hermes/installation/) |
| Provider auth fails | Key source, account permission, model name, region. |
| Output is empty, slow, or messy | Model choice, context length, prompt boundary. |
| README cannot be read | Current working directory or file permissions. |
| Output is written to the wrong place | Prompt boundary, tool permissions, working directory. |

## When to move on

Once you can complete a read-only task and a temporary write, and you can name the provider, model, working directory, and state path, continue with:

- [Providers and Models](/en/hermes/providers-and-models/)
- [CLI and TUI Workflow](/en/hermes/cli-and-tui/)
- [Tools and Toolsets](/en/hermes/tools-and-toolsets/)
- [Security Model](/en/hermes/security-model/)

## References

- Quickstart: https://hermes-agent.nousresearch.com/docs/getting-started/quickstart
- CLI: https://hermes-agent.nousresearch.com/docs/user-guide/cli
- Sessions: https://hermes-agent.nousresearch.com/docs/user-guide/sessions
