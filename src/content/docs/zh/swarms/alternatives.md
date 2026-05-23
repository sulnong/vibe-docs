---
title: "替代方案与对比"
description: "按操作模型对比 Swarms、LangGraph、AutoGen、CrewAI、自定义脚本和单 agent 框架。"
---

# 替代方案与对比

## 按操作模型比较

| 选项 | 适合场景 |
| --- | --- |
| 当前框架 | 需要它提供的状态、工具和编排。 |
| 普通脚本 | 流程确定且容易测试。 |
| 聊天机器人 | 主要是解释和对话。 |
| 其他 agent 框架 | 它的抽象更贴近团队工作方式。 |

## 比较失败模式

当团队能调试失败时，工具才适合。脚本带日志失败；聊天机器人给弱答案；终端 agent 可能改文件；多 agent workflow 可能隐藏问题来自哪一步。

| 选项 | 适合场景 |
| --- | --- |
| Swarms | Python 多 agent 编排。 |
| LangGraph | Graph-first stateful workflows。 |
| CrewAI 风格工具 | Role/task 隐喻。 |
| 自定义脚本 | 确定性流程。 |

## 混合使用是健康的

稳定部分用确定性代码，模糊推理用 agent 框架，发布、资金、账号或生产系统相关动作保留人工复核。

## 相关页面

- [安装与环境配置](/zh/swarms/installation/)
- [快速开始](/zh/swarms/quickstart/)
- [核心概念](/zh/swarms/core-concepts/)
- [架构总览](/zh/swarms/architectures/)

## 参考资料

- Official docs: https://docs.swarms.world/
