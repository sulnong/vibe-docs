---
title: "CLI 与 TUI 工作流"
description: "用 Hermes CLI 和 TUI 处理本地会话、项目目录、会话恢复、命令驱动任务和可复现输出。"
---

# CLI 与 TUI 工作流

Hermes 的日常入口仍然是终端。CLI 和 TUI 的价值不只是“能聊天”，而是把聊天、文件、命令、项目上下文和会话状态放在同一个工作面里。

## 工作目录就是第一层上下文

从哪个目录启动 Hermes，会影响它看到的文件、项目指令、相对路径和工具动作：

```bash
cd /path/to/project
git status --short
hermes
```

如果目录错了，后面的 prompt 写得再清楚也容易偏。长任务开始前先看一眼 `pwd` 和 `git status --short`，这比事后追查误改文件便宜得多。

## CLI 适合什么

CLI 适合快速、本地、可中断的工作：

- 阅读仓库结构，定位相关文件。
- 让 Hermes 提出修改计划。
- 小范围编辑并看 diff。
- 复用已有会话继续推进。
- 用 slash commands 或普通命令控制 session、模型和工具。

当任务需要留下团队可见的结果时，不要只依赖聊天历史。把结论写进项目文档、issue、提交或可审查文件。

## TUI 适合什么

TUI 更适合长会话和多信息面板：你可以更舒服地看工具状态、会话信息、输入区域和上下文。它适合日常连续工作，但不应该替代可复现记录。

一个简单原则：探索可以留在 TUI，决策要落到文件。否则过几天你只记得“当时 Hermes 说过”，却找不到可审查依据。

## 把交互工作变成可复现工作

很多流程一开始都是聊天，稳定后应该沉淀：

| 交互阶段 | 稳定后放哪里 |
| --- | --- |
| “每次都要这样读仓库” | `AGENTS.md`、`.hermes.md` 或项目文档。 |
| “每次都要这样生成报告” | skill 或脚本。 |
| “每次都要检查这些文件” | 小工具、测试或 checklist。 |
| “每周都要跑一次” | cron，但先加日志和停止路径。 |

Hermes 的强项是帮你探索流程；成熟流程不一定继续留在聊天里。

## 会话恢复要有外部锚点

Hermes 支持 session persistence、resume 和 search，但重要工作仍然应该有外部锚点：

- 当前目标写在 issue、任务卡或文档里。
- 中间产物写入文件，而不是只出现在对话里。
- 修改通过 Git diff 复核。
- 关键命令和失败信息能在终端或日志里找到。

这会让恢复会话变得可靠：你不是要求模型“记得一切”，而是让它根据可见状态继续工作。

## 一个健康的日常循环

```text
1. 进入正确目录。
2. 检查工作树。
3. 让 Hermes 先阅读和说明计划。
4. 限定写入范围。
5. 看 diff。
6. 把可复用规则沉淀到 context、skill 或脚本。
```

这个循环比“直接让 agent 做完所有事”慢一点，但长期更稳，尤其适合多人项目。

## 相关页面

- [第一条可靠路径](/zh/hermes/first-run/)
- [Context Files](/zh/hermes/context-files/)
- [记忆与会话搜索](/zh/hermes/memory-and-sessions/)
- [工具与工具集](/zh/hermes/tools-and-toolsets/)

## 参考资料

- CLI：https://hermes-agent.nousresearch.com/docs/user-guide/cli
- TUI：https://hermes-agent.nousresearch.com/docs/user-guide/tui
- Sessions：https://hermes-agent.nousresearch.com/docs/user-guide/sessions
