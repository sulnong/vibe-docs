---
title: "项目指令与 Context Files"
description: "用 AGENTS.md、.hermes.md、CLAUDE.md 和 SOUL.md 给 Hermes 稳定上下文，同时避免把临时讨论变成长期规则。"
---

# 项目指令与 Context Files

Context files 是 Hermes 每次进入项目时会读到的长期说明。它们很有用，也很危险：写得好，agent 更像熟悉项目的同事；写得乱，昨天的临时想法会变成今天的隐形政策。

## 什么应该放进去

适合放进 context files 的内容有三个特征：稳定、可复用、影响每次工作。

| 内容 | 适合程度 |
| --- | --- |
| 项目目录约定 | 适合。 |
| 编码风格和测试习惯 | 适合。 |
| 安全边界，例如不要读取某些目录 | 适合。 |
| 当前任务的临时计划 | 不适合，放任务文档或 issue。 |
| 研究材料原文 | 不适合，放内部研究记录。 |
| 未审核的草稿 | 不适合，容易污染后续输出。 |

一个好文件通常短、具体、可维护，而不是把所有聊天记录塞进去。

## AGENTS.md 和 .hermes.md 怎么分工

如果项目已经有 `AGENTS.md`，可以把它当成跨 agent 的项目规则。`.hermes.md` 更适合 Hermes 特有的使用说明，例如启用哪些工具、偏好的会话习惯或 Hermes 专用限制。

```markdown
# 项目规则

- 公开文档只放在 src/content/docs/。
- 研究记录和临时判断放在内部目录。
- 未明确要求时，不运行测试或构建命令。
- 修改公开页面时，不要写入内部工作说明。
```

规则要直接告诉 agent 怎么行动。不要写“保持专业”“认真思考”这类无法检查的句子。

## SOUL.md 不是项目规范

Hermes 支持通过 SOUL.md 或 personality 影响默认语气。它适合写个人偏好和交互风格，不适合写项目安全规则、部署步骤或代码规范。

把风格和规则分开很重要。风格可以因用户而变；项目规则应该可审查、可版本化、可团队共享。

## 引用文件比复制内容更好

当任务需要某份文件、diff、URL 或目录，优先用明确引用，而不是把大段内容复制到 prompt 里。这样 Hermes 更容易定位来源，也更容易避免把临时材料永久写进 context files。

对技术文档项目尤其重要：公开页面应该直接回答读者问题，临时研究、工作记录和未确认判断都应该留在内部目录。

## 维护 context files

Context files 不是写完就不管。出现这些症状时要检查它们：

- Hermes 每次都带回同一个旧假设。
- 输出里出现不该公开的内部措辞。
- 它总是运行你已经不想运行的命令。
- 它忽略了新的目录约定或发布流程。

不要用更长 prompt 对抗坏 context。删掉或改掉源头。

## 相关页面

- [CLI 与 TUI 工作流](/zh/hermes/cli-and-tui/)
- [记忆与会话搜索](/zh/hermes/memory-and-sessions/)
- [Skills 系统](/zh/hermes/skills/)
- [安全模型](/zh/hermes/security-model/)

## 参考资料

- Context Files：https://hermes-agent.nousresearch.com/docs/user-guide/features/context-files
- Context References：https://hermes-agent.nousresearch.com/docs/user-guide/features/context-references
- Personality and SOUL.md：https://hermes-agent.nousresearch.com/docs/user-guide/features/personality
