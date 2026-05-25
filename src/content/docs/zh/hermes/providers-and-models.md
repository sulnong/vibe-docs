---
title: "Provider 与模型配置"
description: "为 Hermes 选择 provider、模型、鉴权方式、fallback 和辅助模型，并把成本与失败行为写清楚。"
---

# Provider 与模型配置

Hermes 的体验很大程度取决于模型路径。安装没问题但回复很慢、工具调用质量差、上下文经常爆掉、成本突然升高，很多时候不是 Hermes 本身的问题，而是 provider、模型和配置没有被当成系统设计的一部分。

## 先稳定一条主路径

第一轮只选一个 provider 和一个主模型：

```bash
hermes model
```

不要同时打开 fallback、routing、多个 OAuth、多个本地 endpoint。这样做看起来灵活，实际会让失败难以定位。先回答四个问题：

| 问题 | 记录内容 |
| --- | --- |
| 谁提供模型 | OpenRouter、Nous Portal、OpenAI、Anthropic、本地 OpenAI-compatible endpoint 等。 |
| 用哪个模型 | 模型名、上下文长度、是否支持你需要的能力。 |
| 怎么鉴权 | API key、OAuth、环境变量、配置文件或平台凭据。 |
| 成本怎么算 | 按 token、订阅、额度、网关费用或本地算力。 |

当这条主路径完成了 [第一条可靠路径](/zh/hermes/first-run/) 中的只读和临时写入，再考虑高级配置。

## Provider 不是只影响价格

Provider 会影响多个层面：

- 模型质量和工具调用稳定性。
- 上下文长度和长会话压缩压力。
- 延迟、限流和失败重试体验。
- OAuth 或 API key 的维护方式。
- browser、vision、TTS、image、web extraction 等辅助任务是否走同一模型。

如果团队里有人说“Hermes 不稳定”，先确认他们是不是用了同一个 provider 和同一个模型。不同模型的行为差异可能比 Hermes 版本差异还大。

## 配置要能被人读懂

无论使用交互向导还是手写配置，都建议在项目文档里留一个短记录：

```text
Hermes provider baseline
- Main provider:
- Main model:
- Auth source:
- Auxiliary model strategy:
- Fallback:
- Last verified:
```

不要把 key 写进文档或仓库。写“key 来自哪里”和“谁有权限轮换”就够。

## 什么时候加 fallback

Fallback 适合提升可用性，但也会隐藏错误。比如主 provider 鉴权坏了，fallback 让会话继续跑，最后你看到的是“质量变差”而不是“主路径已失效”。

加 fallback 前，先定义：

| 决策 | 建议 |
| --- | --- |
| 触发条件 | 明确是超时、限流、鉴权失败还是模型不可用。 |
| 可见性 | 日志或输出里要能看到是否发生 fallback。 |
| 成本边界 | fallback 模型可能更贵。 |
| 行为差异 | 不同模型对工具、格式和长上下文的处理可能不同。 |

如果任务需要稳定可审计输出，不要让 fallback 悄悄改变模型。

## 辅助模型也要算成本

Hermes 的一些功能会使用辅助模型，例如网页摘要、图像理解、浏览器截图分析、会话标题、上下文压缩等。默认策略如果走主模型，昂贵模型会让这些旁路任务也变贵。

更稳的做法是：主模型用于核心推理，便宜快速的模型用于辅助任务；但只有当你能观察辅助任务质量时再分流。过早优化模型组合，会增加排错难度。

## 本地模型和 OpenAI-compatible endpoint

Hermes 支持 OpenAI-compatible endpoint，这对本地模型、自托管网关和公司内部模型服务很有用。使用前先在 agent 外确认：

- endpoint 可访问。
- 模型名正确。
- 上下文长度配置真实。
- 工具调用或 function calling 能力符合预期。
- 网络超时和重试策略不会让 Hermes 长时间卡住。

本地模型适合隐私、成本和离线需求；但如果模型工具能力弱，Hermes 的整体体验会明显下降。

## 相关页面

- [第一条可靠路径](/zh/hermes/first-run/)
- [工具与工具集](/zh/hermes/tools-and-toolsets/)
- [安全模型](/zh/hermes/security-model/)
- [排错路径](/zh/hermes/troubleshooting/)

## 参考资料

- Configuration：https://hermes-agent.nousresearch.com/docs/user-guide/configuration
- Configuring Models：https://hermes-agent.nousresearch.com/docs/user-guide/configuring-models
- Providers：https://hermes-agent.nousresearch.com/docs/integrations/providers
