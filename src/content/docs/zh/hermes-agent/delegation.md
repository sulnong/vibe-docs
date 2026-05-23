---
title: "Subagent 委派"
description: "当任务独立、有边界、可审查时，用 Hermes 子 agent 做并行工作。"
---

# Subagent 委派

## 并行工作需要所有权

这类能力只有在本地路径可靠后才应该加入。每个入口或任务都要有 owner、权限边界、输出形态、日志和停止方式。

| 关注点 | 问题 |
| --- | --- |
| 授权 | 谁能触发？ |
| 范围 | 能读写哪里？ |
| 输出 | 结果给谁？ |
| 停止 | 如何快速关闭？ |

## 只委派可拆分工作

任务独立且可复核时，委派有帮助。任务模糊、耦合紧，或很可能编辑同一批文件时，委派会拖慢。

| 适合委派的任务 | 为什么可行 |
| --- | --- |
| 阅读一个子系统并返回文件路径 | 输出有边界。 |
| 在一个目录实现一个 provider | 所有权清楚。 |
| 复核已完成改动 | 可以并行运行。 |
| 比较两个选项 | 答案可以检查。 |

```text
You own src/providers/. Add support for one provider. Do not modify CLI files. Return changed paths, assumptions, and verification output.
```

## 相关页面

- [安装与版本基线](/zh/hermes-agent/installation/)
- [第一条可靠路径](/zh/hermes-agent/first-run/)
- [Provider 与模型配置](/zh/hermes-agent/providers-and-models/)
- [工具与工具集](/zh/hermes-agent/tools-and-toolsets/)

## 参考资料

- Delegation: https://hermes-agent.nousresearch.com/docs/user-guide/features/delegation
