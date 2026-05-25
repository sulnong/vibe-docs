---
title: "安全与审查 Skills"
description: "安全与审查分类下的 7 个 agent skills，用于判断、安装和比较。"
---

# 安全与审查 Skills

用于威胁建模、静态分析、代码审查和安全调查的 skills。

这一类页面适合在你已经知道大方向、但还不确定该选哪个 skill 时阅读。先从真实任务出发，再看 skill 的来源、依赖、第一次运行方式和退出条件。

## 本分类包含的 skills

| Skill | 适合处理 | 来源 |
| --- | --- | --- |
| [Security Best Practices Skill](/zh/awesome-skills/security-best-practices/) | 按语言特性审查安全漏洞，并识别实际加固机会。 | officialskills.sh |
| [Security Threat Model Skill](/zh/awesome-skills/security-threat-model/) | 通过识别资产、信任边界和攻击路径生成仓库级威胁模型。 | officialskills.sh |
| [Ask Questions If Underspecified Skill](/zh/awesome-skills/ask-questions-if-underspecified/) | 在需求过于模糊、无法安全处理时强制澄清。 | officialskills.sh |
| [Audit Context Building Skill](/zh/awesome-skills/audit-context-building/) | 在安全审计或调查前建立深入架构上下文。 | officialskills.sh |
| [Static Analysis Skill](/zh/awesome-skills/static-analysis/) | 使用 CodeQL、Semgrep 和 SARIF 等静态分析工具流程。 | officialskills.sh |
| [Semgrep Rule Creator Skill](/zh/awesome-skills/semgrep-rule-creator/) | 创建并迭代用于漏洞检测的 Semgrep 规则。 | officialskills.sh |
| [Insecure Defaults Skill](/zh/awesome-skills/insecure-defaults/) | 识别硬编码密钥、默认凭据和弱加密等不安全默认配置。 | officialskills.sh |

## 如何选择

- 审查安全假设比代码风格更重要的变更。
- 把笼统风险拆成具体文件、流程和控制点。
- 在需要时使用专门安全流程，而不是让每个编码任务都变重。

## 先不要用的情况

- 审查者无法访问相关代码或运行时配置。
- 请求要求针对第三方系统提供利用步骤。
- 范围过宽，无法产出可行动结论。

## 决策表

| 判断点 | 建议 |
| --- | --- |
| 主要依赖 | 仓库访问权限、范围、语言/工具上下文和审查目标 |
| 第一次尝试 | 先定义资产、信任边界或 diff，再让 skill 检查风险。 |
| 最小安全范围 | 先选一个低风险样例、预览环境、小文件或只读目标，确认输出能被人工复核。 |
| 何时换方案 | 如果任务超出这个分类的真实边界，先回到 [Awesome Skills 概览](/zh/awesome-skills/) 选择更接近的分类。 |

## 阅读顺序

1. [Security Best Practices Skill](/zh/awesome-skills/security-best-practices/)：按语言特性审查安全漏洞，并识别实际加固机会。
2. [Security Threat Model Skill](/zh/awesome-skills/security-threat-model/)：通过识别资产、信任边界和攻击路径生成仓库级威胁模型。
3. [Ask Questions If Underspecified Skill](/zh/awesome-skills/ask-questions-if-underspecified/)：在需求过于模糊、无法安全处理时强制澄清。
4. [Audit Context Building Skill](/zh/awesome-skills/audit-context-building/)：在安全审计或调查前建立深入架构上下文。
5. [Static Analysis Skill](/zh/awesome-skills/static-analysis/)：使用 CodeQL、Semgrep 和 SARIF 等静态分析工具流程。
6. [Semgrep Rule Creator Skill](/zh/awesome-skills/semgrep-rule-creator/)：创建并迭代用于漏洞检测的 Semgrep 规则。
7. [Insecure Defaults Skill](/zh/awesome-skills/insecure-defaults/)：识别硬编码密钥、默认凭据和弱加密等不安全默认配置。

## 相邻分类

- [浏览器、测试与质量](/zh/awesome-skills/categories/browser-testing-quality/) - 用于浏览器自动化、本地应用检查、Core Web Vitals、可访问性和 Web 质量审查的 skills。
- [前端与设计](/zh/awesome-skills/categories/frontend-design/) - 用于 UI 构图、框架模式、设计审查和前端实现决策的 skills。
- [部署与平台运维](/zh/awesome-skills/categories/deployment-platform/) - 用于部署、配置和运维云平台与托管服务的 skills。
- [文档与知识管理](/zh/awesome-skills/categories/documents-knowledge/) - 用于办公文件、PDF、文档研究和知识沉淀流程的 skills。

## 参考资料

- VoltAgent Awesome Agent Skills：https://github.com/VoltAgent/awesome-agent-skills
- officialskills.sh：https://officialskills.sh/
- Agent Skills 标准：https://agentskills.io/
