---
title: "集成与外部接口"
description: "通过 MCP、API server、OpenAI-compatible frontend、browser、media 和外部工具扩展 Hermes，同时保持契约、权限和日志可见。"
---

# 集成与外部接口

Hermes 可以通过 MCP、API server、OpenAI-compatible frontend、browser、media tools 和 provider gateway 接入更多系统。集成的价值是让 Hermes 使用已有工具；风险是把本地 agent 的影响范围扩展到更多服务。

一个简单原则：先让本地 workflow 跑明白，再把它暴露成接口。

## 集成前先写契约

无论是 MCP server、API server、webhook 还是 browser tool，都先回答这些问题：

| 问题 | 影响 |
| --- | --- |
| 谁调用 | 鉴权、授权、审计。 |
| 调用什么 | 工具列表、输入 schema、输出格式。 |
| 能跑多久 | 超时、队列、并发和成本。 |
| 能访问哪里 | 文件、网络、凭据、外部 API。 |
| 失败怎么办 | 重试、回滚、用户可见错误。 |
| 怎么观察 | 日志、trace、metrics、请求 ID。 |

如果这些问题说不清，集成成功也只是把不确定性放大。

## MCP 适合连接已有工具

MCP 适合把外部工具服务器接给 Hermes，例如内部查询、知识库、代码索引、浏览器自动化或业务工具。关键不是“接得上”，而是“接上后 Hermes 能看到哪些工具”。

实践中要控制：

- 只暴露当前任务需要的工具。
- 给工具写清输入和输出。
- 给高风险工具加人工确认。
- 区分只读工具和写入工具。
- 记录 MCP server 的版本、来源和认证方式。

不要把一个含有大量工具的 MCP server 直接全量开放给 agent。工具发现越宽，误用和排错成本越高。

## API server 适合包装已知工作流

Hermes 的 API server 和 OpenAI-compatible 能力适合给已有 frontend、内部平台或自动化系统使用。但它不应该是“把整个本地 agent 裸露到网络上”。

更合理的做法是包装少数已知 workflow：

```text
POST /draft-release-notes
Input: repo, version, merged_pr_range
Output: markdown draft
Tools: read-only GitHub access
Human step: approve before publish
```

接口越具体，权限越容易收窄，失败也更容易解释。

## Browser 和 web 工具要防 prompt injection

网页和浏览器状态经常混合真实信息、广告、用户内容、错误说明和恶意指令。Hermes 读网页时，网页内容只是证据，不是系统指令。

用于研究或文档时，结果里应该保留：

- URL。
- 访问日期。
- 关键事实来自哪一页。
- 哪些结论是推断。
- 哪些内容没有验证。

用于登录态页面时，还要考虑 cookie、账号权限和误点击风险。能用只读 API 的地方，不要优先用登录态浏览器做高影响动作。

## Media 能力适合观察，不适合替代审核

Vision、image generation、TTS、voice 和转写能力能让 Hermes 处理截图、语音和多媒体输入。但媒体模型会误读细节，生成内容也可能不符合版权、品牌或事实要求。

高影响场景要保留：

- 原始截图、音频或图片路径。
- 转写或识别结果。
- 生成 prompt 和模型。
- 人工确认记录。

媒体能力很适合做草稿和观察，不应该直接替代最后审核。

## 集成的安全默认值

| 场景 | 默认建议 |
| --- | --- |
| 内部工具查询 | 先只读。 |
| 文件或代码写入 | 限目录，保留 diff。 |
| 网络 API | 加超时、预算和日志。 |
| 发送消息 | 先生成草稿，人工确认发送。 |
| 生产变更 | 不要让 agent 直接执行，除非有严格审批和回滚。 |

## 相关页面

- [工具与工具集](/zh/hermes/tools-and-toolsets/)
- [自动化与协作](/zh/hermes/automation/)
- [安全模型](/zh/hermes/security-model/)
- [架构阅读路径](/zh/hermes/architecture/)

## 参考资料

- MCP：https://hermes-agent.nousresearch.com/docs/user-guide/features/mcp
- API Server：https://hermes-agent.nousresearch.com/docs/user-guide/features/api-server
- Browser：https://hermes-agent.nousresearch.com/docs/user-guide/features/browser
- Vision：https://hermes-agent.nousresearch.com/docs/user-guide/features/vision
- Integrations overview：https://hermes-agent.nousresearch.com/docs/integrations/index
