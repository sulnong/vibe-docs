---
title: "版本变化与迁移"
description: "追踪 Swarms 在 API、架构、CLI、memory、provider 和部署行为上的版本变化。"
---

# 版本变化与迁移

## 升级前检查

- 包版本和 Python 要求。
- Agent 或 workflow API。
- CLI 与 YAML 配置。
- Provider、memory 和 tool 行为。
- 生产部署和回滚路径。

| 项目 | 值 |
| --- | --- |
| 仓库 | `kyegomez/swarms` |
| Package | `swarms` |
| 检查版本 | `12.0.0` |
| Python 要求 | `>=3.10,<4.0` |
| License | `Apache-2.0` |

## 版本漂移很正常

Agent APIs 和编排行为变化很快。严肃工作要 pin 版本，并保留小的 golden example 用于升级。

| 升级前检查 | 原因 |
| --- | --- |
| 包版本 | 知道回滚目标。 |
| Python 要求 | 避免环境意外。 |
| Agent 和 workflow APIs | 捕捉 constructor 或行为变化。 |
| Provider 行为 | 发现输出漂移。 |
| CLI 和 YAML | 避免运维命令过时。 |

## 当前基线

这份指南检查的是 swarms 12.0.0，Python 要求 >=3.10,<4.0。生产升级前重新确认包信息和 release notes。

## 相关页面

- [安装与环境配置](/zh/swarms/installation/)
- [快速开始](/zh/swarms/quickstart/)
- [核心概念](/zh/swarms/core-concepts/)
- [架构总览](/zh/swarms/architectures/)

## 参考资料

- Changelog: https://docs.swarms.world/changelog/swarms-v12.md
- PyPI package: https://pypi.org/project/swarms/
