---
title: "OpenClaw Migration"
description: "Move OpenClaw-style workflows toward Hermes Agent by preserving working prompts, tools, files, and review habits first."
---

# OpenClaw Migration

## Preserve what works first

Migration is not recreating every feature. First preserve the prompts, tools, inputs, outputs, and review habits that already work. Replace one layer at a time and keep a rollback path.

| Asset | Migration question |
| --- | --- |
| Prompt | Which outputs are reliable? |
| Tool | Which are truly required? |
| File | Where do inputs and outputs live? |
| Review | How do people accept the result? |

## Preserve the working parts first

A migration should keep useful prompts, tool contracts, input files, output formats, and review habits intact before changing execution layers.

| Old asset | Migration question |
| --- | --- |
| Prompt | Which parts produce reliable output? |
| Tool | Which calls are truly required? |
| File | Where do inputs and outputs live? |
| Review habit | How do people accept the result? |
| Automation | What disables it quickly? |

## Replace one layer at a time

First reproduce an interactive local run. Then add context, tools, memory, or automation. Keep the old path available until the new path has succeeded repeatedly.

## Related pages

- [Installation](/en/hermes-agent/installation/)
- [First Reliable Run](/en/hermes-agent/first-run/)
- [Providers and Models](/en/hermes-agent/providers-and-models/)
- [Tools and Toolsets](/en/hermes-agent/tools-and-toolsets/)

## References

- Quickstart: https://hermes-agent.nousresearch.com/docs/getting-started/quickstart
- Tools: https://hermes-agent.nousresearch.com/docs/user-guide/features/tools
- Skills: https://hermes-agent.nousresearch.com/docs/user-guide/features/skills
