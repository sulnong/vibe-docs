---
title: "Swarms：记忆、上下文压缩与状态"
description: "Swarms 的记忆、上下文压缩与状态：包含来源链接、任务地图、取舍、坑点和更新基线的中文指南。"
---

# Swarms：记忆、上下文压缩与状态

这篇页面属于公开的 Swarms 主题指南。它面向需要落地 agent 框架的读者，重点不是复述 README，而是把公开资料整理成可执行的任务地图、决策清单和排错入口。

## 本页回答什么

- 搜索意图：Swarms persistent_memory、MEMORY.md、context compressor。
- 核心问题：Swarms 如何跨进程保留 agent 历史，如何避免上下文爆掉？
- 差异化角度：强调 `agent_name` 是持久记忆 key，命名错误会造成状态串线。
- 研究基线：2026-05-22/23

## 编辑备注

- 持久记忆以 `agent_name` 为 key。故意复用名字可以恢复状态；意外复用名字会污染后续运行。
- Swarms v12 把磁盘记忆和上下文压缩变成关键行为变化。

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

### 1. `persistent_memory`

这一节用来回答本页背后的实际问题：Swarms 如何跨进程保留 agent 历史，如何避免上下文爆掉？ 对 Swarms 来说，"`persistent_memory`" 不应该停留在概念解释，而要写清输入、期望输出、验证信号和能证明该行为的来源。

检查点：

- 判断当前任务属于安装、使用、编排、部署、安全、排错还是对比。
- 每条命令、参数或 API 名称都要能回链官方文档，再视为稳定事实。
- 增加可选功能前，先写清什么算成功。
- provider 认证、模型行为、记忆或外部工具失败时，要保留回退路径。

### 2. workspace layout

这一节用来回答本页背后的实际问题：Swarms 如何跨进程保留 agent 历史，如何避免上下文爆掉？ 对 Swarms 来说，"workspace layout" 不应该停留在概念解释，而要写清输入、期望输出、验证信号和能证明该行为的来源。

检查点：

- 判断当前任务属于安装、使用、编排、部署、安全、排错还是对比。
- 每条命令、参数或 API 名称都要能回链官方文档，再视为稳定事实。
- 增加可选功能前，先写清什么算成功。
- provider 认证、模型行为、记忆或外部工具失败时，要保留回退路径。

### 3. MEMORY.md

这一节用来回答本页背后的实际问题：Swarms 如何跨进程保留 agent 历史，如何避免上下文爆掉？ 对 Swarms 来说，"MEMORY.md" 不应该停留在概念解释，而要写清输入、期望输出、验证信号和能证明该行为的来源。

检查点：

- 判断当前任务属于安装、使用、编排、部署、安全、排错还是对比。
- 每条命令、参数或 API 名称都要能回链官方文档，再视为稳定事实。
- 增加可选功能前，先写清什么算成功。
- provider 认证、模型行为、记忆或外部工具失败时，要保留回退路径。

### 4. archive

这一节用来回答本页背后的实际问题：Swarms 如何跨进程保留 agent 历史，如何避免上下文爆掉？ 对 Swarms 来说，"archive" 不应该停留在概念解释，而要写清输入、期望输出、验证信号和能证明该行为的来源。

检查点：

- 判断当前任务属于安装、使用、编排、部署、安全、排错还是对比。
- 每条命令、参数或 API 名称都要能回链官方文档，再视为稳定事实。
- 增加可选功能前，先写清什么算成功。
- provider 认证、模型行为、记忆或外部工具失败时，要保留回退路径。

### 5. Conversation.compact

这一节用来回答本页背后的实际问题：Swarms 如何跨进程保留 agent 历史，如何避免上下文爆掉？ 对 Swarms 来说，"Conversation.compact" 不应该停留在概念解释，而要写清输入、期望输出、验证信号和能证明该行为的来源。

检查点：

- 判断当前任务属于安装、使用、编排、部署、安全、排错还是对比。
- 每条命令、参数或 API 名称都要能回链官方文档，再视为稳定事实。
- 增加可选功能前，先写清什么算成功。
- provider 认证、模型行为、记忆或外部工具失败时，要保留回退路径。

### 6. ContextCompressor

这一节用来回答本页背后的实际问题：Swarms 如何跨进程保留 agent 历史，如何避免上下文爆掉？ 对 Swarms 来说，"ContextCompressor" 不应该停留在概念解释，而要写清输入、期望输出、验证信号和能证明该行为的来源。

检查点：

- 判断当前任务属于安装、使用、编排、部署、安全、排错还是对比。
- 每条命令、参数或 API 名称都要能回链官方文档，再视为稳定事实。
- 增加可选功能前，先写清什么算成功。
- provider 认证、模型行为、记忆或外部工具失败时，要保留回退路径。

### 7. RAG vs agent memory

这一节用来回答本页背后的实际问题：Swarms 如何跨进程保留 agent 历史，如何避免上下文爆掉？ 对 Swarms 来说，"RAG vs agent memory" 不应该停留在概念解释，而要写清输入、期望输出、验证信号和能证明该行为的来源。

检查点：

- 判断当前任务属于安装、使用、编排、部署、安全、排错还是对比。
- 每条命令、参数或 API 名称都要能回链官方文档，再视为稳定事实。
- 增加可选功能前，先写清什么算成功。
- provider 认证、模型行为、记忆或外部工具失败时，要保留回退路径。

### 8. disable memory

这一节用来回答本页背后的实际问题：Swarms 如何跨进程保留 agent 历史，如何避免上下文爆掉？ 对 Swarms 来说，"disable memory" 不应该停留在概念解释，而要写清输入、期望输出、验证信号和能证明该行为的来源。

检查点：

- 判断当前任务属于安装、使用、编排、部署、安全、排错还是对比。
- 每条命令、参数或 API 名称都要能回链官方文档，再视为稳定事实。
- 增加可选功能前，先写清什么算成功。
- provider 认证、模型行为、记忆或外部工具失败时，要保留回退路径。

### 9. inspection

这一节用来回答本页背后的实际问题：Swarms 如何跨进程保留 agent 历史，如何避免上下文爆掉？ 对 Swarms 来说，"inspection" 不应该停留在概念解释，而要写清输入、期望输出、验证信号和能证明该行为的来源。

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

agent-memory、v12 changelog、conversation API、examples persistent-memory/context-compression。

更新本页时，需要回到下面的上游链接核验命令、参数、版本号和安全声明。GitHub issues 适合发现症状，但事实基线应以官方文档、release、包元信息和源码为准。

## 相关页面

- [概览](/zh/swarms/)
- [为什么与何时选择](/zh/swarms/why-and-when/)
- [安装与环境配置](/zh/swarms/installation/)
- [快速开始：第一个 Agent 与 Swarm](/zh/swarms/quickstart/)
- [核心概念](/zh/swarms/core-concepts/)
- [Agent 配置地图](/zh/swarms/agent-configuration/)
- [Agent 工具与函数调用](/zh/swarms/agent-tools/)
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
