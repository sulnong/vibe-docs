---
title: "Kanban 多 Agent Board"
description: "当聊天历史不足以承载任务状态时，用 Hermes Kanban 保存多 agent 协作状态。"
---

# Kanban 多 Agent Board

## Board 保存当前状态

这类能力只有在本地路径可靠后才应该加入。每个入口或任务都要有 owner、权限边界、输出形态、日志和停止方式。

| 关注点 | 问题 |
| --- | --- |
| 授权 | 谁能触发？ |
| 范围 | 能读写哪里？ |
| 输出 | 结果给谁？ |
| 停止 | 如何快速关闭？ |

## Board 保存当前共享状态

当多个会话或 agents 需要持久协作时，用 board。卡片应该说明要产出什么、谁负责下一步、如何检查完成。

| 卡片字段 | 好内容 |
| --- | --- |
| 标题 | 具体结果，不是宽泛主题。 |
| Owner | 一个负责推进的人或 agent。 |
| 状态 | 工作真实处于哪里。 |
| 验收 | 如何检查结果。 |

## 长推理放到别处

Board 不应该变成第二份聊天记录。决策放进项目文档或 issue，board 只聚焦当前工作。

## 相关页面

- [安装与版本基线](/zh/hermes-agent/installation/)
- [第一条可靠路径](/zh/hermes-agent/first-run/)
- [Provider 与模型配置](/zh/hermes-agent/providers-and-models/)
- [工具与工具集](/zh/hermes-agent/tools-and-toolsets/)

## 参考资料

- Kanban: https://hermes-agent.nousresearch.com/docs/user-guide/features/kanban
