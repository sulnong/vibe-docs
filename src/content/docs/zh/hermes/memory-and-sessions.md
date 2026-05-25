---
title: "记忆与会话搜索"
description: "区分 Hermes 的会话状态、长期记忆、项目规则和可审计文件，避免让坏假设长期跟随任务。"
---

# 记忆与会话搜索

Hermes 的 memory 和 sessions 能让工作更连续，但它们不是事实数据库，也不是项目文档的替代品。最重要的判断是：某条信息应该只属于这次会话，还是应该成为长期偏好，还是应该写进项目文件让团队审查。

## 四种状态不要混在一起

| 信息类型 | 更适合放哪里 |
| --- | --- |
| 本次任务的上下文、尝试、失败和中间结果 | Session。 |
| 稳定的个人偏好，例如输出习惯或常用环境 | Memory。 |
| 项目规则、目录约定、安全边界 | `AGENTS.md`、`.hermes.md` 或项目文档。 |
| 需求、接口契约、发布记录、审核证据 | 版本化文件、issue、提交或日志。 |

把所有东西都塞进 memory，会让它看起来很聪明，但后面很难解释“为什么它总是这样做”。

## 会话适合连续工作

Session 的价值是恢复上下文：刚才读过哪些文件、尝试过什么、当前任务走到哪一步。它适合中短期连续工作。

但是，重要结论不要只留在 session 里。一次代码修改的依据、一个文档页面的来源、一个发布动作的检查结果，都应该落到外部可见位置。这样换人、换模型或换会话后仍然能继续。

## Memory 适合稳定偏好

Memory 适合保存跨会话仍然成立的偏好，例如：

- 用户偏好中文讨论或英文输出。
- 默认不运行测试，除非明确要求。
- 某些长期工具或目录习惯。
- 个人不希望反复解释的工作偏好。

不适合保存：

- 一次临时任务的计划。
- 没审核过的事实判断。
- 可能过期的版本信息。
- 密钥、token、内部账号或敏感信息。

## 坏记忆的症状

当 Hermes 反复做出你没有要求的事，或者总是带回一个旧结论，先判断它来自哪里：

| 症状 | 可能来源 |
| --- | --- |
| 只在一个会话里出现 | Session state。 |
| 每次新会话都出现 | Memory 或全局 context。 |
| 只在某个项目出现 | 项目 context file。 |
| 只在某个 skill 被调用后出现 | Skill 内容。 |

不要每次 prompt 都写“不要再这样”。找到来源，改掉或删除。

## 让记忆可审查

长期记忆越多，越要定期清理。建议保留这些原则：

- 能写进项目文件的，不放 memory。
- 会影响安全或公开输出的，不放 memory。
- 会过期的事实，写来源和日期，或者不要放。
- 团队共享规则用版本化文件，不用个人记忆。

Memory 的目标是减少重复解释，不是替代工程记录。

## 相关页面

- [Context Files](/zh/hermes/context-files/)
- [Skills 系统](/zh/hermes/skills/)
- [CLI 与 TUI 工作流](/zh/hermes/cli-and-tui/)
- [排错路径](/zh/hermes/troubleshooting/)

## 参考资料

- Memory：https://hermes-agent.nousresearch.com/docs/user-guide/features/memory
- Sessions：https://hermes-agent.nousresearch.com/docs/user-guide/sessions
- Memory providers：https://hermes-agent.nousresearch.com/docs/user-guide/features/memory-providers
