---
title: "Skills 系统"
description: "把 Hermes skills 用作可复用工作流和领域知识，而不是把临时笔记、旧假设或私有过程永久化。"
---

# Skills 系统

Skills 是 Hermes 的可复用知识和流程单元。你可以把它理解成“在合适时机加载的操作手册”：平时不占满上下文，触发时告诉 agent 怎么完成某类任务。

好的 skill 会让重复工作变稳。坏 skill 会把旧流程包装成权威说明，而且每次触发都继续影响输出。

## 什么值得做成 skill

一个任务适合做成 skill，通常满足这些条件：

- 重复出现，不是一次性讨论。
- 触发条件清楚。
- 步骤相对稳定。
- 输入和输出可以描述。
- 有明确的禁止事项。
- 失败时知道如何停下或交给人。

例如发布说明、PR review、固定格式研究报告、迁移检查、日志分析，都比“帮我更聪明地写代码”更适合做成 skill。

## 一个 skill 应该很窄

不要把一个 skill 写成百科全书。它应该聚焦一个可重复动作：

```markdown
---
name: release-notes
description: Use when preparing release notes from merged pull requests.
---

1. Read merged PR titles and labels.
2. Group user-facing changes first.
3. Mention breaking changes clearly.
4. Keep private review notes out of the changelog.
5. Return a draft; do not publish it.
```

这里最重要的不是格式，而是边界：什么时候用、读什么、产出什么、不能做什么。

## Skill、context 和 memory 的区别

| 机制 | 适合内容 |
| --- | --- |
| Context files | 每次进项目都应该遵守的规则。 |
| Memory | 跨会话稳定的个人偏好。 |
| Skill | 某类任务触发时才需要的流程。 |
| 项目文档 | 人也需要审查和维护的事实、契约、决策。 |

如果一个规则每次都要遵守，放 context。只有做某类任务才需要，放 skill。只是个人偏好，放 memory。需要团队审查，放项目文档。

## 不要把草稿变成 skill

临时研究、未审核判断、当前任务计划、某次失败的 workaround，都不应该直接变成 skill。它们可能明天就过期，但 skill 会以“流程”的姿态继续影响未来任务。

发布 skill 前至少检查：

- 是否含有过期版本号。
- 是否含有私有路径、token、账号或内部链接。
- 是否会让 agent 自动执行高风险动作。
- 是否把某次任务的特殊限制误写成通用规则。

## 维护比创建更重要

当 Hermes 的行为突然变得固执，skills 是排查重点之一。一个过时 skill 可能比没有 skill 更糟，因为它会显得很正式。

建议给团队 skills 留下维护习惯：

- 命名具体，不要泛化。
- 每个 skill 只服务一类任务。
- 定期删掉不用或过时的 skill。
- 高风险 skill 写清人工确认点。
- 修改后用一个小任务验证触发行为。

## 相关页面

- [Context Files](/zh/hermes/context-files/)
- [记忆与会话搜索](/zh/hermes/memory-and-sessions/)
- [自动化与协作](/zh/hermes/automation/)
- [安全模型](/zh/hermes/security-model/)

## 参考资料

- Skills：https://hermes-agent.nousresearch.com/docs/user-guide/features/skills
- Work with Skills：https://hermes-agent.nousresearch.com/docs/guides/work-with-skills
- Creating Skills：https://hermes-agent.nousresearch.com/docs/developer-guide/creating-skills
