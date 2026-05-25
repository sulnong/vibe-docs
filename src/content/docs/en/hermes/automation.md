---
title: "Automation and Collaboration"
description: "After local Hermes sessions are reliable, use messaging gateways, cron, delegation, and Kanban to expand automation and multi-agent collaboration."
---

# Automation and Collaboration

Hermes has attractive advanced features: trigger work from Telegram or Discord, schedule reports with cron, split repository reading across subagents, and keep multi-agent state in Kanban. These should all rest on one condition: the plain local session already works.

If local `hermes` still struggles with model, tool, or path issues, remote entry points and unattended runs will amplify the mess.

## First ask whether automation is needed

Automation fits when:

- Inputs are stable, such as issues, feeds, logs, or a fixed folder.
- Outputs are clear, such as a draft report, PR, summary, or alert.
- Someone owns failures.
- Logs, budgets, permission boundaries, and shutdown paths exist.
- The same workflow has been run manually several times.

Automation is a poor fit when the task definition is still changing, output is hard to review, hidden judgment is required, failure cost is high, or the main motivation is that autonomous agents sound exciting.

## Messaging gateway changes the trigger boundary

The local CLI is triggered by the person at the keyboard. Gateway lets external surfaces trigger Hermes: Telegram, Discord, Slack, WhatsApp, Signal, Email, SMS, Matrix, Mattermost, Home Assistant, webhooks, API frontends, and more.

That immediately creates new questions:

| Question | Needs an answer |
| --- | --- |
| Who may trigger Hermes | Allowlist, group scope, bot token, identity mapping. |
| Which conversation maps to which session | Prevent state leaks across users or groups. |
| Which tools remote users may trigger | Read-only, file writes, shell, APIs, and publishing need separate boundaries. |
| Where logs live | You need to know who triggered what and where it failed. |
| How to shut it down | Token rotation, service stop, webhook disable, permission revoke. |

The first gateway version should usually be read-only: status checks, summaries, and drafts. A bot that can edit repositories, send messages, or call production APIs needs stricter authorization and human confirmation.

## Cron jobs are small services

Cron is not “ask the agent later.” It is unattended service behavior. Each job should define:

```text
Name:
Owner:
Schedule:
Input:
Allowed tools:
Output:
Budget:
Logs:
Failure handling:
Shutdown:
```

A healthy example:

```text
Every weekday at 09:00, summarize new GitHub issues into a draft Markdown report.
Do not comment on issues, close issues, or modify repository files.
Send failures to the owner.
```

If a job has no owner, it should not run long term.

## Delegation is for bounded parallel work

Subagent delegation lets Hermes spawn isolated child agents. It is useful when:

- Several subsystems can be read independently.
- Several options can be compared independently.
- One agent implements and another reviews.
- Each subtask has a clear file scope or read-only scope.

It is a poor fit when:

- Requirements are still unclear.
- Several agents would edit the same files.
- The work needs constant hidden state sharing.
- The next main step depends entirely on one child task, making waiting slower than doing it.

When delegating, write ownership explicitly:

```text
You own src/providers/. Do not modify CLI files.
Return changed paths, assumptions, and verification output.
```

## Kanban stores shared state, not all thinking

Kanban is useful when multi-agent or long-running work needs durable current state. Cards should say what the next output is, not copy the whole chat history.

Good cards usually include:

| Field | Content |
| --- | --- |
| Title | A specific result, not a broad topic. |
| Owner | One person or agent responsible for progress. |
| Status | The real current phase. |
| Scope | Which files may be changed or which sources may be read. |
| Acceptance | How completion is checked. |

Long reasoning, design decisions, and background notes belong in project docs or issues. The board keeps collaboration state from getting lost.

## Checklist before automation

Before enabling gateway, cron, delegation, or Kanban, confirm:

- The local CLI can run the same kind of task reliably.
- Provider and model are explicit.
- Tool permissions are minimal.
- Output is reviewable.
- Failures have logs and an owner.
- You can pause, revoke tokens, or stop the service quickly.

Automation should not remove management. It should move a repeatable workflow onto a better trigger surface.

## Related pages

- [First Reliable Run](/en/hermes/first-run/)
- [Tools and Toolsets](/en/hermes/tools-and-toolsets/)
- [Security Model](/en/hermes/security-model/)
- [Integrations](/en/hermes/integrations/)

## References

- Messaging overview: https://hermes-agent.nousresearch.com/docs/user-guide/messaging/index
- Cron Jobs: https://hermes-agent.nousresearch.com/docs/user-guide/features/cron
- Delegation: https://hermes-agent.nousresearch.com/docs/user-guide/features/delegation
- Kanban Multi-Agent: https://hermes-agent.nousresearch.com/docs/user-guide/features/kanban
