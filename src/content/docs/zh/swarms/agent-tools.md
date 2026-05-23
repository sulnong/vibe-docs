---
title: "Swarms：Agent 工具与函数调用"
description: "Swarms 的Agent 工具与函数调用：包含来源链接、任务地图、取舍、坑点和更新基线的中文指南。"
---

# Swarms：Agent 工具与函数调用

这篇页面属于公开的 Swarms 主题指南。它面向需要落地 agent 框架的读者，重点不是复述 README，而是把公开资料整理成可执行的任务地图、决策清单和排错入口。

## 本页回答什么

- 搜索意图：Swarms tools、function calling、MCP tools。
- 核心问题：如何给 Agent 添加 Python 函数、外部 API、MCP 工具？
- 差异化角度：提供工具设计反例：无类型、无 docstring、返回自由文本、吞异常。
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

### 1. type hints/docstrings

这一节用来回答本页背后的实际问题：如何给 Agent 添加 Python 函数、外部 API、MCP 工具？ 对 Swarms 来说，"type hints/docstrings" 不应该停留在概念解释，而要写清输入、期望输出、验证信号和能证明该行为的来源。

检查点：

- 判断当前任务属于安装、使用、编排、部署、安全、排错还是对比。
- 每条命令、参数或 API 名称都要能回链官方文档，再视为稳定事实。
- 增加可选功能前，先写清什么算成功。
- provider 认证、模型行为、记忆或外部工具失败时，要保留回退路径。

### 2. multiple tools

这一节用来回答本页背后的实际问题：如何给 Agent 添加 Python 函数、外部 API、MCP 工具？ 对 Swarms 来说，"multiple tools" 不应该停留在概念解释，而要写清输入、期望输出、验证信号和能证明该行为的来源。

检查点：

- 判断当前任务属于安装、使用、编排、部署、安全、排错还是对比。
- 每条命令、参数或 API 名称都要能回链官方文档，再视为稳定事实。
- 增加可选功能前，先写清什么算成功。
- provider 认证、模型行为、记忆或外部工具失败时，要保留回退路径。

### 3. tool_choice

这一节用来回答本页背后的实际问题：如何给 Agent 添加 Python 函数、外部 API、MCP 工具？ 对 Swarms 来说，"tool_choice" 不应该停留在概念解释，而要写清输入、期望输出、验证信号和能证明该行为的来源。

检查点：

- 判断当前任务属于安装、使用、编排、部署、安全、排错还是对比。
- 每条命令、参数或 API 名称都要能回链官方文档，再视为稳定事实。
- 增加可选功能前，先写清什么算成功。
- provider 认证、模型行为、记忆或外部工具失败时，要保留回退路径。

### 4. stateful tools

这一节用来回答本页背后的实际问题：如何给 Agent 添加 Python 函数、外部 API、MCP 工具？ 对 Swarms 来说，"stateful tools" 不应该停留在概念解释，而要写清输入、期望输出、验证信号和能证明该行为的来源。

检查点：

- 判断当前任务属于安装、使用、编排、部署、安全、排错还是对比。
- 每条命令、参数或 API 名称都要能回链官方文档，再视为稳定事实。
- 增加可选功能前，先写清什么算成功。
- provider 认证、模型行为、记忆或外部工具失败时，要保留回退路径。

### 5. async tools

这一节用来回答本页背后的实际问题：如何给 Agent 添加 Python 函数、外部 API、MCP 工具？ 对 Swarms 来说，"async tools" 不应该停留在概念解释，而要写清输入、期望输出、验证信号和能证明该行为的来源。

检查点：

- 判断当前任务属于安装、使用、编排、部署、安全、排错还是对比。
- 每条命令、参数或 API 名称都要能回链官方文档，再视为稳定事实。
- 增加可选功能前，先写清什么算成功。
- provider 认证、模型行为、记忆或外部工具失败时，要保留回退路径。

### 6. BaseTool

这一节用来回答本页背后的实际问题：如何给 Agent 添加 Python 函数、外部 API、MCP 工具？ 对 Swarms 来说，"BaseTool" 不应该停留在概念解释，而要写清输入、期望输出、验证信号和能证明该行为的来源。

检查点：

- 判断当前任务属于安装、使用、编排、部署、安全、排错还是对比。
- 每条命令、参数或 API 名称都要能回链官方文档，再视为稳定事实。
- 增加可选功能前，先写清什么算成功。
- provider 认证、模型行为、记忆或外部工具失败时，要保留回退路径。

### 7. MCP config

这一节用来回答本页背后的实际问题：如何给 Agent 添加 Python 函数、外部 API、MCP 工具？ 对 Swarms 来说，"MCP config" 不应该停留在概念解释，而要写清输入、期望输出、验证信号和能证明该行为的来源。

检查点：

- 判断当前任务属于安装、使用、编排、部署、安全、排错还是对比。
- 每条命令、参数或 API 名称都要能回链官方文档，再视为稳定事实。
- 增加可选功能前，先写清什么算成功。
- provider 认证、模型行为、记忆或外部工具失败时，要保留回退路径。

### 8. error handling

这一节用来回答本页背后的实际问题：如何给 Agent 添加 Python 函数、外部 API、MCP 工具？ 对 Swarms 来说，"error handling" 不应该停留在概念解释，而要写清输入、期望输出、验证信号和能证明该行为的来源。

检查点：

- 判断当前任务属于安装、使用、编排、部署、安全、排错还是对比。
- 每条命令、参数或 API 名称都要能回链官方文档，再视为稳定事实。
- 增加可选功能前，先写清什么算成功。
- provider 认证、模型行为、记忆或外部工具失败时，要保留回退路径。

### 9. structured returns

这一节用来回答本页背后的实际问题：如何给 Agent 添加 Python 函数、外部 API、MCP 工具？ 对 Swarms 来说，"structured returns" 不应该停留在概念解释，而要写清输入、期望输出、验证信号和能证明该行为的来源。

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

agent-tools、concepts/tools、api/tools、examples/agent-with-tools、MCP pages。

更新本页时，需要回到下面的上游链接核验命令、参数、版本号和安全声明。GitHub issues 适合发现症状，但事实基线应以官方文档、release、包元信息和源码为准。

## 相关页面

- [概览](/zh/swarms/)
- [为什么与何时选择](/zh/swarms/why-and-when/)
- [安装与环境配置](/zh/swarms/installation/)
- [快速开始：第一个 Agent 与 Swarm](/zh/swarms/quickstart/)
- [核心概念](/zh/swarms/core-concepts/)
- [Agent 配置地图](/zh/swarms/agent-configuration/)
- [记忆、上下文压缩与状态](/zh/swarms/memory-and-state/)
- [Structured Outputs](/zh/swarms/structured-outputs/)

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
