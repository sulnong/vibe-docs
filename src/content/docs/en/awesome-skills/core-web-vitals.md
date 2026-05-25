---
title: "Core Web Vitals Skill"
description: "Core Web Vitals Skill: Diagnoses and improves LCP, INP, and CLS issues."
---

# Core Web Vitals Skill

Diagnoses and improves LCP, INP, and CLS issues.

This page helps you decide whether to install or invoke `addyosmani/core-web-vitals`, and how to keep the first use bounded.

## Quick facts

| Field | Value |
| --- | --- |
| Skill | `addyosmani/core-web-vitals` |
| Category | [Browser, Testing, Quality](/en/awesome-skills/categories/browser-testing-quality/) |
| Directory listing | https://officialskills.sh/addyosmani/skills/core-web-vitals |
| Primary source | https://officialskills.sh/addyosmani/skills/core-web-vitals |
| Main dependency | Browser, CLI, or target URL depending on the skill |
| Best first use | Run it on a low-risk page or local preview and capture one concrete finding. |

## Setup and installation

Start from the listing page: https://officialskills.sh/addyosmani/skills/core-web-vitals

If the page provides an install command, copy the command from the listing instead of reconstructing it from the URL. If your agent client supports GitHub skill paths, use the primary source: https://officialskills.sh/addyosmani/skills/core-web-vitals

After installing, read the original `SKILL.md` or listing page before use. Confirm the trigger, dependencies, guardrails, and expected output instead of relying on the skill name alone.

## What this skill does

Diagnoses and improves LCP, INP, and CLS issues.

In the Browser, Testing, Quality category, the value of this skill is not that the agent “knows more.” It gives the agent a narrower workflow, clearer checks, and safer boundaries for a specific class of work.

## Questions this page helps answer

- Whether `addyosmani/core-web-vitals` is better than a one-off prompt for this task.
- What context, account, file, URL, or runtime should be ready before the first invocation.
- Whether the output can be reviewed through screenshots, logs, diffs, source links, command records, or explicit reasoning.
- Which nearby skill to check if this one is not the right fit.

## When to use it

- Inspect a real web page instead of guessing from source code alone.
- Capture evidence such as screenshots, traces, audits, or structured findings.
- Separate one-off browser operation from durable regression testing.

## When not to use it

- The task only needs static documentation or source reading.
- The site requires credentials or sessions the agent cannot access.
- The expected output is a maintained test suite and the project already has a test framework.

## Decision checklist

| Check | Guidance |
| --- | --- |
| Is the task narrow enough? | If the task can be described with one stable trigger, it is a better fit. If it is still broad, split it first. |
| Are the dependencies ready? | Browser, CLI, or target URL depending on the skill. If not, add context before asking the agent to infer missing details. |
| Smallest first run | Run it on a low-risk page or local preview and capture one concrete finding. |
| How to review the result | Ask for reviewable evidence: file paths, commands, screenshots, audit output, source links, or the reasoning behind key decisions. |
| When to stop | Switch back to human review when the task touches production resources, sensitive data, account permissions, or irreversible actions. |

## Compared with nearby skills

- If the task is closer to "Automates a real browser from the terminal with `playwright-cli` for navigation, forms, snapshots, screenshots, extraction, and UI-flow debugging.", check [Playwright Skill](/en/awesome-skills/playwright/) first; use this page when the focus remains "Diagnoses and improves LCP, INP, and CLS issues.".
- If the task is closer to "Tests local web applications using Playwright-oriented workflows.", check [Webapp Testing Skill](/en/awesome-skills/webapp-testing/) first; use this page when the focus remains "Diagnoses and improves LCP, INP, and CLS issues.".
- If the task is closer to "Provides persistent browser and Electron interaction through an interactive JavaScript REPL.", check [Playwright Interactive Skill](/en/awesome-skills/playwright-interactive/) first; use this page when the focus remains "Diagnoses and improves LCP, INP, and CLS issues.".
- If the task is closer to "Runs broad web quality reviews across performance, accessibility, SEO, and best practices.", check [Web Quality Audit Skill](/en/awesome-skills/web-quality-audit/) first; use this page when the focus remains "Diagnoses and improves LCP, INP, and CLS issues.".

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

- [Playwright Skill](/en/awesome-skills/playwright/) - Automates a real browser from the terminal with `playwright-cli` for navigation, forms, snapshots, screenshots, extraction, and UI-flow debugging.
- [Webapp Testing Skill](/en/awesome-skills/webapp-testing/) - Tests local web applications using Playwright-oriented workflows.
- [Playwright Interactive Skill](/en/awesome-skills/playwright-interactive/) - Provides persistent browser and Electron interaction through an interactive JavaScript REPL.
- [Web Quality Audit Skill](/en/awesome-skills/web-quality-audit/) - Runs broad web quality reviews across performance, accessibility, SEO, and best practices.

## References

- Directory listing: https://officialskills.sh/addyosmani/skills/core-web-vitals
- Primary source: https://officialskills.sh/addyosmani/skills/core-web-vitals
- VoltAgent Awesome Agent Skills: https://github.com/VoltAgent/awesome-agent-skills
