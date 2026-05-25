---
title: "Cloudflare Skill"
description: "Cloudflare Skill: Covers Cloudflare Workers, Pages, storage, AI, networking, security, and infrastructure configuration."
---

# Cloudflare Skill

Covers Cloudflare Workers, Pages, storage, AI, networking, security, and infrastructure configuration.

This page helps you decide whether to install or invoke `cloudflare/cloudflare`, and how to keep the first use bounded.

## Quick facts

| Field | Value |
| --- | --- |
| Skill | `cloudflare/cloudflare` |
| Category | [Deployment and Platform Ops](/en/awesome-skills/categories/deployment-platform/) |
| Directory listing | https://officialskills.sh/cloudflare/skills/cloudflare |
| Primary source | https://officialskills.sh/cloudflare/skills/cloudflare |
| Main dependency | Provider account, CLI, project configuration, and environment variables |
| Best first use | Use it on a preview, staging service, or dry-run path before production. |

## Setup and installation

Start from the listing page: https://officialskills.sh/cloudflare/skills/cloudflare

If the page provides an install command, copy the command from the listing instead of reconstructing it from the URL. If your agent client supports GitHub skill paths, use the primary source: https://officialskills.sh/cloudflare/skills/cloudflare

After installing, read the original `SKILL.md` or listing page before use. Confirm the trigger, dependencies, guardrails, and expected output instead of relying on the skill name alone.

## What this skill does

Covers Cloudflare Workers, Pages, storage, AI, networking, security, and infrastructure configuration.

In the Deployment and Platform Ops category, the value of this skill is not that the agent “knows more.” It gives the agent a narrower workflow, clearer checks, and safer boundaries for a specific class of work.

## Questions this page helps answer

- Whether `cloudflare/cloudflare` is better than a one-off prompt for this task.
- What context, account, file, URL, or runtime should be ready before the first invocation.
- Whether the output can be reviewed through screenshots, logs, diffs, source links, command records, or explicit reasoning.
- Which nearby skill to check if this one is not the right fit.

## When to use it

- Prepare a deploy path without mixing provider-specific steps into general app code.
- Review configuration files before pushing changes to a hosting provider.
- Debug platform behavior with provider vocabulary and guardrails.

## When not to use it

- The task would modify production resources without a review point.
- Required credentials or project identifiers are missing.
- The app has not been built or run locally enough to know what should deploy.

## Decision checklist

| Check | Guidance |
| --- | --- |
| Is the task narrow enough? | If the task can be described with one stable trigger, it is a better fit. If it is still broad, split it first. |
| Are the dependencies ready? | Provider account, CLI, project configuration, and environment variables. If not, add context before asking the agent to infer missing details. |
| Smallest first run | Use it on a preview, staging service, or dry-run path before production. |
| How to review the result | Ask for reviewable evidence: file paths, commands, screenshots, audit output, source links, or the reasoning behind key decisions. |
| When to stop | Switch back to human review when the task touches production resources, sensitive data, account permissions, or irreversible actions. |

## Compared with nearby skills

- If the task is closer to "Reviews and authors Workers code against production best practices and `wrangler.jsonc` conventions.", check [Workers Best Practices Skill](/en/awesome-skills/workers-best-practices/) first; use this page when the focus remains "Covers Cloudflare Workers, Pages, storage, AI, networking, security, and infrastructure configuration.".
- If the task is closer to "Deploys and manages Workers, KV, R2, D1, Vectorize, Queues, and Workflows with Wrangler.", check [Wrangler Skill](/en/awesome-skills/wrangler/) first; use this page when the focus remains "Covers Cloudflare Workers, Pages, storage, AI, networking, security, and infrastructure configuration.".
- If the task is closer to "Deploys apps to Cloudflare using Workers, Pages, and related platform services.", check [Cloudflare Deploy Skill](/en/awesome-skills/cloudflare-deploy/) first; use this page when the focus remains "Covers Cloudflare Workers, Pages, storage, AI, networking, security, and infrastructure configuration.".
- If the task is closer to "Deploys applications and websites to Vercel preview or production environments.", check [Vercel Deploy Skill](/en/awesome-skills/vercel-deploy/) first; use this page when the focus remains "Covers Cloudflare Workers, Pages, storage, AI, networking, security, and infrastructure configuration.".

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

- [Workers Best Practices Skill](/en/awesome-skills/workers-best-practices/) - Reviews and authors Workers code against production best practices and `wrangler.jsonc` conventions.
- [Wrangler Skill](/en/awesome-skills/wrangler/) - Deploys and manages Workers, KV, R2, D1, Vectorize, Queues, and Workflows with Wrangler.
- [Cloudflare Deploy Skill](/en/awesome-skills/cloudflare-deploy/) - Deploys apps to Cloudflare using Workers, Pages, and related platform services.
- [Vercel Deploy Skill](/en/awesome-skills/vercel-deploy/) - Deploys applications and websites to Vercel preview or production environments.

## References

- Directory listing: https://officialskills.sh/cloudflare/skills/cloudflare
- Primary source: https://officialskills.sh/cloudflare/skills/cloudflare
- VoltAgent Awesome Agent Skills: https://github.com/VoltAgent/awesome-agent-skills
