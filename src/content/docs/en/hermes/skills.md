---
title: "Skills System"
description: "Use Hermes skills for reusable workflows and domain knowledge without turning temporary notes, stale assumptions, or private process into permanent behavior."
---

# Skills System

Skills are reusable knowledge and workflow units for Hermes. Think of a skill as a task-specific operating manual that loads when relevant: it stays out of the way most of the time, then teaches the agent how to do a class of work.

A good skill makes repeated work steadier. A bad skill wraps an old workflow in authoritative language and keeps influencing future output.

## What should become a skill

A task is a good skill candidate when it:

- Repeats often.
- Has a clear trigger.
- Has relatively stable steps.
- Has describable inputs and outputs.
- Has explicit things not to do.
- Has a clear stop or escalation path when it fails.

Release notes, PR review, fixed-format research reports, migration checks, and log analysis are better skill candidates than “write code more intelligently.”

## A skill should be narrow

Do not turn a skill into an encyclopedia. It should focus on one repeatable action:

```markdown
---
name: release-notes
description: Use when preparing release notes from merged pull requests.
---

1. Read merged PR titles and labels.
2. Group user-facing changes first.
3. Mention breaking changes clearly.
4. Keep private review notes out of the changelog.
5. Return a draft; do not publish it.
```

The important part is the boundary: when to use it, what to read, what to produce, and what not to do.

## Skill, context, and memory

| Mechanism | Best content |
| --- | --- |
| Context files | Rules that should apply every time Hermes enters the project. |
| Memory | Stable personal preferences across sessions. |
| Skill | A workflow needed only for a class of tasks. |
| Project docs | Facts, contracts, and decisions humans need to review. |

If a rule applies every time, put it in context. If it applies only to one task type, use a skill. If it is a personal preference, use memory. If the team must review it, use project docs.

## Do not turn drafts into skills

Temporary research, unreviewed judgments, current task plans, and one-off workarounds should not become skills directly. They may expire tomorrow, but a skill will keep presenting them as workflow.

Before publishing a skill, check:

- Does it contain stale version numbers?
- Does it contain private paths, tokens, accounts, or internal links?
- Could it make the agent perform high-risk actions automatically?
- Did it turn a one-task constraint into a general rule?

## Maintenance matters more than creation

When Hermes becomes stubborn in a surprising way, skills are one of the first places to inspect. A stale skill can be worse than no skill because it looks official.

Practical maintenance habits:

- Name skills specifically.
- Keep each skill focused on one task class.
- Delete unused or stale skills.
- Put human confirmation points into high-risk skills.
- After editing a skill, test it with a small task.

## Related pages

- [Context Files](/en/hermes/context-files/)
- [Memory and Sessions](/en/hermes/memory-and-sessions/)
- [Automation and Collaboration](/en/hermes/automation/)
- [Security Model](/en/hermes/security-model/)

## References

- Skills: https://hermes-agent.nousresearch.com/docs/user-guide/features/skills
- Work with Skills: https://hermes-agent.nousresearch.com/docs/guides/work-with-skills
- Creating Skills: https://hermes-agent.nousresearch.com/docs/developer-guide/creating-skills
