---
title: "Skills 系统"
description: "把 Hermes skills 用于可复用工作流和领域知识，而不是把所有笔记都变成全局行为。"
---

# Skills 系统

## 什么适合变成 skill

- 稳定、重复出现的流程。
- 清楚的触发条件。
- 少量必要命令和示例。
- 明确不应该自动做的事。

## 不要保存临时想法

Skill 应该帮助重复工作，而不是保存某次讨论里的所有推理。过时 skill 比没有 skill 更危险，因为它仍然会显得很权威。

## Skills 应该很窄

有用的 skill 有清楚触发条件和可重复流程。它不应该变成保存某次会话所有临时笔记的仓库。

```markdown
---
name: release-notes
description: Use when preparing release notes from merged pull requests.
---

1. Read merged PR titles and labels.
2. Group user-facing changes first.
3. Mention breaking changes clearly.
4. Keep private review notes out of the changelog.
```

## 维护也重要

当行为出现奇怪的持续性时，检查 skills。过时 skill 可能持续带回旧假设，即使当前 prompt 很清楚。

## 相关页面

- [安装与版本基线](/zh/hermes-agent/installation/)
- [第一条可靠路径](/zh/hermes-agent/first-run/)
- [Provider 与模型配置](/zh/hermes-agent/providers-and-models/)
- [工具与工具集](/zh/hermes-agent/tools-and-toolsets/)

## 参考资料

- Skills: https://hermes-agent.nousresearch.com/docs/user-guide/features/skills
