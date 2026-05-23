---
title: "Provider 与模型配置"
description: "配置 Hermes provider、密钥、模型、fallback 和成本边界，同时保持当前模型路径清楚可见。"
---

# Provider 与模型配置

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

- [安装与版本基线](/zh/hermes-agent/installation/)
- [第一条可靠路径](/zh/hermes-agent/first-run/)
- [工具与工具集](/zh/hermes-agent/tools-and-toolsets/)
- [Skills 系统](/zh/hermes-agent/skills/)

## 参考资料

- Configuration: https://hermes-agent.nousresearch.com/docs/user-guide/configuration
- Models: https://hermes-agent.nousresearch.com/docs/user-guide/configuring-models
