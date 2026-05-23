---
title: "Security Model"
description: "Set Hermes boundaries for commands, filesystem access, credentials, remote users, automation, and rollback."
---

# Security Model

## Bound the blast radius

Credentials, terminal access, file writes, browser access, messaging, and automation all expand what an agent can affect. Give the smallest permission by default and use isolation plus rollback to reduce the cost of mistakes.

| Surface | Boundary |
| --- | --- |
| Local work | Git diffs and checkpoints. |
| Container or remote | Explicit mounts and cleanup. |
| Credentials | Keep out of logs and public files. |
| Unattended work | Budgets, alerts, and a stop path. |

## Security is about reach

The agent can only affect what it can reach. Reduce default reach, make high-impact actions visible, and use isolation when the task or input is uncertain.

| Surface | Boundary |
| --- | --- |
| Terminal commands | Approval for destructive commands. |
| Filesystem writes | Git diffs, checkpoints, and review. |
| Credentials | Environment isolation and no secrets in logs. |
| Remote backends | Explicit mounts, users, and cleanup. |
| Automation | Budgets, alerts, and stop paths. |

## Pick the backend for the risk

Local execution is simple and fast. Containers add dependency isolation. SSH and cloud backends add reach and operational complexity. Choose the smallest backend that can safely do the job.

## Related pages

- [Installation](/en/hermes-agent/installation/)
- [First Reliable Run](/en/hermes-agent/first-run/)
- [Providers and Models](/en/hermes-agent/providers-and-models/)
- [Tools and Toolsets](/en/hermes-agent/tools-and-toolsets/)

## References

- Security: https://hermes-agent.nousresearch.com/docs/user-guide/security
