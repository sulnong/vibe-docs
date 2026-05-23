---
title: "结构化输出"
description: "当下游代码需要可靠 agent 响应时，使用 JSON 或类型化输出。"
---

# 结构化输出

## 先定义 schema

```json
{"risk":"missing rollback path","severity":"high","evidence":"deployment notes mention no revert command"}
```

结构化输出的价值在于校验，不在于看起来整齐。字段缺失、类型错误和枚举越界都应该能被拒绝或重试。

## 当代码读取答案时使用结构

如果是人读，普通说明可能足够。如果是另一个程序消费结果，先定义 schema，再校验结果。

```json
{"risk":"missing rollback path","severity":"high","evidence":"deployment notes mention no revert command"}
```

| 失败 | 处理方式 |
| --- | --- |
| 字段缺失 | 拒绝、重试或交给复核。 |
| 类型错误 | 使用前校验。 |
| 值含糊 | 使用枚举或更严格 schema。 |

## 相关页面

- [安装与环境配置](/zh/swarms/installation/)
- [快速开始](/zh/swarms/quickstart/)
- [核心概念](/zh/swarms/core-concepts/)
- [架构总览](/zh/swarms/architectures/)

## 参考资料

- Structured: https://docs.swarms.world/concepts/structured-outputs.md
