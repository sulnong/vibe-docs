---
title: "为什么与何时选择 Swarms"
description: "判断什么时候 Swarms 合适，什么时候单次模型调用、脚本、LangGraph、CrewAI 或 AutoGen 风格框架更简单。"
---

# 为什么与何时选择 Swarms

## 什么时候适合

- 任务需要多轮上下文、工具或文件。
- 工作会重复出现，复用流程能节省解释。
- 输出可以检查，而不是只靠模型语气。
- 失败后能停止、重试、回滚或交给人处理。

## 保持更小的情况

如果一次模型调用、短脚本或普通 CLI 已经更容易检查，就不要为了显得高级而引入 agent 系统。多 agent 或长期 agent 的价值应该来自更清楚的数据流、更好的复用或更可靠的复核。

| 需求 | 起点 |
| --- | --- |
| 一次回答 | 普通模型调用。 |
| 一个角色加工具 | 单个 Swarms Agent。 |
| 有序步骤 | SequentialWorkflow。 |
| 独立并行 | 委派或多个隔离任务。 |
| 无人值守 | 先加日志、限制和关闭路径。 |

## 按操作模型选择

Swarms 最适合 Python 代码需要显式 agent 对象和编排选择的场景。如果一次模型调用够用，就保持简单。如果核心需求是图状状态机，也应该同时比较 graph-first 框架。

| 适合使用 | 先停一下 |
| --- | --- |
| 多个角色能改善结果 | 一个 Agent 就能完成 |
| 并行或路由是真需求 | 复杂只存在于图上 |
| 需要 Python 层控制 | 真实需求是托管产品流程 |

## 实用测试

采用框架前，先写清输入、预期输出、复核步骤和失败处理。如果这些说不清，框架选择可能还不是当前真正的问题。

## 相关页面

- [安装与环境配置](/zh/swarms/installation/)
- [快速开始](/zh/swarms/quickstart/)
- [核心概念](/zh/swarms/core-concepts/)
- [架构总览](/zh/swarms/architectures/)

## 参考资料

- Quickstart: https://docs.swarms.world/quickstart.md
- Workflows: https://docs.swarms.world/concepts/workflows.md
