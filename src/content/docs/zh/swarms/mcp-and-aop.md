---
title: "MCP 与 AOP"
description: "当 Swarms agents 需要成为可发现工具、服务或分布式编排单元时，再使用 MCP 和 AOP。"
---

# MCP 与 AOP

## 先明确外部契约

MCP、AOP 和 API server 会把本地 agent 能力暴露给其他系统。上线前先写清认证、工具列表、输入 schema、限流、日志和失败处理。

| 问题 | 原因 |
| --- | --- |
| 谁调用？ | 决定鉴权。 |
| 调用什么？ | 决定工具过滤。 |
| 失败怎么办？ | 决定重试和回滚。 |
| 如何观察？ | 决定日志和 tracing。 |

## 外部接口需要显式契约

MCP server、AOP service 和 API server 都会让其他系统调用 agent 行为。认真使用前，先定义鉴权、工具列表、输入 schema、限流、日志和失败处理。

| 问题 | 设计结果 |
| --- | --- |
| 谁调用？ | 鉴权和授权。 |
| 能调用什么？ | 工具过滤和 schema。 |
| 能跑多久？ | 超时和队列。 |
| 失败怎么办？ | 重试、回滚和用户可见错误。 |
| 如何观察？ | 日志、trace 和指标。 |

## 包装已知本地工作流

不要把自己本地都跑不明白的行为暴露成接口。网络入口应该包装权限和恢复路径已经清楚的工作流。

## 相关页面

- [安装与环境配置](/zh/swarms/installation/)
- [快速开始](/zh/swarms/quickstart/)
- [核心概念](/zh/swarms/core-concepts/)
- [架构总览](/zh/swarms/architectures/)

## 参考资料

- Mcp: https://docs.swarms.world/integrations/mcp.md
- Aop: https://docs.swarms.world/api/aop.md
