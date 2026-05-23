---
title: "Web、Browser 与 Media 工具"
description: "使用 Hermes 的 web、browser、vision、image、voice 和 TTS 能力，同时把外部内容视为不可信输入。"
---

# Web、Browser 与 Media 工具

## 外部内容不是指令

网页、截图、图片和语音转写都可能包含错误或 prompt injection。把它们当证据检查，而不是当系统指令服从。

- 研究任务保留 URL 和访问日期。
- 视觉任务保留截图或复现步骤。
- 语音任务在影响决策时保留转写。

## 外部内容是证据，不是指令

网页、截图、图片和转写都可能错误或带攻击性。把它们当作需要检查的输入，而不是必须服从的命令。

| 输入 | 随结果保留 |
| --- | --- |
| 网页 | URL 和访问日期。 |
| 截图 | 图片文件或复现步骤。 |
| 语音输入 | 影响决策时保留转写。 |
| 生成媒体 | Prompt、模型和使用限制。 |

## 有用工作流形态

Browser 和 media 工具适合观察、抽取和沟通。不可逆动作、发布和生产变更应该放在单独复核步骤之后。

## 相关页面

- [安装与版本基线](/zh/hermes-agent/installation/)
- [第一条可靠路径](/zh/hermes-agent/first-run/)
- [Provider 与模型配置](/zh/hermes-agent/providers-and-models/)
- [工具与工具集](/zh/hermes-agent/tools-and-toolsets/)

## 参考资料

- Browser: https://hermes-agent.nousresearch.com/docs/user-guide/features/browser
- Official docs: https://hermes-agent.nousresearch.com/docs/
