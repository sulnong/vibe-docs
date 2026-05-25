---
title: "Hermes Agent 指南"
description: "从安装、第一次运行、模型配置、工具边界、记忆、skills 和自动化路径理解 Hermes Agent。"
---

# Hermes Agent 指南

Hermes Agent 是 Nous Research 推出的终端原生 agent。它不只是一个聊天窗口，而是一个可以在工作目录里读文件、运行命令、调用工具、保留会话、使用记忆和接入消息平台的长期工作环境。

如果你只是想问一个概念，普通聊天机器人更轻。如果你希望模型围绕一个代码库持续工作，能复用项目规则，能在以后恢复上下文，甚至能通过 Telegram、Discord、Slack 或 webhook 接收任务，Hermes 才开始显出差异。

## 先建立正确预期

Hermes 的强项不是“替你写一句更聪明的回答”，而是把模型放进一个可操作的环境里。它可以接近代码、终端、浏览器、外部工具和消息平台，所以收益和风险都会比普通聊天高。

学习时不要一开始就打开所有能力。更稳的顺序是：

1. 安装并确认 `hermes` 命令可用。
2. 配置一个 provider 和一个模型。
3. 运行一个只读的小任务，确认会话能稳定返回。
4. 再试文件读写、shell、browser、memory 和 skills。
5. 本地路径可靠后，再考虑 gateway、cron、delegation、Kanban、MCP 或 API server。

这条顺序看起来保守，但能省掉大量“到底是安装、鉴权、工具、模型还是 prompt 出错”的混乱。

## 当前版本基线

| 项目 | 值 |
| --- | --- |
| 仓库 | `NousResearch/hermes-agent` |
| Package | `hermes-agent` |
| PyPI 版本 | `0.14.0` |
| Python 要求 | `>=3.11` |
| 最新 release | `v2026.5.16` |

这些数字来自 2026-05-25 对 PyPI 和 GitHub release 的检查。Hermes 变化很快，真正上生产或写团队安装文档前，仍要重新查看官方文档、PyPI 和 release notes。

## 按读者状态继续

| 你现在的状态 | 建议下一页 |
| --- | --- |
| 还没安装 | [安装与版本基线](/zh/hermes/installation/) |
| 已安装但没跑过完整会话 | [第一条可靠路径](/zh/hermes/first-run/) |
| 不知道选哪个模型或 provider | [Provider 与模型配置](/zh/hermes/providers-and-models/) |
| 担心 agent 乱改文件或乱跑命令 | [工具与工具集](/zh/hermes/tools-and-toolsets/) 和 [安全模型](/zh/hermes/security-model/) |
| 想把流程沉淀成长期能力 | [Context Files](/zh/hermes/context-files/)、[记忆与会话搜索](/zh/hermes/memory-and-sessions/) 和 [Skills 系统](/zh/hermes/skills/) |
| 想接 Telegram、cron、子 agent 或 Kanban | [自动化与协作](/zh/hermes/automation/) |

## 一个最小可用路径

最短路径不是“装完就让它改项目”，而是先证明每一层能工作：

```bash
python --version
pip install hermes-agent
hermes --help
hermes model
hermes
```

第一次对话建议让 Hermes 做一个低风险任务，例如读取 README，总结到临时文件。等它能稳定完成这类任务，再逐步扩大权限。

## Hermes 适合的工作

| 任务形态 | 是否适合 Hermes |
| --- | --- |
| 阅读仓库、总结结构、定位文件 | 适合，先只读。 |
| 小范围修改代码并保留 diff | 适合，但要限制范围并复核。 |
| 重复性的发布说明、研究报告、例行检查 | 适合沉淀成 skills 或 cron。 |
| 远程聊天平台触发任务 | 可以，但先做好授权和关闭路径。 |
| 生产数据库、资金、账号、发布动作 | 不应直接放权，至少需要人工确认。 |
| 完全确定、可测试的转换流程 | 脚本通常更好。 |

## 这套指南怎么组织

这套文档不会复刻官方文档的每个命令。它更关注读者第一次使用时真正会遇到的判断：怎么装、怎么验证、怎么选模型、哪些能力应该晚点开、失败时从哪一层排查。

建议按顺序读前四页：

- [安装与版本基线](/zh/hermes/installation/)
- [第一条可靠路径](/zh/hermes/first-run/)
- [Provider 与模型配置](/zh/hermes/providers-and-models/)
- [工具与工具集](/zh/hermes/tools-and-toolsets/)

然后再根据需求进入 memory、skills、automation、integrations、architecture 或 troubleshooting。

## 参考资料

- Hermes Agent 官方文档：https://hermes-agent.nousresearch.com/docs/
- 官方 llms.txt：https://hermes-agent.nousresearch.com/docs/llms.txt
- GitHub 仓库：https://github.com/NousResearch/hermes-agent
- PyPI 包：https://pypi.org/project/hermes-agent/
