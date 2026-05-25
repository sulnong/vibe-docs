---
title: "部署与平台运维 Skills"
description: "部署与平台运维分类下的 7 个 agent skills，用于判断、安装和比较。"
---

# 部署与平台运维 Skills

用于部署、配置和运维云平台与托管服务的 skills。

这一类页面适合在你已经知道大方向、但还不确定该选哪个 skill 时阅读。先从真实任务出发，再看 skill 的来源、依赖、第一次运行方式和退出条件。

## 本分类包含的 skills

| Skill | 适合处理 | 来源 |
| --- | --- | --- |
| [Cloudflare Skill](/zh/awesome-skills/cloudflare/) | 覆盖 Cloudflare Workers、Pages、存储、AI、网络、安全和基础设施配置。 | officialskills.sh |
| [Workers Best Practices Skill](/zh/awesome-skills/workers-best-practices/) | 按生产最佳实践和 `wrangler.jsonc` 约定审查、编写 Workers 代码。 | officialskills.sh |
| [Wrangler Skill](/zh/awesome-skills/wrangler/) | 用 Wrangler 部署和管理 Workers、KV、R2、D1、Vectorize、Queues 和 Workflows。 | officialskills.sh |
| [Cloudflare Deploy Skill](/zh/awesome-skills/cloudflare-deploy/) | 使用 Workers、Pages 和相关平台服务把应用部署到 Cloudflare。 | officialskills.sh |
| [Vercel Deploy Skill](/zh/awesome-skills/vercel-deploy/) | 把应用和网站部署到 Vercel 预览或生产环境。 | officialskills.sh |
| [Netlify Deploy Skill](/zh/awesome-skills/netlify-deploy/) | 通过 CLI 认证、站点关联和环境配置自动化 Netlify 部署。 | officialskills.sh |
| [Netlify Functions Skill](/zh/awesome-skills/netlify-functions/) | 在 Netlify 上构建 serverless API 端点和后台任务。 | officialskills.sh |

## 如何选择

- 准备部署路径，同时避免把平台细节混进通用应用代码。
- 在推送到托管平台前审查配置文件。
- 用平台自己的术语和边界排查部署行为。

## 先不要用的情况

- 任务会直接修改生产资源，但没有审核点。
- 缺少必要凭据或项目标识。
- 应用尚未在本地确认基本运行方式。

## 决策表

| 判断点 | 建议 |
| --- | --- |
| 主要依赖 | 平台账号、CLI、项目配置和环境变量 |
| 第一次尝试 | 先用于预览、staging 服务或 dry-run 路径，再进入生产环境。 |
| 最小安全范围 | 先选一个低风险样例、预览环境、小文件或只读目标，确认输出能被人工复核。 |
| 何时换方案 | 如果任务超出这个分类的真实边界，先回到 [Awesome Skills 概览](/zh/awesome-skills/) 选择更接近的分类。 |

## 阅读顺序

1. [Cloudflare Skill](/zh/awesome-skills/cloudflare/)：覆盖 Cloudflare Workers、Pages、存储、AI、网络、安全和基础设施配置。
2. [Workers Best Practices Skill](/zh/awesome-skills/workers-best-practices/)：按生产最佳实践和 `wrangler.jsonc` 约定审查、编写 Workers 代码。
3. [Wrangler Skill](/zh/awesome-skills/wrangler/)：用 Wrangler 部署和管理 Workers、KV、R2、D1、Vectorize、Queues 和 Workflows。
4. [Cloudflare Deploy Skill](/zh/awesome-skills/cloudflare-deploy/)：使用 Workers、Pages 和相关平台服务把应用部署到 Cloudflare。
5. [Vercel Deploy Skill](/zh/awesome-skills/vercel-deploy/)：把应用和网站部署到 Vercel 预览或生产环境。
6. [Netlify Deploy Skill](/zh/awesome-skills/netlify-deploy/)：通过 CLI 认证、站点关联和环境配置自动化 Netlify 部署。
7. [Netlify Functions Skill](/zh/awesome-skills/netlify-functions/)：在 Netlify 上构建 serverless API 端点和后台任务。

## 相邻分类

- [浏览器、测试与质量](/zh/awesome-skills/categories/browser-testing-quality/) - 用于浏览器自动化、本地应用检查、Core Web Vitals、可访问性和 Web 质量审查的 skills。
- [前端与设计](/zh/awesome-skills/categories/frontend-design/) - 用于 UI 构图、框架模式、设计审查和前端实现决策的 skills。
- [安全与审查](/zh/awesome-skills/categories/security-review/) - 用于威胁建模、静态分析、代码审查和安全调查的 skills。
- [文档与知识管理](/zh/awesome-skills/categories/documents-knowledge/) - 用于办公文件、PDF、文档研究和知识沉淀流程的 skills。

## 参考资料

- VoltAgent Awesome Agent Skills：https://github.com/VoltAgent/awesome-agent-skills
- officialskills.sh：https://officialskills.sh/
- Agent Skills 标准：https://agentskills.io/
