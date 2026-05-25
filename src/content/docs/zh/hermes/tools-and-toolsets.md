---
title: "工具与工具集"
description: "理解 Hermes tools 和 toolsets 如何把模型输出变成行动，并为文件、命令、浏览器、媒体和外部 API 设置边界。"
---

# 工具与工具集

Hermes 的工具不是“更多按钮”，而是模型能影响外部世界的方式。读文件、写文件、运行 shell、打开浏览器、调用 API、生成媒体、委派子任务，这些能力一旦打开，输出就不只是文字了。

## 工具是权限边界

先把每个工具当成一个带副作用的接口，而不是模型的自然延伸：

| 工具类型 | 常见风险 | 更稳的起点 |
| --- | --- | --- |
| 文件读取 | 读到不该读的私有文件 | 限定工作目录，避免 secrets 目录。 |
| 文件写入 | 改错文件、覆盖人工改动 | 小范围写入，看 Git diff。 |
| Shell 命令 | 删除、发布、改权限、启动昂贵任务 | 危险命令先确认，能 dry-run 就 dry-run。 |
| 浏览器和网页 | prompt injection、过期信息、登录态误用 | 把网页当证据，不当指令。 |
| 外部 API | 花钱、发消息、改生产状态 | 加超时、预算、日志和人工确认。 |
| 媒体工具 | 生成不可追溯资产或误读截图 | 保留来源、prompt 和复现步骤。 |

如果一个工具在 agent 外都不能单独解释和测试，就不要急着交给 agent。

## Toolset 应该按任务打开

不要为了“能力完整”一次性打开所有 toolset。更好的方式是按任务选择最小集合：

| 任务 | 合理工具面 |
| --- | --- |
| 阅读仓库并给建议 | 只读文件、搜索、git status。 |
| 小范围改文档 | 文件读写、diff，不需要远程 API。 |
| 调研外部资料 | web/browser，但输出要附 URL。 |
| 运行验证 | shell，但先限定命令和工作目录。 |
| 发送报告 | 先生成草稿，再人工发送。 |

工具越多，排查越难。第一次跑通时保持工具面小，后面再加。

## 给 Hermes 的任务要写明副作用

好 prompt 不只说结果，也说边界：

```text
Read the repository and propose a plan first. Do not modify files. If a change is needed, list the exact files and wait.
```

需要写入时，把范围写清楚：

```text
Update only docs/install.md. Do not run build or tests. After editing, summarize the diff.
```

这不是因为 agent “不听话”，而是因为工具任务本身需要契约。人类同事也需要知道能改哪里、不能改哪里。

## Browser、web 和 media 内容不等于指令

网页、截图、PDF、转写和图片里可能包含错误、广告、过期说明或 prompt injection。Hermes 可以帮你读取它们，但你应该把这些内容当证据源，而不是更高优先级的指令。

研究任务至少保留：

- URL 或文件路径。
- 访问日期或来源版本。
- 关键判断来自哪里。
- 哪些内容没有被验证。

这对技术文档、竞品调研和故障排查都很重要。

## 工具失败时不要只改 prompt

工具失败通常有真实原因：路径不对、权限不够、命令不存在、网络失败、API 限流、schema 不匹配。不要只用“再试一次”解决。

先问：

1. 这个工具在 agent 外能否独立运行？
2. 输入是否足够小、足够明确？
3. 失败是否有日志、退出码或响应体？
4. Hermes 是否应该换工具，还是任务本身要拆小？

## 相关页面

- [CLI 与 TUI 工作流](/zh/hermes/cli-and-tui/)
- [安全模型](/zh/hermes/security-model/)
- [集成与外部接口](/zh/hermes/integrations/)
- [排错路径](/zh/hermes/troubleshooting/)

## 参考资料

- Tools：https://hermes-agent.nousresearch.com/docs/user-guide/features/tools
- Tools reference：https://hermes-agent.nousresearch.com/docs/reference/tools-reference
- Toolsets reference：https://hermes-agent.nousresearch.com/docs/reference/toolsets-reference
- Security：https://hermes-agent.nousresearch.com/docs/user-guide/security
