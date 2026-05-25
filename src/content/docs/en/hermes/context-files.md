---
title: "Context Files"
description: "Use AGENTS.md, .hermes.md, CLAUDE.md, and SOUL.md to give Hermes stable context without turning temporary discussion into permanent rules."
---

# Context Files

Context files are the long-lived instructions Hermes can read when it enters a project. They are useful and sharp. Written well, they make the agent behave like a teammate who knows the project. Written poorly, yesterday's temporary thought becomes today's hidden policy.

## What belongs there

Good context file content is stable, reusable, and relevant to most runs.

| Content | Fit |
| --- | --- |
| Project folder conventions | Good fit. |
| Coding style and test habits | Good fit. |
| Safety boundaries, such as directories to avoid | Good fit. |
| A temporary plan for the current task | Poor fit; use an issue or task doc. |
| Raw research excerpts | Poor fit; keep internal research notes elsewhere. |
| Unreviewed drafts | Poor fit; they can pollute later output. |

A good file is short, concrete, and maintainable. It is not a dump of chat history.

## AGENTS.md and .hermes.md

If the project already has `AGENTS.md`, use it for cross-agent project rules. Use `.hermes.md` for Hermes-specific behavior, such as preferred tools, session habits, or Hermes-only limits.

```markdown
# Project rules

- Public docs live only in src/content/docs/.
- Research notes and topic decisions live in content-plans/.
- Unless explicitly requested, do not run test or build commands.
- When editing public pages, do not include internal planning fields.
```

Rules should tell the agent how to act. Avoid vague lines like “be professional” or “think carefully” when there is no way to check them.

## SOUL.md is not a project spec

Hermes can use SOUL.md or personality settings to shape voice. That is appropriate for personal preferences and interaction style. It is not the right place for project safety rules, deployment steps, or coding standards.

Keep style and rules separate. Style may vary by user. Project rules should be reviewable, versioned, and shareable by the team.

## Prefer references over pasted context

When a task needs a file, diff, URL, or folder, use an explicit reference rather than pasting a large block into the prompt. Hermes can locate the source more reliably, and temporary material is less likely to become permanent context.

This matters a lot for technical documentation projects. Public pages should answer reader questions directly; internal research, search intent, review questions, and competitor notes should stay in internal folders.

## Maintain the files

Check context files when:

- Hermes keeps bringing back the same old assumption.
- Public output contains private process language.
- It repeatedly runs commands you no longer want.
- It ignores new folder conventions or release habits.

Do not fight bad context with longer prompts. Fix or remove the source.

## Related pages

- [CLI and TUI Workflow](/en/hermes/cli-and-tui/)
- [Memory and Sessions](/en/hermes/memory-and-sessions/)
- [Skills System](/en/hermes/skills/)
- [Security Model](/en/hermes/security-model/)

## References

- Context Files: https://hermes-agent.nousresearch.com/docs/user-guide/features/context-files
- Context References: https://hermes-agent.nousresearch.com/docs/user-guide/features/context-references
- Personality and SOUL.md: https://hermes-agent.nousresearch.com/docs/user-guide/features/personality
