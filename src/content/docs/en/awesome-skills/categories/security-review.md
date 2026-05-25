---
title: "Security and Review Skills"
description: "7 agent skills for security and review, with practical selection guidance."
---

# Security and Review Skills

Skills for threat modeling, static analysis, code review, and security-focused investigation.

Use this category when you know the broad job but still need to decide which skill is worth invoking. Start from the task, then check the source, dependency, first run, and exit conditions.

## Skills in this category

| Skill | Best for | Source |
| --- | --- | --- |
| [Security Best Practices Skill](/en/awesome-skills/security-best-practices/) | Reviews code for language-specific security vulnerabilities and practical hardening opportunities. | officialskills.sh |
| [Security Threat Model Skill](/en/awesome-skills/security-threat-model/) | Creates repository-specific threat models by identifying assets, trust boundaries, and attack paths. | officialskills.sh |
| [Ask Questions If Underspecified Skill](/en/awesome-skills/ask-questions-if-underspecified/) | Forces clarification when requirements are too ambiguous for safe security-sensitive work. | officialskills.sh |
| [Audit Context Building Skill](/en/awesome-skills/audit-context-building/) | Builds deep architectural context before security audit or investigation work. | officialskills.sh |
| [Static Analysis Skill](/en/awesome-skills/static-analysis/) | Uses static analysis tools such as CodeQL, Semgrep, and SARIF workflows. | officialskills.sh |
| [Semgrep Rule Creator Skill](/en/awesome-skills/semgrep-rule-creator/) | Creates and refines Semgrep rules for vulnerability detection. | officialskills.sh |
| [Insecure Defaults Skill](/en/awesome-skills/insecure-defaults/) | Finds insecure defaults such as hardcoded secrets, default credentials, and weak crypto. | officialskills.sh |

## How to choose

- Review a change where security assumptions matter more than style.
- Translate broad risk concerns into concrete files, flows, and controls.
- Use a specialized analysis workflow without making every coding task security-heavy.

## Avoid this category when

- The reviewer cannot access the relevant code or runtime configuration.
- The request asks for exploit instructions against a third-party system.
- The scope is too broad to produce actionable findings.

## Decision table

| Check | Guidance |
| --- | --- |
| Main dependency | Repository access, scope, language/tooling context, and review target |
| Best first use | Define the asset, trust boundary, or diff before asking the skill to inspect risk. |
| Smallest safe scope | Start with a low-risk example, preview environment, small file, or read-only target so the result can be reviewed. |
| When to switch | If the task falls outside this category's real boundary, go back to the [Awesome Skills overview](/en/awesome-skills/) and choose a closer category. |

## Reading order

1. [Security Best Practices Skill](/en/awesome-skills/security-best-practices/) - Reviews code for language-specific security vulnerabilities and practical hardening opportunities.
2. [Security Threat Model Skill](/en/awesome-skills/security-threat-model/) - Creates repository-specific threat models by identifying assets, trust boundaries, and attack paths.
3. [Ask Questions If Underspecified Skill](/en/awesome-skills/ask-questions-if-underspecified/) - Forces clarification when requirements are too ambiguous for safe security-sensitive work.
4. [Audit Context Building Skill](/en/awesome-skills/audit-context-building/) - Builds deep architectural context before security audit or investigation work.
5. [Static Analysis Skill](/en/awesome-skills/static-analysis/) - Uses static analysis tools such as CodeQL, Semgrep, and SARIF workflows.
6. [Semgrep Rule Creator Skill](/en/awesome-skills/semgrep-rule-creator/) - Creates and refines Semgrep rules for vulnerability detection.
7. [Insecure Defaults Skill](/en/awesome-skills/insecure-defaults/) - Finds insecure defaults such as hardcoded secrets, default credentials, and weak crypto.

## Nearby categories

- [Browser, Testing, Quality](/en/awesome-skills/categories/browser-testing-quality/) - Skills for browser automation, local app checks, Core Web Vitals, accessibility, and web quality review.
- [Frontend and Design](/en/awesome-skills/categories/frontend-design/) - Skills for UI composition, framework patterns, design reviews, and frontend implementation decisions.
- [Deployment and Platform Ops](/en/awesome-skills/categories/deployment-platform/) - Skills for deploying, configuring, and operating cloud platforms and hosting providers.
- [Documents and Knowledge Work](/en/awesome-skills/categories/documents-knowledge/) - Skills for office files, PDFs, documentation research, and knowledge capture workflows.

## Sources

- VoltAgent Awesome Agent Skills: https://github.com/VoltAgent/awesome-agent-skills
- officialskills.sh: https://officialskills.sh/
- Agent Skills standard: https://agentskills.io/
