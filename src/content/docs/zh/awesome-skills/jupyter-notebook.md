---
title: "Jupyter Notebook Skill"
description: "Jupyter Notebook Skill：为实验和教程创建清晰、可复现的 Jupyter notebooks。"
---

# Jupyter Notebook Skill

为实验和教程创建清晰、可复现的 Jupyter notebooks。

这个页面帮助你判断是否应该安装或调用 `openai/jupyter-notebook`，以及第一次使用时应该怎样控制范围。

## 快速信息

| 字段 | 内容 |
| --- | --- |
| Skill | `openai/jupyter-notebook` |
| 分类 | [工作流与 Skill 创建](/zh/awesome-skills/categories/workflow-skill-creation/) |
| 目录页 | https://officialskills.sh/openai/skills/jupyter-notebook |
| 主要来源 | https://officialskills.sh/openai/skills/jupyter-notebook |
| 主要依赖 | 仓库、issue/PR 上下文、notebook 运行时或 skill 编写目标 |
| 第一次尝试 | 先作用于一个边界清楚的工作流，并保持产物可审查。 |

## 安装与设置

从目录页开始：https://officialskills.sh/openai/skills/jupyter-notebook

如果页面提供安装命令，优先复制目录页上的命令，不要根据 URL 自行拼接。若你的 agent 客户端支持 GitHub skill 路径，可以使用主要来源：https://officialskills.sh/openai/skills/jupyter-notebook

安装后先阅读原始 `SKILL.md` 或目录页说明，确认触发条件、依赖、禁止事项和输出形式。不要只因为名称匹配就让 agent 自动使用它。

## 这个 skill 做什么

为实验和教程创建清晰、可复现的 Jupyter notebooks。

放在「工作流与 Skill 创建」这一类里，它的价值不是替 agent “多知道一点”，而是让 agent 在特定任务上遵守更稳定的流程、检查点和边界。

## 这页帮你判断什么

- `openai/jupyter-notebook` 是否比临时提示词更适合当前任务。
- 第一次调用时应该准备哪些上下文、账号、文件、URL 或运行环境。
- 输出能否被人工复核，是否需要截图、日志、diff、来源链接或命令记录。
- 如果它不合适，应该转向同分类中的哪个相邻 skill。

## 什么时候使用

- 把重复 agent 工作沉淀成可复用流程。
- 处理 GitHub 或 notebook 任务，避免混进普通编码提示。
- 创建或审查具备清晰触发、输入、输出和边界的 skills。

## 什么时候不要使用

- 流程只是一次性任务，不值得做成 skill。
- 任务会在没有明确确认点时自动发布、合并或推送。
- 请求的 skill 过宽，难以安全维护。

## 决策清单

| 判断 | 建议 |
| --- | --- |
| 任务是否足够窄 | 如果任务可以用一句稳定触发条件描述，就适合交给这个 skill；如果仍然很发散，先拆小。 |
| 是否具备依赖 | 仓库、issue/PR 上下文、notebook 运行时或 skill 编写目标。缺少依赖时，先补上下文，不要让 agent 猜测。 |
| 最小试运行 | 先作用于一个边界清楚的工作流，并保持产物可审查。 |
| 输出如何验收 | 要求 agent 留下可复核证据，例如文件路径、命令、截图、审计结果、来源链接或关键判断依据。 |
| 什么时候停止 | 一旦任务涉及生产资源、敏感数据、账号权限或不可逆操作，就切回人工确认。 |
 
## 与相邻 skill 对比

- 如果你的任务更接近「指导创建用于扩展 agent 专门工作流的 skills。」，优先看 [Skill Creator Skill](/zh/awesome-skills/skill-creator/)；如果重点仍是「为实验和教程创建清晰、可复现的 Jupyter notebooks。」，再使用当前页面。
- 如果你的任务更接近「提供创建新 skill 的基础模板。」，优先看 [Template Skill](/zh/awesome-skills/template/)；如果重点仍是「为实验和教程创建清晰、可复现的 Jupyter notebooks。」，再使用当前页面。
- 如果你的任务更接近「通过 CLI 处理 GitHub PR 上的 review 和 issue comments。」，优先看 [GitHub Address Comments Skill](/zh/awesome-skills/gh-address-comments/)；如果重点仍是「为实验和教程创建清晰、可复现的 Jupyter notebooks。」，再使用当前页面。
- 如果你的任务更接近「通过检查日志调试并修复失败的 GitHub Actions 检查。」，优先看 [GitHub Fix CI Skill](/zh/awesome-skills/gh-fix-ci/)；如果重点仍是「为实验和教程创建清晰、可复现的 Jupyter notebooks。」，再使用当前页面。

## 第一次工作流

1. 打开目录页或来源目录，确认这是你要安装的 skill。
2. 阅读触发条件和 guardrails，确认它适合当前任务。
3. 在低风险样例、预览环境或小文件上运行一次。
4. 检查输出是否可追踪到来源、命令或文件变化。
5. 再决定是否把它用于更大的任务。

## 使用边界

- 不要把一次任务里的临时限制写成长期 skill 规则。
- 不要让 skill 自动处理账号、生产资源、付款、发布或合并操作，除非流程里有明确审核点。
- 如果 skill 依赖外部服务，先确认凭据、配额、隐私和输出位置。
- 如果结果会进入公开文档或生产代码，要回到原始来源复核事实。

## 相似 skill

- [Skill Creator Skill](/zh/awesome-skills/skill-creator/) - 指导创建用于扩展 agent 专门工作流的 skills。
- [Template Skill](/zh/awesome-skills/template/) - 提供创建新 skill 的基础模板。
- [GitHub Address Comments Skill](/zh/awesome-skills/gh-address-comments/) - 通过 CLI 处理 GitHub PR 上的 review 和 issue comments。
- [GitHub Fix CI Skill](/zh/awesome-skills/gh-fix-ci/) - 通过检查日志调试并修复失败的 GitHub Actions 检查。

## 参考资料

- 目录页：https://officialskills.sh/openai/skills/jupyter-notebook
- 主要来源：https://officialskills.sh/openai/skills/jupyter-notebook
- VoltAgent Awesome Agent Skills：https://github.com/VoltAgent/awesome-agent-skills
