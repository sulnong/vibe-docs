---
title: "Troubleshooting"
description: "Debug Hermes by layer: install, provider, model, prompt, tools, state, gateway, and automation."
---

# Troubleshooting

The most important Hermes debugging rule is: do not change too many things at once. Hermes spans Python environment, model provider, prompt, tools, filesystem, gateway, and long-term state. If you reinstall, switch models, rewrite the prompt, and toggle tools all at once, you will not know what changed the behavior.

## Reproduce the smallest failure

Start with the smallest commands:

```bash
command -v hermes
hermes --help
python -m pip show hermes-agent
```

If the command layer works, move into a low-risk directory and run a tiny session. Do not debug through the original large task first.

## Locate the layer

| Layer | Typical symptom | First action |
| --- | --- | --- |
| Install | command not found, import error | Check PATH, Python version, package location. |
| Provider | auth failure, missing model, rate limit | Run `hermes model` again; confirm key, account, model name. |
| Model quality | messy output, poor tool calls | Test a smaller task; compare the same prompt across models. |
| Prompt/context | project rules ignored, old assumptions return | Check context files, memory, skills. |
| Tools | wrong path, command failure, API error | Run the tool or command outside the agent. |
| File state | wrong files changed, strange diff | Check `pwd`, `git status --short`, Git diff. |
| Gateway | no messages, mixed sessions | Check token, allowlist, session routing, gateway logs. |
| Cron/automation | background task misbehaves silently | Check owner, logs, schedule, config refresh, shutdown path. |

Most debugging moves left to right. Later layers have more variables.

## If install works but Hermes will not answer

The usual cause is provider configuration:

1. Run `hermes model` again.
2. Confirm the provider account works.
3. Confirm the model name still exists.
4. Check whether API key or OAuth expired.
5. If using an OpenAI-compatible endpoint, send a minimal request outside Hermes.

Do not begin by rewriting a complex prompt. If the model path is broken, prompt quality is irrelevant.

## If old assumptions keep returning

Find the source:

- Only this conversation: session state.
- Every new conversation: memory or global context.
- Only this project: `AGENTS.md`, `.hermes.md`, `CLAUDE.md`, or similar files.
- Only one task type: the relevant skill.

Deleting the bad source is more reliable than negating it in every prompt.

## If tool calls fail

Look at the real error, not only the final answer:

```bash
pwd
git status --short
which node
which python
```

If Hermes wants to run a command, try a read-only or dry-run version in the terminal. Path, permission, dependency, and network issues should usually reproduce outside the agent.

## If gateway or cron breaks

Remote and background issues require one extra question: which process is actually running?

- Did it load the latest config?
- Are token and allowlist correct?
- Which session did the message enter?
- Is the long-running process still on an old version?
- Where are logs, and are secrets redacted?
- How do you stop and restart safely?

Many gateway problems look like “the agent ignores me,” but are really bot token, platform permission, session routing, or service process issues.

## Save this debugging note

```text
Hermes version:
Install method:
Python version:
OS and shell:
Provider:
Model:
Command or prompt:
Working directory:
Expected result:
Actual result:
Relevant log or error:
```

It is short enough to fill in, and enough for someone else to identify the layer.

## Related pages

- [Installation](/en/hermes/installation/)
- [First Reliable Run](/en/hermes/first-run/)
- [Providers and Models](/en/hermes/providers-and-models/)
- [Architecture](/en/hermes/architecture/)

## References

- FAQ and Troubleshooting: https://hermes-agent.nousresearch.com/docs/reference/faq
- Security: https://hermes-agent.nousresearch.com/docs/user-guide/security
- CLI commands: https://hermes-agent.nousresearch.com/docs/reference/cli-commands
