---
title: "Insecure Defaults Skill"
description: "Insecure Defaults Skill: Finds insecure defaults such as hardcoded secrets, default credentials, and weak crypto."
---

# Insecure Defaults Skill

Finds insecure defaults such as hardcoded secrets, default credentials, and weak crypto.

This page helps you decide whether to install or invoke `trailofbits/insecure-defaults`, and how to keep the first use bounded.

## Quick facts

| Field | Value |
| --- | --- |
| Skill | `trailofbits/insecure-defaults` |
| Category | [Security and Review](/en/awesome-skills/categories/security-review/) |
| Directory listing | https://officialskills.sh/trailofbits/skills/insecure-defaults |
| Primary source | https://officialskills.sh/trailofbits/skills/insecure-defaults |
| Main dependency | Repository access, scope, language/tooling context, and review target |
| Best first use | Define the asset, trust boundary, or diff before asking the skill to inspect risk. |

## Setup and installation

Start from the listing page: https://officialskills.sh/trailofbits/skills/insecure-defaults

If the page provides an install command, copy the command from the listing instead of reconstructing it from the URL. If your agent client supports GitHub skill paths, use the primary source: https://officialskills.sh/trailofbits/skills/insecure-defaults

After installing, read the original `SKILL.md` or listing page before use. Confirm the trigger, dependencies, guardrails, and expected output instead of relying on the skill name alone.

## What this skill does

Finds insecure defaults such as hardcoded secrets, default credentials, and weak crypto.

In the Security and Review category, the value of this skill is not that the agent “knows more.” It gives the agent a narrower workflow, clearer checks, and safer boundaries for a specific class of work.

## Questions this page helps answer

- Whether `trailofbits/insecure-defaults` is better than a one-off prompt for this task.
- What context, account, file, URL, or runtime should be ready before the first invocation.
- Whether the output can be reviewed through screenshots, logs, diffs, source links, command records, or explicit reasoning.
- Which nearby skill to check if this one is not the right fit.

## When to use it

- Review a change where security assumptions matter more than style.
- Translate broad risk concerns into concrete files, flows, and controls.
- Use a specialized analysis workflow without making every coding task security-heavy.

## When not to use it

- The reviewer cannot access the relevant code or runtime configuration.
- The request asks for exploit instructions against a third-party system.
- The scope is too broad to produce actionable findings.

## Decision checklist

| Check | Guidance |
| --- | --- |
| Is the task narrow enough? | If the task can be described with one stable trigger, it is a better fit. If it is still broad, split it first. |
| Are the dependencies ready? | Repository access, scope, language/tooling context, and review target. If not, add context before asking the agent to infer missing details. |
| Smallest first run | Define the asset, trust boundary, or diff before asking the skill to inspect risk. |
| How to review the result | Ask for reviewable evidence: file paths, commands, screenshots, audit output, source links, or the reasoning behind key decisions. |
| When to stop | Switch back to human review when the task touches production resources, sensitive data, account permissions, or irreversible actions. |

## Compared with nearby skills

- If the task is closer to "Reviews code for language-specific security vulnerabilities and practical hardening opportunities.", check [Security Best Practices Skill](/en/awesome-skills/security-best-practices/) first; use this page when the focus remains "Finds insecure defaults such as hardcoded secrets, default credentials, and weak crypto.".
- If the task is closer to "Creates repository-specific threat models by identifying assets, trust boundaries, and attack paths.", check [Security Threat Model Skill](/en/awesome-skills/security-threat-model/) first; use this page when the focus remains "Finds insecure defaults such as hardcoded secrets, default credentials, and weak crypto.".
- If the task is closer to "Forces clarification when requirements are too ambiguous for safe security-sensitive work.", check [Ask Questions If Underspecified Skill](/en/awesome-skills/ask-questions-if-underspecified/) first; use this page when the focus remains "Finds insecure defaults such as hardcoded secrets, default credentials, and weak crypto.".
- If the task is closer to "Builds deep architectural context before security audit or investigation work.", check [Audit Context Building Skill](/en/awesome-skills/audit-context-building/) first; use this page when the focus remains "Finds insecure defaults such as hardcoded secrets, default credentials, and weak crypto.".

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

- [Security Best Practices Skill](/en/awesome-skills/security-best-practices/) - Reviews code for language-specific security vulnerabilities and practical hardening opportunities.
- [Security Threat Model Skill](/en/awesome-skills/security-threat-model/) - Creates repository-specific threat models by identifying assets, trust boundaries, and attack paths.
- [Ask Questions If Underspecified Skill](/en/awesome-skills/ask-questions-if-underspecified/) - Forces clarification when requirements are too ambiguous for safe security-sensitive work.
- [Audit Context Building Skill](/en/awesome-skills/audit-context-building/) - Builds deep architectural context before security audit or investigation work.

## References

- Directory listing: https://officialskills.sh/trailofbits/skills/insecure-defaults
- Primary source: https://officialskills.sh/trailofbits/skills/insecure-defaults
- VoltAgent Awesome Agent Skills: https://github.com/VoltAgent/awesome-agent-skills
