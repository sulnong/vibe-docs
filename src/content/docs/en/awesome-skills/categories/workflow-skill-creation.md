---
title: "Workflow and Skill Creation Skills"
description: "5 agent skills for workflow and skill creation, with practical selection guidance."
---

# Workflow and Skill Creation Skills

Skills for repeatable agent workflows, GitHub work, notebooks, and creating new skills.

Use this category when you know the broad job but still need to decide which skill is worth invoking. Start from the task, then check the source, dependency, first run, and exit conditions.

## Skills in this category

| Skill | Best for | Source |
| --- | --- | --- |
| [Skill Creator Skill](/en/awesome-skills/skill-creator/) | Guides the creation of skills that extend an agent with specialized workflows. | officialskills.sh |
| [Template Skill](/en/awesome-skills/template/) | Provides a basic template for creating new skills. | officialskills.sh |
| [GitHub Address Comments Skill](/en/awesome-skills/gh-address-comments/) | Addresses review and issue comments on open GitHub pull requests via CLI. | officialskills.sh |
| [GitHub Fix CI Skill](/en/awesome-skills/gh-fix-ci/) | Debugs and fixes failing GitHub Actions checks through log inspection. | officialskills.sh |
| [Jupyter Notebook Skill](/en/awesome-skills/jupyter-notebook/) | Creates clean, reproducible Jupyter notebooks for experiments and tutorials. | officialskills.sh |

## How to choose

- Turn recurring agent work into a reusable procedure.
- Handle GitHub or notebook tasks without mixing them into general coding prompts.
- Create or review skills with clear triggers, inputs, outputs, and guardrails.

## Avoid this category when

- The workflow is one-off and not worth turning into a skill.
- The task would auto-publish, merge, or push without human review.
- The requested skill is too broad to maintain safely.

## Decision table

| Check | Guidance |
| --- | --- |
| Main dependency | Repository, issue or PR context, notebook runtime, or skill authoring target |
| Best first use | Run it on one bounded workflow and keep the output reviewable. |
| Smallest safe scope | Start with a low-risk example, preview environment, small file, or read-only target so the result can be reviewed. |
| When to switch | If the task falls outside this category's real boundary, go back to the [Awesome Skills overview](/en/awesome-skills/) and choose a closer category. |

## Reading order

1. [Skill Creator Skill](/en/awesome-skills/skill-creator/) - Guides the creation of skills that extend an agent with specialized workflows.
2. [Template Skill](/en/awesome-skills/template/) - Provides a basic template for creating new skills.
3. [GitHub Address Comments Skill](/en/awesome-skills/gh-address-comments/) - Addresses review and issue comments on open GitHub pull requests via CLI.
4. [GitHub Fix CI Skill](/en/awesome-skills/gh-fix-ci/) - Debugs and fixes failing GitHub Actions checks through log inspection.
5. [Jupyter Notebook Skill](/en/awesome-skills/jupyter-notebook/) - Creates clean, reproducible Jupyter notebooks for experiments and tutorials.

## Nearby categories

- [Browser, Testing, Quality](/en/awesome-skills/categories/browser-testing-quality/) - Skills for browser automation, local app checks, Core Web Vitals, accessibility, and web quality review.
- [Frontend and Design](/en/awesome-skills/categories/frontend-design/) - Skills for UI composition, framework patterns, design reviews, and frontend implementation decisions.
- [Deployment and Platform Ops](/en/awesome-skills/categories/deployment-platform/) - Skills for deploying, configuring, and operating cloud platforms and hosting providers.
- [Security and Review](/en/awesome-skills/categories/security-review/) - Skills for threat modeling, static analysis, code review, and security-focused investigation.

## Sources

- VoltAgent Awesome Agent Skills: https://github.com/VoltAgent/awesome-agent-skills
- officialskills.sh: https://officialskills.sh/
- Agent Skills standard: https://agentskills.io/
