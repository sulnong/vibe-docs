---
title: "工具与工具集"
description: "把 Hermes 工具和工具集理解成带权限边界的能力，而不只是方便命令。"
---

# 工具与工具集

## 工具是权限边界

工具会把模型输出变成行动。每个工具都应该说明能接收什么输入、能修改什么、如何失败、如何单独测试。

| 工具类型 | 默认边界 |
| --- | --- |
| 只读查询 | 通常先开放。 |
| 文件写入 | 限制目录并保留 diff。 |
| Shell 命令 | 危险命令需要确认。 |
| 外部 API | 需要超时、预算和日志。 |

```text
先检查仓库并说明计划，不要修改文件。需要写入或运行破坏性命令时先停下。
```

## 工具需要契约

工具不是小助手，而是带输入、输出、副作用和失败方式的能力。能在 agent 外单独测试时，先单独测试，再让 agent 调用。

| 工具能做什么 | 要加的边界 |
| --- | --- |
| 读文件 | 限制工作目录。 |
| 写文件 | 提交前看 diff。 |
| 运行命令 | 破坏性命令要确认。 |
| 调用 API | 加超时、预算和日志。 |
| 发布或发送 | 保留人工确认。 |

```text
先检查仓库并提出改动方案，不要修改文件。写入或破坏性命令前停止。
```

## 相关页面

- [安装与版本基线](/zh/hermes-agent/installation/)
- [第一条可靠路径](/zh/hermes-agent/first-run/)
- [Provider 与模型配置](/zh/hermes-agent/providers-and-models/)
- [Skills 系统](/zh/hermes-agent/skills/)

## 参考资料

- Tools: https://hermes-agent.nousresearch.com/docs/user-guide/features/tools
- Security: https://hermes-agent.nousresearch.com/docs/user-guide/security
