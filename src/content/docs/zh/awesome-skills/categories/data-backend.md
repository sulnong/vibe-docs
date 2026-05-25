---
title: "数据与后端系统 Skills"
description: "数据与后端系统分类下的 6 个 agent skills，用于判断、安装和比较。"
---

# 数据与后端系统 Skills

用于数据库、查询模式、后端服务和数据平台运维的 skills。

这一类页面适合在你已经知道大方向、但还不确定该选哪个 skill 时阅读。先从真实任务出发，再看 skill 的来源、依赖、第一次运行方式和退出条件。

## 本分类包含的 skills

| Skill | 适合处理 | 来源 |
| --- | --- | --- |
| [Postgres Best Practices Skill](/zh/awesome-skills/postgres-best-practices/) | 为基于 Supabase 的项目应用 PostgreSQL 最佳实践。 | officialskills.sh |
| [MongoDB Schema Design Skill](/zh/awesome-skills/mongodb-schema-design/) | 用验证和索引模式设计高效 MongoDB 文档 schema。 | officialskills.sh |
| [MongoDB Query Optimizer Skill](/zh/awesome-skills/mongodb-query-optimizer/) | 分析并优化 MongoDB 查询性能。 | officialskills.sh |
| [Redis Development Skill](/zh/awesome-skills/redis-development/) | 围绕数据结构、缓存、向量搜索和性能指导 Redis 开发。 | github.com |
| [ClickHouse Best Practices Skill](/zh/awesome-skills/clickhouse-best-practices/) | 应用 ClickHouse 使用最佳实践。 | officialskills.sh |
| [Neon Postgres Skill](/zh/awesome-skills/neon-postgres/) | 指导 Neon Serverless Postgres 的使用。 | officialskills.sh |

## 如何选择

- 实现前选择更稳妥的数据建模或查询模式。
- 按具体服务商建议审查后端配置。
- 用正确系统术语排查性能或可靠性问题。

## 先不要用的情况

- 会不必要地暴露生产数据或凭据。
- schema 和 workload 都不清楚。
- 请求迁移但没有回滚或备份方案。

## 决策表

| 判断点 | 建议 |
| --- | --- |
| 主要依赖 | Schema、连接上下文、运行时和部署目标 |
| 第一次尝试 | 先让它审查一个小 schema、查询或配置，再做大范围变更。 |
| 最小安全范围 | 先选一个低风险样例、预览环境、小文件或只读目标，确认输出能被人工复核。 |
| 何时换方案 | 如果任务超出这个分类的真实边界，先回到 [Awesome Skills 概览](/zh/awesome-skills/) 选择更接近的分类。 |

## 阅读顺序

1. [Postgres Best Practices Skill](/zh/awesome-skills/postgres-best-practices/)：为基于 Supabase 的项目应用 PostgreSQL 最佳实践。
2. [MongoDB Schema Design Skill](/zh/awesome-skills/mongodb-schema-design/)：用验证和索引模式设计高效 MongoDB 文档 schema。
3. [MongoDB Query Optimizer Skill](/zh/awesome-skills/mongodb-query-optimizer/)：分析并优化 MongoDB 查询性能。
4. [Redis Development Skill](/zh/awesome-skills/redis-development/)：围绕数据结构、缓存、向量搜索和性能指导 Redis 开发。
5. [ClickHouse Best Practices Skill](/zh/awesome-skills/clickhouse-best-practices/)：应用 ClickHouse 使用最佳实践。
6. [Neon Postgres Skill](/zh/awesome-skills/neon-postgres/)：指导 Neon Serverless Postgres 的使用。

## 相邻分类

- [浏览器、测试与质量](/zh/awesome-skills/categories/browser-testing-quality/) - 用于浏览器自动化、本地应用检查、Core Web Vitals、可访问性和 Web 质量审查的 skills。
- [前端与设计](/zh/awesome-skills/categories/frontend-design/) - 用于 UI 构图、框架模式、设计审查和前端实现决策的 skills。
- [部署与平台运维](/zh/awesome-skills/categories/deployment-platform/) - 用于部署、配置和运维云平台与托管服务的 skills。
- [安全与审查](/zh/awesome-skills/categories/security-review/) - 用于威胁建模、静态分析、代码审查和安全调查的 skills。

## 参考资料

- VoltAgent Awesome Agent Skills：https://github.com/VoltAgent/awesome-agent-skills
- officialskills.sh：https://officialskills.sh/
- Agent Skills 标准：https://agentskills.io/
