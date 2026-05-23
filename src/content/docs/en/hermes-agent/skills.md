---
title: "Skills System"
description: "Use Hermes skills for reusable workflows and domain knowledge without turning every note into global agent behavior."
---

# Skills System

## What belongs in a skill

- A stable, repeated procedure.
- A clear trigger.
- A small set of required commands and examples.
- Explicit things the skill should not do automatically.

## Do not preserve temporary thinking

A skill should improve repeated work, not preserve every thought from one discussion. A stale skill can be worse than no skill because it still sounds authoritative.

## Skills should be narrow

A useful skill has a clear trigger and a repeatable procedure. It should not become a warehouse for every temporary note from a session.

```markdown
---
name: release-notes
description: Use when preparing release notes from merged pull requests.
---

1. Read merged PR titles and labels.
2. Group user-facing changes first.
3. Mention breaking changes clearly.
4. Keep private review notes out of the changelog.
```

## Maintenance matters

Review skills when behavior feels oddly persistent. A stale skill can keep reintroducing old assumptions even when the current prompt is clear.

## Related pages

- [Installation](/en/hermes-agent/installation/)
- [First Reliable Run](/en/hermes-agent/first-run/)
- [Providers and Models](/en/hermes-agent/providers-and-models/)
- [Tools and Toolsets](/en/hermes-agent/tools-and-toolsets/)

## References

- Skills: https://hermes-agent.nousresearch.com/docs/user-guide/features/skills
