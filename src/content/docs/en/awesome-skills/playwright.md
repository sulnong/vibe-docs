---
title: "Playwright Skill"
description: "Use OpenAI's Playwright skill when an agent needs CLI-first browser automation instead of a full Playwright test suite."
---

# Playwright Skill

The Playwright skill lets an agent drive a real browser from the terminal. It is useful for navigation, form filling, screenshots, page snapshots, data extraction, and debugging multi-step UI flows.

Use it when you want the agent to inspect and operate a browser as part of the current task. Do not treat it as a replacement for a maintained end-to-end test suite.

## Quick facts

| Field | Value |
| --- | --- |
| Skill | `openai/playwright` |
| Category | [Browser, Testing, Quality](/en/awesome-skills/categories/browser-testing-quality/) |
| Directory listing | https://officialskills.sh/openai/skills/playwright |
| Primary source | https://github.com/openai/skills/tree/main/skills/.curated/playwright |
| Main dependency | `npx`, used by the bundled wrapper script |
| Best first use | Open a page, take a snapshot, interact with stable element refs, snapshot again |

## Setup and installation

The officialskills.sh listing shows this install command:

```bash
npx skills add https://github.com/openai/skills --skill playwright
```

You can also use the source directory directly when your agent client accepts a GitHub skill path:

```text
https://github.com/openai/skills/tree/main/skills/.curated/playwright
```

The skill's own workflow assumes a user-scoped install under `$CODEX_HOME/skills`, then sets the wrapper path:

```bash
export CODEX_HOME="${CODEX_HOME:-$HOME/.codex}"
export PWCLI="$CODEX_HOME/skills/playwright/scripts/playwright_cli.sh"
```

Before suggesting browser commands, the skill checks that `npx` exists:

```bash
command -v npx >/dev/null 2>&1
```

That check matters because the wrapper runs `npx --package @playwright/cli playwright-cli`, so a global `playwright-cli` install is optional.

## What this skill does

The skill wraps `playwright-cli` in a repeatable agent workflow. It tells the agent to operate a browser through explicit terminal commands, take snapshots before using element refs, and keep browser artifacts organized.

The important distinction is that this is a browser-operation skill. It helps the agent click, type, inspect, extract, and capture evidence during a task. It does not start by creating a Playwright Test project.

## When to use it

- Click through a local or remote web app and inspect what changed.
- Fill forms, submit flows, and capture the resulting state.
- Take screenshots of a page after specific interactions.
- Extract text or structured data from JavaScript-rendered pages.
- Record traces or inspect console and network output while reproducing a UI issue.
- Work across tabs or isolated named sessions.

## When not to use it

- You need durable regression tests committed to the repository.
- The task only needs static HTML or source-code inspection.
- The website requires a human-owned login session that is not available to the agent.
- Browser interaction would violate a site's terms, rate limits, or access rules.
- The project already has a dedicated test harness and the task is to extend that harness.

For long-lived tests, use the project's existing testing setup or create Playwright Test files explicitly.

## First workflow to try

Start with a small loop. Open the page, snapshot it, interact with an element ref from that snapshot, then snapshot again.

```bash
"$PWCLI" open https://example.com
"$PWCLI" snapshot
"$PWCLI" click e3
"$PWCLI" snapshot
```

Element refs such as `e3` come from the latest snapshot. If the page navigates, opens a modal, changes tabs, or substantially updates the DOM, take a new snapshot before using more refs.

## Common workflows

### Fill a form

```bash
"$PWCLI" open https://example.com/form --headed
"$PWCLI" snapshot
"$PWCLI" fill e1 "user@example.com"
"$PWCLI" fill e2 "password123"
"$PWCLI" click e3
"$PWCLI" snapshot
```

Use `--headed` when a visual check will help. It is especially useful for layout problems, modal flows, and pages where loading state matters.

### Capture evidence

```bash
"$PWCLI" screenshot
"$PWCLI" pdf
```

For debugging work, screenshots are usually enough. Use traces when you need to preserve a sequence of interactions:

```bash
"$PWCLI" tracing-start
# reproduce the flow
"$PWCLI" tracing-stop
```

### Extract page data

```bash
"$PWCLI" eval "document.title"
"$PWCLI" eval "el => el.textContent" e12
```

Prefer snapshot and element refs before extraction. Direct evaluation is useful, but it should not become a shortcut around understanding the current page state.

### Work with sessions

Named sessions help separate unrelated browser work:

```bash
"$PWCLI" --session checkout open https://example.com/checkout
"$PWCLI" --session checkout snapshot
```

You can also set `PLAYWRIGHT_CLI_SESSION` once when a task stays in the same session.

## Guardrails

The most important guardrail is freshness. Use refs only from a current snapshot. If a click, navigation, menu, modal, or tab switch changes the page, snapshot again.

Other practical rules:

- Prefer explicit CLI commands over free-form browser code.
- Use `run-code` or direct evaluation only when the normal commands are not enough.
- Keep artifacts in the project's expected output folder when a repository defines one.
- Do not pivot into Playwright Test unless the user asks for test files.
- If `npx` is missing, install Node.js/npm or use a global `@playwright/cli` install before continuing.

## Similar skills

- [Webapp Testing Skill](/en/awesome-skills/webapp-testing/) - focuses on testing local web applications with Playwright.
- [Playwright Interactive Skill](/en/awesome-skills/playwright-interactive/) - is for persistent browser and Electron interaction through an interactive JavaScript REPL.
- [Web Quality Audit Skill](/en/awesome-skills/web-quality-audit/) - reviews performance, accessibility, SEO, and best practices rather than operating a page flow.
- [Core Web Vitals Skill](/en/awesome-skills/core-web-vitals/) - narrows the job to LCP, INP, and CLS diagnosis.

Pick `openai/playwright` when the job is immediate browser operation from a terminal. Pick a testing-focused or audit-focused skill when the output should be reusable test coverage or a quality report.

## References

- Directory listing: https://officialskills.sh/openai/skills/playwright
- Primary source: https://github.com/openai/skills/tree/main/skills/.curated/playwright
- Playwright `SKILL.md`: https://raw.githubusercontent.com/openai/skills/main/skills/.curated/playwright/SKILL.md
- CLI reference: https://raw.githubusercontent.com/openai/skills/main/skills/.curated/playwright/references/cli.md
- Workflows reference: https://raw.githubusercontent.com/openai/skills/main/skills/.curated/playwright/references/workflows.md
- VoltAgent Awesome Agent Skills: https://github.com/VoltAgent/awesome-agent-skills
