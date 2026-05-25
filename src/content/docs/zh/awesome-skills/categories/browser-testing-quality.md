---
title: "浏览器、测试与质量 Skills"
description: "浏览器、测试与质量分类下的 6 个 agent skills，用于判断、安装和比较。"
---

# 浏览器、测试与质量 Skills

用于浏览器自动化、本地应用检查、Core Web Vitals、可访问性和 Web 质量审查的 skills。

这一类页面适合在你已经知道大方向、但还不确定该选哪个 skill 时阅读。先从真实任务出发，再看 skill 的来源、依赖、第一次运行方式和退出条件。

## 本分类包含的 skills

| Skill | 适合处理 | 来源 |
| --- | --- | --- |
| [Playwright Skill](/zh/awesome-skills/playwright/) | 通过终端里的 `playwright-cli` 驱动真实浏览器，完成导航、表单、snapshot、截图、信息提取和 UI 流程调试。 | officialskills.sh |
| [Webapp Testing Skill](/zh/awesome-skills/webapp-testing/) | 使用 Playwright 相关工作流测试本地 Web 应用。 | officialskills.sh |
| [Playwright Interactive Skill](/zh/awesome-skills/playwright-interactive/) | 通过交互式 JavaScript REPL 持续操作浏览器和 Electron 应用。 | officialskills.sh |
| [Web Quality Audit Skill](/zh/awesome-skills/web-quality-audit/) | 围绕性能、可访问性、SEO 和最佳实践进行 Web 质量审查。 | officialskills.sh |
| [Core Web Vitals Skill](/zh/awesome-skills/core-web-vitals/) | 诊断并改进 LCP、INP 和 CLS 问题。 | officialskills.sh |
| [Accessibility Skill](/zh/awesome-skills/accessibility/) | 按接近 WCAG 的实践检查审查并改进 Web 可访问性。 | officialskills.sh |

## 如何选择

- 需要检查真实页面，而不是只根据源码猜测行为。
- 需要截图、trace、审计结果或结构化发现作为证据。
- 需要区分一次性浏览器操作和长期回归测试。

## 先不要用的情况

- 任务只需要阅读静态文档或源码。
- 目标站点需要 agent 无法访问的账号或登录 session。
- 目标产物是长期维护的测试套件，而项目已有测试框架。

## 决策表

| 判断点 | 建议 |
| --- | --- |
| 主要依赖 | 根据 skill 不同，通常需要浏览器、CLI 或目标 URL |
| 第一次尝试 | 先在低风险页面或本地预览上运行，并产出一个具体发现。 |
| 最小安全范围 | 先选一个低风险样例、预览环境、小文件或只读目标，确认输出能被人工复核。 |
| 何时换方案 | 如果任务超出这个分类的真实边界，先回到 [Awesome Skills 概览](/zh/awesome-skills/) 选择更接近的分类。 |

## 阅读顺序

1. [Playwright Skill](/zh/awesome-skills/playwright/)：通过终端里的 `playwright-cli` 驱动真实浏览器，完成导航、表单、snapshot、截图、信息提取和 UI 流程调试。
2. [Webapp Testing Skill](/zh/awesome-skills/webapp-testing/)：使用 Playwright 相关工作流测试本地 Web 应用。
3. [Playwright Interactive Skill](/zh/awesome-skills/playwright-interactive/)：通过交互式 JavaScript REPL 持续操作浏览器和 Electron 应用。
4. [Web Quality Audit Skill](/zh/awesome-skills/web-quality-audit/)：围绕性能、可访问性、SEO 和最佳实践进行 Web 质量审查。
5. [Core Web Vitals Skill](/zh/awesome-skills/core-web-vitals/)：诊断并改进 LCP、INP 和 CLS 问题。
6. [Accessibility Skill](/zh/awesome-skills/accessibility/)：按接近 WCAG 的实践检查审查并改进 Web 可访问性。

## 相邻分类

- [前端与设计](/zh/awesome-skills/categories/frontend-design/) - 用于 UI 构图、框架模式、设计审查和前端实现决策的 skills。
- [部署与平台运维](/zh/awesome-skills/categories/deployment-platform/) - 用于部署、配置和运维云平台与托管服务的 skills。
- [安全与审查](/zh/awesome-skills/categories/security-review/) - 用于威胁建模、静态分析、代码审查和安全调查的 skills。
- [文档与知识管理](/zh/awesome-skills/categories/documents-knowledge/) - 用于办公文件、PDF、文档研究和知识沉淀流程的 skills。

## 参考资料

- VoltAgent Awesome Agent Skills：https://github.com/VoltAgent/awesome-agent-skills
- officialskills.sh：https://officialskills.sh/
- Agent Skills 标准：https://agentskills.io/
