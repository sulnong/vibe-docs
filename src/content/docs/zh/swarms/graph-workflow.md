---
title: "GraphWorkflow"
description: "当任务有 DAG 形依赖、混合并行和明确执行边时，使用 GraphWorkflow。"
---

# GraphWorkflow

## 从数据流开始

```text
collect_docs -> extract_facts -> synthesize
collect_metrics -> analyze_metrics -> synthesize
```

先画输入、输出和依赖，再选择类或架构。结构越复杂，越要保存中间输出、route decisions、成本和耗时。

| 形态 | 适合场景 |
| --- | --- |
| 直线 | 每一步依赖上一步。 |
| 并行 | 多个角色独立处理同一输入。 |
| 图 | 有混合依赖和汇合点。 |
| 路由 | 不同任务需要不同 workflow。 |

## 显式写出依赖边

先画输入、输出和依赖，再选择架构。如果箭头是一条直线，sequence 就够。如果分支之后汇合，用 graph。如果不同任务类型需要不同 workflow，用 routing。

```text
collect_docs -> extract_facts -> synthesize
collect_metrics -> analyze_metrics -> synthesize
synthesize -> final_review
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

- [安装与环境配置](/zh/swarms/installation/)
- [快速开始](/zh/swarms/quickstart/)
- [核心概念](/zh/swarms/core-concepts/)
- [架构总览](/zh/swarms/architectures/)

## 参考资料

- Graph: https://docs.swarms.world/api/graph-workflow.md
