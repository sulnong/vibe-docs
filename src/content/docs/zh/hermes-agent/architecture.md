---
title: "架构阅读路径"
description: "按子系统阅读 Hermes 内部结构：agent loop、provider runtime、prompt assembly、tools、session storage、gateway 和 CLI。"
---

# 架构阅读路径

## 从数据流开始

```text
agent loop -> provider -> prompt -> tools -> session
```

先画输入、输出和依赖，再选择类或架构。结构越复杂，越要保存中间输出、route decisions、成本和耗时。

| 形态 | 适合场景 |
| --- | --- |
| 直线 | 每一步依赖上一步。 |
| 并行 | 多个角色独立处理同一输入。 |
| 图 | 有混合依赖和汇合点。 |
| 路由 | 不同任务需要不同 workflow。 |

## 按行为反推架构

先画输入、输出和依赖，再选择架构。如果箭头是一条直线，sequence 就够。如果分支之后汇合，用 graph。如果不同任务类型需要不同 workflow，用 routing。

```text
agent loop -> provider runtime -> prompt assembly -> tools -> session storage
```

| 形态 | 适合场景 |
| --- | --- |
| 直线 | 每一步依赖上一步输出。 |
| 并行 | 多个角色能独立工作。 |
| 图 | 依赖会分叉再汇合。 |
| 路由 | 第一步要决定运行哪个 workflow。 |

## 保留中间输出

复杂 agent 系统需要能检查原始输出。只有最终答案通常无法解释哪个角色引入了错误假设。

## 相关页面

- [安装与版本基线](/zh/hermes-agent/installation/)
- [第一条可靠路径](/zh/hermes-agent/first-run/)
- [Provider 与模型配置](/zh/hermes-agent/providers-and-models/)
- [工具与工具集](/zh/hermes-agent/tools-and-toolsets/)

## 参考资料

- Architecture: https://hermes-agent.nousresearch.com/docs/developer-guide/architecture
