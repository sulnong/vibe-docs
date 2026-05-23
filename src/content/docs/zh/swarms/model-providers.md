---
title: "Model Providers"
description: "为 Swarms 配置 model providers，同时保持模型选择、key、成本和 fallback 行为可见。"
---

# Model Providers

## 先稳定一个 provider

Provider 选择影响授权、成本、延迟、上下文长度和工具行为。先让一个 provider 和一个模型稳定，再加入 fallback、routing 或更复杂的模型组合。

| 记录项 | 作用 |
| --- | --- |
| Provider | 解释授权和计费。 |
| 模型 | 解释质量、上下文和成本。 |
| Key 来源 | 解释部署如何获得凭据。 |
| Fallback | 解释失败时会发生什么。 |

## Provider 配置是设计的一部分

模型选择会影响成本、延迟、上下文长度、可靠性和输出风格。配置或部署笔记里要能看出当前使用哪个 provider 和模型。

| 决策 | 记录原因 |
| --- | --- |
| Provider | 解释凭据、计费和限流。 |
| 模型 | 解释质量、上下文和成本。 |
| Fallback | 会改变失败行为，也可能隐藏主错误。 |
| 评估 prompt | 以后比较模型变化时有基准。 |

```bash
# 仅示例：请使用所选 provider 要求的变量名。
export OPENAI_API_KEY=...

```

## 相关页面

- [安装与环境配置](/zh/swarms/installation/)
- [快速开始](/zh/swarms/quickstart/)
- [核心概念](/zh/swarms/core-concepts/)
- [架构总览](/zh/swarms/architectures/)

## 参考资料

- Providers: https://docs.swarms.world/integrations/model-providers.md
