---
title: "Security Model"
description: "Set reviewable boundaries for Hermes files, shell commands, credentials, remote entry points, automation, and execution backends."
---

# Security Model

Hermes security is not just “will the model make a mistake.” The real question is: when it makes a mistake, what can it touch, what can it change, where can it send results, and who can notice and stop it?

## Blast radius follows reachable resources

An agent can affect what it can reach. The first security move is to shrink that reach:

| Resource | Boundary |
| --- | --- |
| Filesystem | Start from the right directory, limit write scope, review Git diff. |
| Shell | Confirm dangerous commands, prefer dry runs, avoid default root. |
| Credentials | Isolate environment; do not put secrets in prompts, logs, or public files. |
| Browser | Separate read-only observation from logged-in actions. |
| External APIs | Limit key permissions; add budget, timeout, and logs. |
| Gateway | User allowlist, session routing, fast disable path. |
| Cron | Owner, logs, budget, shutdown path. |

Do not treat model quality as a security boundary. Permissions, isolation, logs, and human review are the reliable parts.

## Local does not mean low risk

The local backend is simple and fast, but it can reach local files, SSH keys, browser state, environment variables, and repositories. For early use:

- Do not launch from your home directory or secrets folders.
- Do not point it at a repository with important uncommitted changes.
- Do not provide production API keys by default.
- Do not put deploys, payments, destructive commands, or permission changes into automation.

The best local safety nets are usually Git diff, temporary directories, low-privilege accounts, and clear prompt boundaries.

## Remote and container backends solve different problems

Docker, SSH, cloud sandboxes, Modal, Daytona, Vercel Sandbox, Singularity, and similar backends change where shell commands execute. They are not automatically safer; they make different isolation and operations tradeoffs.

| Backend direction | Good for | Watch out for |
| --- | --- | --- |
| Local | Fast trial, local repository help | Can reach personal environment. |
| Docker/container | Dependency isolation, disposable environment | Mounts and credentials must be explicit. |
| SSH/remote machine | Remote resources or server-like environment | User permissions, logs, cleanup. |
| Cloud sandbox | Isolation and elasticity | Cost, data residency, persistence. |

Choose the smallest backend that can safely do the job.

## Remote entry points need identity and shutdown

Once gateway or API server is live, Hermes is no longer triggered only by the local user. At minimum, define:

- Which users, channels, or webhooks are allowed.
- Whether sessions are isolated across users.
- Whether remote entry points can trigger shell, file writes, or external APIs.
- How tokens are revoked.
- Who can stop the service when it misbehaves.

A bot that only drafts summaries and a bot that can edit repositories, send messages, and run production commands are not the same risk.

## Keep human confirmation for high-risk actions

These actions should not run automatically by default:

- Deleting or overwriting many files.
- Publishing packages, deploying sites, merging PRs.
- Changing production data or production configuration.
- Sending external messages, email, or channel notifications.
- Spending money through APIs, large batch jobs, or long-running cloud resources.
- Reading or forwarding sensitive information.

Hermes is valuable for drafts, plans, diffs, and command suggestions. Direct execution of high-risk actions needs extra approval, logs, and rollback.

## Related pages

- [Tools and Toolsets](/en/hermes/tools-and-toolsets/)
- [Automation and Collaboration](/en/hermes/automation/)
- [Integrations](/en/hermes/integrations/)
- [Troubleshooting](/en/hermes/troubleshooting/)

## References

- Security: https://hermes-agent.nousresearch.com/docs/user-guide/security
- Checkpoints and rollback: https://hermes-agent.nousresearch.com/docs/user-guide/checkpoints-and-rollback
- Docker backend: https://hermes-agent.nousresearch.com/docs/user-guide/docker
