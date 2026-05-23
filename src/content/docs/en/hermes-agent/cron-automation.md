---
title: "Cron Automation"
description: "Schedule Hermes work only when each job has a clear owner, input, output, limit, and shutdown path."
---

# Cron Automation

## Scheduled work needs a contract

Add this capability only after the local path is reliable. Each entry point or task needs an owner, permission boundary, output shape, logs, and a stop path.

| Concern | Question |
| --- | --- |
| Authorization | Who can trigger it? |
| Scope | What can it read or write? |
| Output | Who receives the result? |
| Stop path | How can it be disabled quickly? |

## A scheduled agent needs a contract

Cron work runs when nobody is watching. Every job should have an owner, input source, expected output, budget, log location, and stop path.

| Job part | Example |
| --- | --- |
| Owner | Team or person that receives failures. |
| Input | Repository, issue queue, feed, or metrics source. |
| Output | Draft report, pull request, message, or file. |
| Limit | Time, cost, file scope, or API budget. |
| Stop path | Command or config flag that disables the job. |

```text
Every weekday at 09:00, summarize new issues into a draft report. Do not comment on issues or modify repository files.
```

## Related pages

- [Installation](/en/hermes-agent/installation/)
- [First Reliable Run](/en/hermes-agent/first-run/)
- [Providers and Models](/en/hermes-agent/providers-and-models/)
- [Tools and Toolsets](/en/hermes-agent/tools-and-toolsets/)

## References

- Cron: https://hermes-agent.nousresearch.com/docs/user-guide/features/cron
- Security: https://hermes-agent.nousresearch.com/docs/user-guide/security
