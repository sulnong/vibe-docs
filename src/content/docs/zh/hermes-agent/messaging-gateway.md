---
title: "消息平台 Gateway"
description: "把 Hermes 接入聊天平台，同时明确授权、会话、密钥和恢复路径。"
---

# 消息平台 Gateway

## 远程入口会改变风险

这类能力只有在本地路径可靠后才应该加入。每个入口或任务都要有 owner、权限边界、输出形态、日志和停止方式。

| 关注点 | 问题 |
| --- | --- |
| 授权 | 谁能触发？ |
| 范围 | 能读写哪里？ |
| 输出 | 结果给谁？ |
| 停止 | 如何快速关闭？ |

## 远程入口会改变风险模型

本地终端 agent 只被键盘前的人触发。消息 gateway 可能被频道、团队、bot 或 webhook 触发。授权和会话路由会变成产品的一部分。

| 关注点 | 要回答的问题 |
| --- | --- |
| 授权用户 | 谁能和 agent 对话？ |
| 会话路由 | 哪段对话拥有状态？ |
| 密钥 | Bot token 存在哪里，如何轮换？ |
| 工具范围 | 远程用户能否触发文件或命令动作？ |
| 关闭 | 如何快速禁用 gateway？ |

## 先做只读价值

只能回答状态问题的 bot，比能编辑仓库或调用生产 API 的 bot 安全很多。修改能力要在日志、所有权和复核清楚后再加。

## 相关页面

- [安装与版本基线](/zh/hermes-agent/installation/)
- [第一条可靠路径](/zh/hermes-agent/first-run/)
- [Provider 与模型配置](/zh/hermes-agent/providers-and-models/)
- [工具与工具集](/zh/hermes-agent/tools-and-toolsets/)

## 参考资料

- Official docs: https://hermes-agent.nousresearch.com/docs/
- Security: https://hermes-agent.nousresearch.com/docs/user-guide/security
