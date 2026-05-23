---
title: "Reasoning Agents"
description: "当普通单次输出不够可靠，且改进可以被评估时，再使用 reasoning patterns。"
---

# Reasoning Agents

## 只有能评估收益时再加推理层

Reflection、judge、多候选和 synthesis 会增加成本和延迟。先准备小评估集，证明它改善正确率、一致性或复核时间。

## 推理层要证明值得

Reflection、judge、debate 和多候选 synthesis 能改善困难任务，但会增加延迟和成本。只有收益能衡量时再使用。

| 模式 | 适合场景 |
| --- | --- |
| Self-review | 一个草稿需要质量检查。 |
| Judge agent | 多个输出需要比较。 |
| Role debate | 任务受益于相反观点。 |
| Synthesis | 独立发现需要汇总成最终答案。 |

## 扩展前先评估

保留一组小 prompts 和预期质量。如果推理模式没有改善正确性、一致性或复核时间，就用更简单的 agent。

## 相关页面

- [安装与环境配置](/zh/swarms/installation/)
- [快速开始](/zh/swarms/quickstart/)
- [核心概念](/zh/swarms/core-concepts/)
- [架构总览](/zh/swarms/architectures/)

## 参考资料

- Agent: https://docs.swarms.world/api/agent.md
- Workflows: https://docs.swarms.world/concepts/workflows.md
