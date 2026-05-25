---
title: "工作流与 Skill 创建 Skills"
description: "工作流与 Skill 创建分类下的 5 个 agent skills，用于判断、安装和比较。"
---

# 工作流与 Skill 创建 Skills

用于可复用 agent 工作流、GitHub 协作、notebook 和创建新 skills 的 skills。

这一类页面适合在你已经知道大方向、但还不确定该选哪个 skill 时阅读。先从真实任务出发，再看 skill 的来源、依赖、第一次运行方式和退出条件。

## 本分类包含的 skills

| Skill | 适合处理 | 来源 |
| --- | --- | --- |
| [Skill Creator Skill](/zh/awesome-skills/skill-creator/) | 指导创建用于扩展 agent 专门工作流的 skills。 | officialskills.sh |
| [Template Skill](/zh/awesome-skills/template/) | 提供创建新 skill 的基础模板。 | officialskills.sh |
| [GitHub Address Comments Skill](/zh/awesome-skills/gh-address-comments/) | 通过 CLI 处理 GitHub PR 上的 review 和 issue comments。 | officialskills.sh |
| [GitHub Fix CI Skill](/zh/awesome-skills/gh-fix-ci/) | 通过检查日志调试并修复失败的 GitHub Actions 检查。 | officialskills.sh |
| [Jupyter Notebook Skill](/zh/awesome-skills/jupyter-notebook/) | 为实验和教程创建清晰、可复现的 Jupyter notebooks。 | officialskills.sh |

## 如何选择

- 把重复 agent 工作沉淀成可复用流程。
- 处理 GitHub 或 notebook 任务，避免混进普通编码提示。
- 创建或审查具备清晰触发、输入、输出和边界的 skills。

## 先不要用的情况

- 流程只是一次性任务，不值得做成 skill。
- 任务会在没有明确确认点时自动发布、合并或推送。
- 请求的 skill 过宽，难以安全维护。

## 决策表

| 判断点 | 建议 |
| --- | --- |
| 主要依赖 | 仓库、issue/PR 上下文、notebook 运行时或 skill 编写目标 |
| 第一次尝试 | 先作用于一个边界清楚的工作流，并保持产物可审查。 |
| 最小安全范围 | 先选一个低风险样例、预览环境、小文件或只读目标，确认输出能被人工复核。 |
| 何时换方案 | 如果任务超出这个分类的真实边界，先回到 [Awesome Skills 概览](/zh/awesome-skills/) 选择更接近的分类。 |

## 阅读顺序

1. [Skill Creator Skill](/zh/awesome-skills/skill-creator/)：指导创建用于扩展 agent 专门工作流的 skills。
2. [Template Skill](/zh/awesome-skills/template/)：提供创建新 skill 的基础模板。
3. [GitHub Address Comments Skill](/zh/awesome-skills/gh-address-comments/)：通过 CLI 处理 GitHub PR 上的 review 和 issue comments。
4. [GitHub Fix CI Skill](/zh/awesome-skills/gh-fix-ci/)：通过检查日志调试并修复失败的 GitHub Actions 检查。
5. [Jupyter Notebook Skill](/zh/awesome-skills/jupyter-notebook/)：为实验和教程创建清晰、可复现的 Jupyter notebooks。

## 相邻分类

- [浏览器、测试与质量](/zh/awesome-skills/categories/browser-testing-quality/) - 用于浏览器自动化、本地应用检查、Core Web Vitals、可访问性和 Web 质量审查的 skills。
- [前端与设计](/zh/awesome-skills/categories/frontend-design/) - 用于 UI 构图、框架模式、设计审查和前端实现决策的 skills。
- [部署与平台运维](/zh/awesome-skills/categories/deployment-platform/) - 用于部署、配置和运维云平台与托管服务的 skills。
- [安全与审查](/zh/awesome-skills/categories/security-review/) - 用于威胁建模、静态分析、代码审查和安全调查的 skills。

## 参考资料

- VoltAgent Awesome Agent Skills：https://github.com/VoltAgent/awesome-agent-skills
- officialskills.sh：https://officialskills.sh/
- Agent Skills 标准：https://agentskills.io/
