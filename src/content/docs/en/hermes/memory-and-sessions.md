---
title: "Memory and Sessions"
description: "Separate Hermes session state, long-term memory, project rules, and auditable files so stale assumptions do not follow every task."
---

# Memory and Sessions

Hermes memory and sessions make work more continuous, but they are not a fact database and not a replacement for project docs. The key question is where a piece of information belongs: this session, long-term preference, project rule, or reviewable file.

## Do not mix four kinds of state

| Information type | Better home |
| --- | --- |
| Current task context, attempts, failures, and intermediate results | Session. |
| Stable personal preferences, output habits, common environment details | Memory. |
| Project rules, folder conventions, safety boundaries | `AGENTS.md`, `.hermes.md`, or project docs. |
| Requirements, API contracts, release notes, review evidence | Versioned files, issues, commits, or logs. |

Putting everything into memory may feel clever at first. Later it becomes hard to explain why Hermes keeps behaving a certain way.

## Sessions are for continuity

Session state helps Hermes resume: which files were read, what was attempted, and where the task stands. It is good for short and medium-term continuity.

Important conclusions should not live only in the session. The reason for a code change, the source map for a doc page, and the result of a release check should land somewhere visible. That way another person, model, or session can continue.

## Memory is for stable preferences

Memory is useful for cross-session preferences such as:

- The user prefers Chinese discussion or English output.
- Tests should not be run unless explicitly requested.
- Common long-term tool or folder habits.
- Personal work preferences that should not be re-explained every time.

It is a poor place for:

- A temporary task plan.
- Unreviewed factual claims.
- Version details that may expire.
- Secrets, tokens, internal accounts, or sensitive data.

## Symptoms of bad memory

When Hermes repeatedly does something you did not ask for, find the source:

| Symptom | Likely source |
| --- | --- |
| Appears only in one conversation | Session state. |
| Appears in every new conversation | Memory or global context. |
| Appears only in one project | Project context file. |
| Appears only after a skill is used | Skill content. |

Do not write “do not do that again” into every prompt. Fix or remove the source.

## Keep memory reviewable

The more long-term memory you keep, the more cleanup matters:

- If it belongs in project files, do not put it in memory.
- If it affects safety or public output, do not put it in memory.
- If it can expire, include a source and date, or keep it out.
- Team rules belong in versioned files, not personal memory.

Memory should reduce repeated explanation. It should not replace engineering records.

## Related pages

- [Context Files](/en/hermes/context-files/)
- [Skills System](/en/hermes/skills/)
- [CLI and TUI Workflow](/en/hermes/cli-and-tui/)
- [Troubleshooting](/en/hermes/troubleshooting/)

## References

- Memory: https://hermes-agent.nousresearch.com/docs/user-guide/features/memory
- Sessions: https://hermes-agent.nousresearch.com/docs/user-guide/sessions
- Memory providers: https://hermes-agent.nousresearch.com/docs/user-guide/features/memory-providers
