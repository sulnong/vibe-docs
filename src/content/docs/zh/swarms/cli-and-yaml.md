---
title: "CLI 与 YAML"
description: "使用 Swarms CLI 和 YAML 文件运行可复现的 agent 与 workflow。"
---

# CLI 与 YAML

## YAML 用于复现

```yaml
agents:
  - name: researcher
    system_prompt: "Collect factual notes with source links."
workflow:
  type: sequential
```

密钥、长私有笔记和一次性实验不要放进可复用 YAML。配置文件控制行为，所以要像代码一样复核。

## 交互工作和可复现工作不同

Workflow 是应用逻辑时用 Python。希望不改代码也能重复运行时，用 YAML 或 CLI 配置。

| 需求 | 优先选择 |
| --- | --- |
| 原型逻辑 | Python 脚本 |
| 运行已知 workflow | CLI 或 YAML |
| 存放密钥 | 环境变量或 secrets manager |
| 复核行为 | 靠近项目的版本化 YAML |

```yaml
agents:
  - name: researcher
    system_prompt: "Collect factual notes with source links."
workflow:
  type: sequential
```

## 相关页面

- [安装与环境配置](/zh/swarms/installation/)
- [快速开始](/zh/swarms/quickstart/)
- [核心概念](/zh/swarms/core-concepts/)
- [架构总览](/zh/swarms/architectures/)

## 参考资料

- Cli: https://docs.swarms.world/cli/overview.md
- Cli Config: https://docs.swarms.world/cli/configuration.md
