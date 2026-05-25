---
title: "架构阅读路径"
description: "按 agent loop、provider runtime、prompt assembly、tools、sessions、gateway 和 storage 理解 Hermes 内部结构。"
---

# 架构阅读路径

读 Hermes 架构时，不要从类名开始。先从一次请求的路径开始：用户输入进入会话，系统组装上下文和 prompt，provider runtime 调模型，模型决定是否调用工具，工具结果回到 loop，最后状态被保存或发送到对应界面。

```text
input -> session/context -> prompt assembly -> provider runtime
      -> agent loop -> tools -> result -> storage/gateway
```

这个路径能帮你判断一个问题应该去哪一层查。

## Agent loop 是核心行为

Agent loop 决定 Hermes 如何在“模型回复”和“工具调用”之间往返。一个复杂任务通常不是一次模型调用，而是一串循环：读文件、思考、调用工具、观察结果、继续下一步。

排查时要问：

- 模型是否拿到了正确上下文。
- 工具调用是否符合 schema。
- 工具结果是否回到了下一轮 prompt。
- loop 是否有停止条件、预算或确认点。
- 最终答案是否能追溯到中间步骤。

如果最终输出错了，不一定是最后一轮错。可能是早期工具结果、上下文压缩或 prompt assembly 已经引入偏差。

## Provider runtime 决定模型路径

Provider runtime 负责解析 provider、模型、凭据、API 模式、fallback 和辅助模型。这里的问题常表现为：

- 选错模型。
- 鉴权失败。
- fallback 悄悄生效。
- 辅助任务走了昂贵模型。
- OpenAI-compatible endpoint 的能力和配置不匹配。

所以 provider 配置不是外围设置，而是架构的一部分。

## Prompt assembly 决定 agent “知道什么”

Hermes 会把系统说明、项目 context、用户输入、引用内容、memory、session state、tool 描述等组装给模型。这里最容易出现两类问题：

- 上下文太少，模型不知道关键约束。
- 上下文太多或太脏，模型被旧假设、私有过程或无关内容带偏。

这也是为什么 context files、memory 和 skills 要分工清楚。它们最终都会影响 prompt assembly。

## Tools runtime 是副作用层

Tools runtime 把模型意图变成行动：读写文件、执行命令、浏览网页、调用外部工具、连接 MCP、生成媒体等。架构上要重点看：

- 工具 schema 是否明确。
- 权限和 toolset 如何过滤。
- 错误如何返回给 agent。
- 高风险动作是否有审批。
- 日志是否能还原调用过程。

工具层的 bug 往往不像“回答错了”，而是“做错了事”。这也是安全模型必须靠权限和日志，而不是靠模型自觉。

## Gateway 和 automation 改变入口

CLI 是本地同步入口。Gateway、cron、webhook、API server、Kanban 和 delegation 会引入更多入口和更多状态。它们的架构重点是：

- 身份和授权。
- session 路由。
- 长期进程的配置刷新。
- 日志和错误投递。
- 多 agent 状态如何保存和恢复。

远程入口的问题常常不是模型质量，而是“这条消息进了哪个 session”“这个用户为什么能触发这个工具”“后台进程是否加载了旧配置”。

## 按症状找层

| 症状 | 先看层 |
| --- | --- |
| 命令启动不了 | 安装、CLI launcher、Python 环境。 |
| 选了模型但调用失败 | Provider runtime、凭据、endpoint。 |
| 总是忽略项目规则 | Prompt assembly、context files。 |
| 工具参数错 | Tools runtime、schema、模型工具能力。 |
| Gateway 串会话 | Gateway internals、session routing。 |
| 长会话后质量下降 | Context compression、session storage、memory。 |

## 相关页面

- [Provider 与模型配置](/zh/hermes/providers-and-models/)
- [Context Files](/zh/hermes/context-files/)
- [工具与工具集](/zh/hermes/tools-and-toolsets/)
- [排错路径](/zh/hermes/troubleshooting/)

## 参考资料

- Architecture：https://hermes-agent.nousresearch.com/docs/developer-guide/architecture
- Agent Loop：https://hermes-agent.nousresearch.com/docs/developer-guide/agent-loop
- Prompt Assembly：https://hermes-agent.nousresearch.com/docs/developer-guide/prompt-assembly
- Provider Runtime：https://hermes-agent.nousresearch.com/docs/developer-guide/provider-runtime
- Gateway Internals：https://hermes-agent.nousresearch.com/docs/developer-guide/gateway-internals
