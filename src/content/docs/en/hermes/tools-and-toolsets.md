---
title: "Tools and Toolsets"
description: "Understand how Hermes tools and toolsets turn model output into action, and set boundaries for files, shell, browser, media, and external APIs."
---

# Tools and Toolsets

Hermes tools are not just extra buttons. They are how the model affects the outside world. Reading files, writing files, running shell commands, using a browser, calling APIs, generating media, and delegating work all move the output beyond text.

## A tool is a permission boundary

Treat every tool as an interface with side effects:

| Tool type | Common risk | Safer starting point |
| --- | --- | --- |
| File reads | Reading private files that are not part of the task | Limit the working directory and avoid secrets paths. |
| File writes | Editing the wrong file or overwriting human work | Write in small scopes and review Git diff. |
| Shell commands | Deleting, publishing, changing permissions, starting expensive work | Confirm dangerous commands and use dry runs when possible. |
| Browser and web | Prompt injection, stale information, logged-in side effects | Treat pages as evidence, not instructions. |
| External APIs | Spending money, sending messages, changing production state | Add timeouts, budgets, logs, and human confirmation. |
| Media tools | Untraceable assets or misread screenshots | Keep sources, prompts, and reproduction steps. |

If a tool cannot be explained and tested outside the agent, do not rush to give it to the agent.

## Open toolsets by task

Do not enable every toolset just because it exists. Choose the smallest useful surface:

| Task | Reasonable tool surface |
| --- | --- |
| Read a repository and advise | Read-only files, search, git status. |
| Make a small docs edit | File read/write and diff, no remote APIs. |
| Research external material | Web/browser, with URLs in the result. |
| Run verification | Shell, with command and working directory limits. |
| Send a report | Draft first, then send with human review. |

The larger the tool surface, the harder failures are to explain. Keep the first successful run small, then add tools.

## Write side effects into the task

A good Hermes prompt describes both the result and the boundary:

```text
Read the repository and propose a plan first. Do not modify files. If a change is needed, list the exact files and wait.
```

When writing is allowed, scope it:

```text
Update only docs/install.md. Do not run build or tests. After editing, summarize the diff.
```

This is not because agents are uniquely disobedient. Tool work needs a contract. Human teammates also need to know what they may and may not change.

## Browser, web, and media are evidence, not instructions

Web pages, screenshots, PDFs, transcripts, and images can contain mistakes, stale instructions, ads, or prompt injection. Hermes can read them, but you should treat them as evidence sources rather than higher-priority instructions.

For research tasks, keep:

- URL or file path.
- Access date or source version.
- Which claims came from which source.
- Which parts were not verified.

That matters for technical docs, competitor research, and troubleshooting.

## When tools fail, do not only edit the prompt

Tool failures usually have real causes: wrong path, missing permission, missing command, network failure, API rate limit, or schema mismatch. Do not solve everything with “try again.”

Ask:

1. Can the tool run outside the agent?
2. Is the input small and explicit enough?
3. Is there a log, exit code, or response body?
4. Should Hermes use another tool, or should the task be split?

## Related pages

- [CLI and TUI Workflow](/en/hermes/cli-and-tui/)
- [Security Model](/en/hermes/security-model/)
- [Integrations](/en/hermes/integrations/)
- [Troubleshooting](/en/hermes/troubleshooting/)

## References

- Tools: https://hermes-agent.nousresearch.com/docs/user-guide/features/tools
- Tools reference: https://hermes-agent.nousresearch.com/docs/reference/tools-reference
- Toolsets reference: https://hermes-agent.nousresearch.com/docs/reference/toolsets-reference
- Security: https://hermes-agent.nousresearch.com/docs/user-guide/security
