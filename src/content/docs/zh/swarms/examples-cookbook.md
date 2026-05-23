---
title: "Examples Cookbook"
description: "把 Swarms examples 当作起点，适配真实系统前先补边界。"
---

# Examples Cookbook

## 示例是起点

| 看什么 | 问题 |
| --- | --- |
| 任务形态 | 和你的任务真的一样吗？ |
| 密钥 | 从哪里来？ |
| 副作用 | 会写入、发送或删除吗？ |
| 停止 | 什么限制 loop 和重试？ |

## 示例展示形态，不代表生产就绪

先在一次性环境运行示例。适配前识别密钥、副作用、loop 限制、输出形态和复核路径。

| 看什么 | 问题 |
| --- | --- |
| 任务形态 | 它真的是你的任务吗？ |
| 密钥 | 从哪里来？ |
| 副作用 | 会写入、发送、花钱或删除吗？ |
| 停止 | 什么限制 loops 和 retries？ |
| 输出 | 谁或什么消费结果？ |

## 严肃示例应该进入应用代码

有用示例经常会长成 workflow。到这一步，就给它 owner、测试、配置和部署说明。

## 相关页面

- [安装与环境配置](/zh/swarms/installation/)
- [快速开始](/zh/swarms/quickstart/)
- [核心概念](/zh/swarms/core-concepts/)
- [架构总览](/zh/swarms/architectures/)

## 参考资料

- Examples: https://docs.swarms.world/examples/basic-agent.md
