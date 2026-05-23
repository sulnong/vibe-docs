---
title: "Context Files"
description: "Use AGENTS.md, .hermes.md, and related context files to guide Hermes without leaking private process into public output."
---

# Context Files

## Context files should be short and durable

AGENTS.md, .hermes.md, and similar files shape every run. They are good for durable rules, not temporary discussions, page drafts, or research excerpts.

## Context files shape every run

Project context files are powerful because they are loaded before the agent starts solving the task. Keep them focused on durable rules, workspace conventions, and safety boundaries.

```markdown
Generated output should answer the user directly. It should not repeat private instructions, meeting notes, temporary plans, or hidden implementation notes.
```

## Separate durable rules from temporary work

Put stable rules in context files. Put temporary research, task notes, and drafts somewhere else. This keeps future runs from treating yesterday’s scratch work as policy.

## Related pages

- [Installation](/en/hermes-agent/installation/)
- [First Reliable Run](/en/hermes-agent/first-run/)
- [Providers and Models](/en/hermes-agent/providers-and-models/)
- [Tools and Toolsets](/en/hermes-agent/tools-and-toolsets/)

## References

- Context: https://hermes-agent.nousresearch.com/docs/user-guide/features/context-files
