---
title: "扩展与部署"
description: "先测量瓶颈，再扩展 Swarms：模型调用、工具调用、队列、数据访问或 synthesis。"
---

# 扩展与部署

## 生产系统仍然是生产系统

| 控制 | 作用 |
| --- | --- |
| 日志 | 理解 prompts、tools、errors 和成本。 |
| 超时 | 停止卡住的调用。 |
| 重试 | 处理瞬时失败。 |
| 预算 | 限制花费和延迟。 |
| 回滚 | 回到上一个安全行为。 |

先测量瓶颈，再扩展：模型、工具、数据访问、队列和 synthesis 的限制完全不同。

## 生产 agent 系统仍然是生产系统

框架负责部分编排，不负责全部运维。信任自治工作前，要补上日志、超时、重试、预算、评估和回滚。

| 控制 | 目的 |
| --- | --- |
| 日志 | 理解 prompts、routes、tool calls、errors 和成本。 |
| 超时 | 停止卡住的调用和工具。 |
| 重试 | 处理 provider 或网络瞬时失败。 |
| 预算 | 限制花费和延迟。 |
| 回滚 | 回到上一个安全行为。 |

## 扩展已测量的瓶颈

模型调用、工具调用、数据访问、队列和 synthesis 的瓶颈完全不同。先测量，再决定并行、缓存、队列或简化。

## 相关页面

- [安装与环境配置](/zh/swarms/installation/)
- [快速开始](/zh/swarms/quickstart/)
- [核心概念](/zh/swarms/core-concepts/)
- [架构总览](/zh/swarms/architectures/)

## 参考资料

- Production: https://docs.swarms.world/deployment/production-best-practices.md
- Monitoring: https://docs.swarms.world/deployment/monitoring.md
