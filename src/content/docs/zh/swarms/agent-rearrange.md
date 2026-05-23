---
title: "Swarms：AgentRearrange 与 flow 语法"
description: "Swarms 的AgentRearrange 与 flow 语法：包含来源链接、任务地图、取舍、坑点和更新基线的中文指南。"
---

# Swarms：AgentRearrange 与 flow 语法

这篇页面属于公开的 Swarms 主题指南。它面向需要落地 agent 框架的读者，重点不是复述 README，而是把公开资料整理成可执行的任务地图、决策清单和排错入口。

## 本页回答什么

- 搜索意图：Swarms AgentRearrange flow syntax。
- 核心问题：如何用 `->` 和 `,` 表达顺序与并行？
- 差异化角度：把 flow 当“轻量依赖 DSL”，给出可读性边界：复杂后转 GraphWorkflow。
- 研究基线：2026-05-22/23


## 事实基线

- Swarms 自称面向生产的企业级 multi-agent orchestration framework，覆盖单 agent 原语、多种 orchestration structures、CLI 工作流、部署指南和大量 examples。
- 研究时观察到的 PyPI 包为 `swarms` `12.0.0`，要求 Python `>=3.10,<4.0`，许可证为 Apache-2.0。
- 官方文档提供 `llms.txt` 和 `llms-full.txt`；索引列出 174 个页面，覆盖 agents、tools、memory、structured outputs、architectures、API reference、CLI、deployment、examples、FAQ 和 changelog。
- GitHub 目录树里 docs 路径约 198 个，examples 相关路径超过 1000 个，因此本站最有价值的工作是帮读者选对模式，而不是复制每个 API 页面。

当前公开资料基线如下：

| 字段 | 值 |
| --- | --- |
| 仓库 | `kyegomez/swarms` |
| 研究时观察到的包版本 | `12.0.0` |
| Python 要求 | `>=3.10,<4.0` |
| 许可证 | `Apache-2.0` |
| 官方文档 | https://docs.swarms.world/ |

## 读者任务地图

### 1. flow syntax

这一节用来回答本页背后的实际问题：如何用 `->` 和 `,` 表达顺序与并行？ 对 Swarms 来说，"flow syntax" 不应该停留在概念解释，而要写清输入、期望输出、验证信号和能证明该行为的来源。

检查点：

- 判断当前任务属于安装、使用、编排、部署、安全、排错还是对比。
- 每条命令、参数或 API 名称都要能回链官方文档，再视为稳定事实。
- 增加可选功能前，先写清什么算成功。
- provider 认证、模型行为、记忆或外部工具失败时，要保留回退路径。

### 2. sequential/concurrent mix

这一节用来回答本页背后的实际问题：如何用 `->` 和 `,` 表达顺序与并行？ 对 Swarms 来说，"sequential/concurrent mix" 不应该停留在概念解释，而要写清输入、期望输出、验证信号和能证明该行为的来源。

检查点：

- 判断当前任务属于安装、使用、编排、部署、安全、排错还是对比。
- 每条命令、参数或 API 名称都要能回链官方文档，再视为稳定事实。
- 增加可选功能前，先写清什么算成功。
- provider 认证、模型行为、记忆或外部工具失败时，要保留回退路径。

### 3. human-in-the-loop

这一节用来回答本页背后的实际问题：如何用 `->` 和 `,` 表达顺序与并行？ 对 Swarms 来说，"human-in-the-loop" 不应该停留在概念解释，而要写清输入、期望输出、验证信号和能证明该行为的来源。

检查点：

- 判断当前任务属于安装、使用、编排、部署、安全、排错还是对比。
- 每条命令、参数或 API 名称都要能回链官方文档，再视为稳定事实。
- 增加可选功能前，先写清什么算成功。
- provider 认证、模型行为、记忆或外部工具失败时，要保留回退路径。

### 4. validate_flow

这一节用来回答本页背后的实际问题：如何用 `->` 和 `,` 表达顺序与并行？ 对 Swarms 来说，"validate_flow" 不应该停留在概念解释，而要写清输入、期望输出、验证信号和能证明该行为的来源。

检查点：

- 判断当前任务属于安装、使用、编排、部署、安全、排错还是对比。
- 每条命令、参数或 API 名称都要能回链官方文档，再视为稳定事实。
- 增加可选功能前，先写清什么算成功。
- provider 认证、模型行为、记忆或外部工具失败时，要保留回退路径。

### 5. set_custom_flow

这一节用来回答本页背后的实际问题：如何用 `->` 和 `,` 表达顺序与并行？ 对 Swarms 来说，"set_custom_flow" 不应该停留在概念解释，而要写清输入、期望输出、验证信号和能证明该行为的来源。

检查点：

- 判断当前任务属于安装、使用、编排、部署、安全、排错还是对比。
- 每条命令、参数或 API 名称都要能回链官方文档，再视为稳定事实。
- 增加可选功能前，先写清什么算成功。
- provider 认证、模型行为、记忆或外部工具失败时，要保留回退路径。

### 6. batch/concurrent run

这一节用来回答本页背后的实际问题：如何用 `->` 和 `,` 表达顺序与并行？ 对 Swarms 来说，"batch/concurrent run" 不应该停留在概念解释，而要写清输入、期望输出、验证信号和能证明该行为的来源。

检查点：

- 判断当前任务属于安装、使用、编排、部署、安全、排错还是对比。
- 每条命令、参数或 API 名称都要能回链官方文档，再视为稳定事实。
- 增加可选功能前，先写清什么算成功。
- provider 认证、模型行为、记忆或外部工具失败时，要保留回退路径。

### 7. 反例

这一节用来回答本页背后的实际问题：如何用 `->` 和 `,` 表达顺序与并行？ 对 Swarms 来说，"反例" 不应该停留在概念解释，而要写清输入、期望输出、验证信号和能证明该行为的来源。

检查点：

- 判断当前任务属于安装、使用、编排、部署、安全、排错还是对比。
- 每条命令、参数或 API 名称都要能回链官方文档，再视为稳定事实。
- 增加可选功能前，先写清什么算成功。
- provider 认证、模型行为、记忆或外部工具失败时，要保留回退路径。

## 决策清单

- 先用最小形状证明价值。只有任务确实受益时，才加入长期状态、更多 agent 或后台自动化。
- 把能力问题和运营问题分开：框架能不能做、团队能不能验证、失败模式能不能被隔离。
- 把每个 provider、tool、memory store 和外部集成都当成需要显式配置与回滚的契约。

## 常见陷阱

- 照搬官方 quickstart，却没有定义自己任务的成功信号。
- 单 agent baseline 还不可衡量时，就先堆更多 agent。
- 没有命名和清理策略，就让记忆或持久状态无限积累。
- 还没判断输入和用户是否可信，就打开强权限工具。

## 实践清单

- 写清具体任务、期望输出形状和最低可接受证据。
- 先选最小执行模式；简单路径跑通后再增加并发或持久化。
- 把来源链接放在命令、参数和安全声明旁边，降低后续更新成本。
- 记录版本和研究日期，因为 agent 框架变化非常快。

## 本页来源需求

api/agent-rearrange、architectures/agent-rearrange、examples/agent_rearrange。

更新本页时，需要回到下面的上游链接核验命令、参数、版本号和安全声明。GitHub issues 适合发现症状，但事实基线应以官方文档、release、包元信息和源码为准。

## 相关页面

- [概览](/zh/swarms/)
- [为什么与何时选择](/zh/swarms/why-and-when/)
- [安装与环境配置](/zh/swarms/installation/)
- [快速开始：第一个 Agent 与 Swarm](/zh/swarms/quickstart/)
- [核心概念](/zh/swarms/core-concepts/)
- [Agent 配置地图](/zh/swarms/agent-configuration/)
- [Agent 工具与函数调用](/zh/swarms/agent-tools/)
- [记忆、上下文压缩与状态](/zh/swarms/memory-and-state/)

## 来源

- 代码仓库: https://github.com/kyegomez/swarms
- README: https://github.com/kyegomez/swarms#readme
- 官方文档: https://docs.swarms.world/
- 面向 LLM 的文档索引: https://docs.swarms.world/llms.txt
- 完整文档语料: https://docs.swarms.world/llms-full.txt
- PyPI 包: https://pypi.org/project/swarms/
- Swarms v12 changelog: https://docs.swarms.world/changelog/swarms-v12
- FAQ: https://docs.swarms.world/community/faq
- installation: https://docs.swarms.world/installation
- environment: https://docs.swarms.world/environment-setup
- quickstart: https://docs.swarms.world/quickstart
- agents: https://docs.swarms.world/concepts/agents
- swarms: https://docs.swarms.world/concepts/swarms
- workflows: https://docs.swarms.world/concepts/workflows
- creatingAgents: https://docs.swarms.world/agents/creating-agents
- agentConfig: https://docs.swarms.world/agents/agent-configuration
