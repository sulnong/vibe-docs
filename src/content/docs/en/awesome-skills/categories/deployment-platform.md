---
title: "Deployment and Platform Ops Skills"
description: "7 agent skills for deployment and platform ops, with practical selection guidance."
---

# Deployment and Platform Ops Skills

Skills for deploying, configuring, and operating cloud platforms and hosting providers.

Use this category when you know the broad job but still need to decide which skill is worth invoking. Start from the task, then check the source, dependency, first run, and exit conditions.

## Skills in this category

| Skill | Best for | Source |
| --- | --- | --- |
| [Cloudflare Skill](/en/awesome-skills/cloudflare/) | Covers Cloudflare Workers, Pages, storage, AI, networking, security, and infrastructure configuration. | officialskills.sh |
| [Workers Best Practices Skill](/en/awesome-skills/workers-best-practices/) | Reviews and authors Workers code against production best practices and `wrangler.jsonc` conventions. | officialskills.sh |
| [Wrangler Skill](/en/awesome-skills/wrangler/) | Deploys and manages Workers, KV, R2, D1, Vectorize, Queues, and Workflows with Wrangler. | officialskills.sh |
| [Cloudflare Deploy Skill](/en/awesome-skills/cloudflare-deploy/) | Deploys apps to Cloudflare using Workers, Pages, and related platform services. | officialskills.sh |
| [Vercel Deploy Skill](/en/awesome-skills/vercel-deploy/) | Deploys applications and websites to Vercel preview or production environments. | officialskills.sh |
| [Netlify Deploy Skill](/en/awesome-skills/netlify-deploy/) | Automates Netlify deployments with CLI auth, linking, and environment support. | officialskills.sh |
| [Netlify Functions Skill](/en/awesome-skills/netlify-functions/) | Builds serverless API endpoints and background tasks on Netlify. | officialskills.sh |

## How to choose

- Prepare a deploy path without mixing provider-specific steps into general app code.
- Review configuration files before pushing changes to a hosting provider.
- Debug platform behavior with provider vocabulary and guardrails.

## Avoid this category when

- The task would modify production resources without a review point.
- Required credentials or project identifiers are missing.
- The app has not been built or run locally enough to know what should deploy.

## Decision table

| Check | Guidance |
| --- | --- |
| Main dependency | Provider account, CLI, project configuration, and environment variables |
| Best first use | Use it on a preview, staging service, or dry-run path before production. |
| Smallest safe scope | Start with a low-risk example, preview environment, small file, or read-only target so the result can be reviewed. |
| When to switch | If the task falls outside this category's real boundary, go back to the [Awesome Skills overview](/en/awesome-skills/) and choose a closer category. |

## Reading order

1. [Cloudflare Skill](/en/awesome-skills/cloudflare/) - Covers Cloudflare Workers, Pages, storage, AI, networking, security, and infrastructure configuration.
2. [Workers Best Practices Skill](/en/awesome-skills/workers-best-practices/) - Reviews and authors Workers code against production best practices and `wrangler.jsonc` conventions.
3. [Wrangler Skill](/en/awesome-skills/wrangler/) - Deploys and manages Workers, KV, R2, D1, Vectorize, Queues, and Workflows with Wrangler.
4. [Cloudflare Deploy Skill](/en/awesome-skills/cloudflare-deploy/) - Deploys apps to Cloudflare using Workers, Pages, and related platform services.
5. [Vercel Deploy Skill](/en/awesome-skills/vercel-deploy/) - Deploys applications and websites to Vercel preview or production environments.
6. [Netlify Deploy Skill](/en/awesome-skills/netlify-deploy/) - Automates Netlify deployments with CLI auth, linking, and environment support.
7. [Netlify Functions Skill](/en/awesome-skills/netlify-functions/) - Builds serverless API endpoints and background tasks on Netlify.

## Nearby categories

- [Browser, Testing, Quality](/en/awesome-skills/categories/browser-testing-quality/) - Skills for browser automation, local app checks, Core Web Vitals, accessibility, and web quality review.
- [Frontend and Design](/en/awesome-skills/categories/frontend-design/) - Skills for UI composition, framework patterns, design reviews, and frontend implementation decisions.
- [Security and Review](/en/awesome-skills/categories/security-review/) - Skills for threat modeling, static analysis, code review, and security-focused investigation.
- [Documents and Knowledge Work](/en/awesome-skills/categories/documents-knowledge/) - Skills for office files, PDFs, documentation research, and knowledge capture workflows.

## Sources

- VoltAgent Awesome Agent Skills: https://github.com/VoltAgent/awesome-agent-skills
- officialskills.sh: https://officialskills.sh/
- Agent Skills standard: https://agentskills.io/
