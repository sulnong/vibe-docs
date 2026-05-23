---
title: "Agent 配置地图"
description: "配置 Swarms Agent 参数，让模型、prompt、loop、tools、memory 和输出行为保持可见。"
---

# Agent 配置地图

## 先分清构件

| 构件 | 控制什么 |
| --- | --- |
| Agent | 角色、prompt、模型、loop 和输出。 |
| Tool | 可调用能力和副作用。 |
| Memory | 跨轮次状态。 |
| Workflow | agents 的运行顺序和组合。 |

配置要让模型、loop、工具和输出预期可见。看不见的默认值会让成本和行为难以预测。

## 把构件分开

Agent、tool、memory、structured output 和 workflow 的失败方式不同。每个构件都能单独测试时，排错会简单很多。

| 构件 | 控制什么 |
| --- | --- |
| Agent | 角色、prompt、模型、loop 和输出。 |
| Tool | 可调用能力和副作用。 |
| Memory | 跨轮次或运行的状态。 |
| Structured output | 下游代码期待的形态。 |
| Workflow | Agents 如何运行和组合。 |

## 配置要可读

后来的人应该不需要追隐藏默认值，就能看出模型、loop 限制、工具权限、输出预期和 owner。

## 相关页面

- [安装与环境配置](/zh/swarms/installation/)
- [快速开始](/zh/swarms/quickstart/)
- [核心概念](/zh/swarms/core-concepts/)
- [架构总览](/zh/swarms/architectures/)

## 参考资料

- Agent: https://docs.swarms.world/api/agent.md
