---
title: "Template Skill"
description: "Template Skill: Provides a basic template for creating new skills."
---

# Template Skill

Provides a basic template for creating new skills.

This page helps you decide whether to install or invoke `anthropics/template`, and how to keep the first use bounded.

## Quick facts

| Field | Value |
| --- | --- |
| Skill | `anthropics/template` |
| Category | [Workflow and Skill Creation](/en/awesome-skills/categories/workflow-skill-creation/) |
| Directory listing | https://officialskills.sh/anthropics/skills/template |
| Primary source | https://officialskills.sh/anthropics/skills/template |
| Main dependency | Repository, issue or PR context, notebook runtime, or skill authoring target |
| Best first use | Run it on one bounded workflow and keep the output reviewable. |

## Setup and installation

Start from the listing page: https://officialskills.sh/anthropics/skills/template

If the page provides an install command, copy the command from the listing instead of reconstructing it from the URL. If your agent client supports GitHub skill paths, use the primary source: https://officialskills.sh/anthropics/skills/template

After installing, read the original `SKILL.md` or listing page before use. Confirm the trigger, dependencies, guardrails, and expected output instead of relying on the skill name alone.

## What this skill does

Provides a basic template for creating new skills.

In the Workflow and Skill Creation category, the value of this skill is not that the agent “knows more.” It gives the agent a narrower workflow, clearer checks, and safer boundaries for a specific class of work.

## Questions this page helps answer

- Whether `anthropics/template` is better than a one-off prompt for this task.
- What context, account, file, URL, or runtime should be ready before the first invocation.
- Whether the output can be reviewed through screenshots, logs, diffs, source links, command records, or explicit reasoning.
- Which nearby skill to check if this one is not the right fit.

## When to use it

- Turn recurring agent work into a reusable procedure.
- Handle GitHub or notebook tasks without mixing them into general coding prompts.
- Create or review skills with clear triggers, inputs, outputs, and guardrails.

## When not to use it

- The workflow is one-off and not worth turning into a skill.
- The task would auto-publish, merge, or push without human review.
- The requested skill is too broad to maintain safely.

## Decision checklist

| Check | Guidance |
| --- | --- |
| Is the task narrow enough? | If the task can be described with one stable trigger, it is a better fit. If it is still broad, split it first. |
| Are the dependencies ready? | Repository, issue or PR context, notebook runtime, or skill authoring target. If not, add context before asking the agent to infer missing details. |
| Smallest first run | Run it on one bounded workflow and keep the output reviewable. |
| How to review the result | Ask for reviewable evidence: file paths, commands, screenshots, audit output, source links, or the reasoning behind key decisions. |
| When to stop | Switch back to human review when the task touches production resources, sensitive data, account permissions, or irreversible actions. |

## Compared with nearby skills

- If the task is closer to "Guides the creation of skills that extend an agent with specialized workflows.", check [Skill Creator Skill](/en/awesome-skills/skill-creator/) first; use this page when the focus remains "Provides a basic template for creating new skills.".
- If the task is closer to "Addresses review and issue comments on open GitHub pull requests via CLI.", check [GitHub Address Comments Skill](/en/awesome-skills/gh-address-comments/) first; use this page when the focus remains "Provides a basic template for creating new skills.".
- If the task is closer to "Debugs and fixes failing GitHub Actions checks through log inspection.", check [GitHub Fix CI Skill](/en/awesome-skills/gh-fix-ci/) first; use this page when the focus remains "Provides a basic template for creating new skills.".
- If the task is closer to "Creates clean, reproducible Jupyter notebooks for experiments and tutorials.", check [Jupyter Notebook Skill](/en/awesome-skills/jupyter-notebook/) first; use this page when the focus remains "Provides a basic template for creating new skills.".

## First workflow to try

1. Open the listing or source directory and confirm this is the skill you meant to use.
2. Read the trigger and guardrails.
3. Run it on a low-risk example, preview environment, or small file.
4. Check whether the output is traceable to sources, commands, or file changes.
5. Only then use it on a larger task.

## Guardrails

- Do not turn temporary task constraints into permanent skill behavior.
- Do not let the skill handle accounts, production resources, payments, publishing, or merging unless the workflow has a review point.
- If the skill depends on an external service, confirm credentials, quotas, privacy, and output location first.
- If the result will affect public docs or production code, verify facts against the original source.

## Similar skills

- [Skill Creator Skill](/en/awesome-skills/skill-creator/) - Guides the creation of skills that extend an agent with specialized workflows.
- [GitHub Address Comments Skill](/en/awesome-skills/gh-address-comments/) - Addresses review and issue comments on open GitHub pull requests via CLI.
- [GitHub Fix CI Skill](/en/awesome-skills/gh-fix-ci/) - Debugs and fixes failing GitHub Actions checks through log inspection.
- [Jupyter Notebook Skill](/en/awesome-skills/jupyter-notebook/) - Creates clean, reproducible Jupyter notebooks for experiments and tutorials.

## References

- Directory listing: https://officialskills.sh/anthropics/skills/template
- Primary source: https://officialskills.sh/anthropics/skills/template
- VoltAgent Awesome Agent Skills: https://github.com/VoltAgent/awesome-agent-skills
