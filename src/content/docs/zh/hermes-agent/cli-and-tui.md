---
title: "CLI 与 TUI 工作流"
description: "使用 Hermes 终端界面处理日常会话、导航、恢复和命令驱动工作。"
---

# CLI 与 TUI 工作流

## 工作目录就是上下文

```bash
cd /path/to/project
hermes
```

从错误目录启动 agent，会让相对路径、项目指令和工具动作都偏离目标。长会话要能恢复，重要结果要落到 Git 可见的文件里。

## CLI、TUI 和配置文件

交互界面适合探索，配置文件适合复现。能复用的行为放进配置或脚本，临时判断留在会话里。

## 交互工作和可复现工作不同

终端界面适合探索、恢复和日常会话。某个行为需要重复时，把它移到项目指令、profile 或小脚本中，而不是依赖某次聊天记忆。

| 需求 | 优先选择 |
| --- | --- |
| 探索仓库 | CLI 或 TUI 会话 |
| 重复同一行为 | Profile、context file 或脚本 |
| 恢复旧工作 | 命名会话和可见文件 |
| 给团队共享结果 | 提交过的产物和笔记 |

```bash
cd /path/to/project
hermes
```

## 相关页面

- [安装与版本基线](/zh/hermes-agent/installation/)
- [第一条可靠路径](/zh/hermes-agent/first-run/)
- [Provider 与模型配置](/zh/hermes-agent/providers-and-models/)
- [工具与工具集](/zh/hermes-agent/tools-and-toolsets/)

## 参考资料

- Cli: https://hermes-agent.nousresearch.com/docs/user-guide/cli
- Tui: https://hermes-agent.nousresearch.com/docs/user-guide/tui
- Sessions: https://hermes-agent.nousresearch.com/docs/user-guide/sessions
