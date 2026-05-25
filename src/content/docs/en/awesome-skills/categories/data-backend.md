---
title: "Data and Backend Systems Skills"
description: "6 agent skills for data and backend systems, with practical selection guidance."
---

# Data and Backend Systems Skills

Skills for databases, query patterns, backend services, and data platform operations.

Use this category when you know the broad job but still need to decide which skill is worth invoking. Start from the task, then check the source, dependency, first run, and exit conditions.

## Skills in this category

| Skill | Best for | Source |
| --- | --- | --- |
| [Postgres Best Practices Skill](/en/awesome-skills/postgres-best-practices/) | Applies PostgreSQL best practices for Supabase-backed projects. | officialskills.sh |
| [MongoDB Schema Design Skill](/en/awesome-skills/mongodb-schema-design/) | Designs efficient MongoDB document schemas with validation and indexing patterns. | officialskills.sh |
| [MongoDB Query Optimizer Skill](/en/awesome-skills/mongodb-query-optimizer/) | Analyzes and optimizes MongoDB query performance. | officialskills.sh |
| [Redis Development Skill](/en/awesome-skills/redis-development/) | Guides Redis development across data structures, caching, vector search, and performance. | github.com |
| [ClickHouse Best Practices Skill](/en/awesome-skills/clickhouse-best-practices/) | Applies best practices for working with ClickHouse. | officialskills.sh |
| [Neon Postgres Skill](/en/awesome-skills/neon-postgres/) | Guides usage of Neon Serverless Postgres. | officialskills.sh |

## How to choose

- Choose safer data modeling or query patterns before implementation.
- Review backend configuration using provider-specific guidance.
- Debug performance or reliability issues with the right system vocabulary.

## Avoid this category when

- Production data or credentials would be exposed unnecessarily.
- The schema and workload are unknown.
- The task asks for a migration without a rollback or backup plan.

## Decision table

| Check | Guidance |
| --- | --- |
| Main dependency | Schema, connection context, runtime, and deployment target |
| Best first use | Ask for a small schema, query, or configuration review before broad changes. |
| Smallest safe scope | Start with a low-risk example, preview environment, small file, or read-only target so the result can be reviewed. |
| When to switch | If the task falls outside this category's real boundary, go back to the [Awesome Skills overview](/en/awesome-skills/) and choose a closer category. |

## Reading order

1. [Postgres Best Practices Skill](/en/awesome-skills/postgres-best-practices/) - Applies PostgreSQL best practices for Supabase-backed projects.
2. [MongoDB Schema Design Skill](/en/awesome-skills/mongodb-schema-design/) - Designs efficient MongoDB document schemas with validation and indexing patterns.
3. [MongoDB Query Optimizer Skill](/en/awesome-skills/mongodb-query-optimizer/) - Analyzes and optimizes MongoDB query performance.
4. [Redis Development Skill](/en/awesome-skills/redis-development/) - Guides Redis development across data structures, caching, vector search, and performance.
5. [ClickHouse Best Practices Skill](/en/awesome-skills/clickhouse-best-practices/) - Applies best practices for working with ClickHouse.
6. [Neon Postgres Skill](/en/awesome-skills/neon-postgres/) - Guides usage of Neon Serverless Postgres.

## Nearby categories

- [Browser, Testing, Quality](/en/awesome-skills/categories/browser-testing-quality/) - Skills for browser automation, local app checks, Core Web Vitals, accessibility, and web quality review.
- [Frontend and Design](/en/awesome-skills/categories/frontend-design/) - Skills for UI composition, framework patterns, design reviews, and frontend implementation decisions.
- [Deployment and Platform Ops](/en/awesome-skills/categories/deployment-platform/) - Skills for deploying, configuring, and operating cloud platforms and hosting providers.
- [Security and Review](/en/awesome-skills/categories/security-review/) - Skills for threat modeling, static analysis, code review, and security-focused investigation.

## Sources

- VoltAgent Awesome Agent Skills: https://github.com/VoltAgent/awesome-agent-skills
- officialskills.sh: https://officialskills.sh/
- Agent Skills standard: https://agentskills.io/
