---
title: "排错路径"
description: "按安装、provider、模型、prompt、工具、状态、gateway 和自动化层排查 Hermes 问题。"
---

# 排错路径

排查 Hermes 时，最重要的是不要一次改太多东西。它横跨 Python 环境、模型 provider、prompt、工具、文件系统、gateway 和长期状态；乱换模型、重装、改 prompt、开关工具，很快就不知道哪个动作产生了变化。

## 先复现最小失败

从最小命令开始：

```bash
command -v hermes
hermes --help
python -m pip show hermes-agent
```

如果命令层没问题，再进入一个低风险目录跑最小会话。不要直接用失败的大任务做排查样本。

## 按层定位

| 层 | 典型症状 | 先做什么 |
| --- | --- | --- |
| 安装 | command not found、import error | 查 PATH、Python 版本、包位置。 |
| Provider | 鉴权失败、模型不存在、限流 | 重新跑 `hermes model`，确认 key、账号和模型名。 |
| 模型质量 | 输出乱、工具调用差 | 换小任务测试，比较同一 prompt 在不同模型下表现。 |
| Prompt/context | 忽略项目规则、带入旧假设 | 检查 context files、memory、skills。 |
| 工具 | 路径错、命令失败、API 报错 | 在 agent 外单独运行工具或命令。 |
| 文件状态 | 改错文件、diff 异常 | 看 `pwd`、`git status --short`、Git diff。 |
| Gateway | 收不到消息、串 session | 查 token、allowlist、session routing、gateway logs。 |
| Cron/automation | 后台跑错、没人知道失败 | 查 owner、日志、schedule、配置刷新和停止路径。 |

排查顺序通常从左到右。越靠后，变量越多。

## 如果安装正常但 Hermes 不会回答

常见原因是 provider 配置不通：

1. 重新运行 `hermes model`。
2. 确认 provider 账号可用。
3. 确认模型名仍然存在。
4. 检查 API key 或 OAuth 是否过期。
5. 如果用了 OpenAI-compatible endpoint，在 agent 外发一个最小请求。

不要先改复杂 prompt。模型路径没通时，prompt 再好也没用。

## 如果输出总是带旧假设

按来源找：

- 只在当前对话出现：检查 session。
- 每个新会话都出现：检查 memory 或全局 context。
- 只在某个项目出现：检查 `AGENTS.md`、`.hermes.md`、`CLAUDE.md` 等。
- 只在某类任务出现：检查对应 skill。

删除坏来源比在 prompt 里反复否定更可靠。

## 如果工具调用失败

工具失败要看真实错误，而不是只看最终回答：

```bash
pwd
git status --short
which node
which python
```

如果 Hermes 要运行某条命令，先在终端手动跑一个只读或 dry-run 版本。路径、权限、依赖和网络问题应该在 agent 外也能复现。

## 如果 gateway 或 cron 出问题

远程和后台问题要额外关注“哪个进程在运行”：

- 是否加载了最新配置。
- token 或 allowlist 是否正确。
- 当前消息进入哪个 session。
- 长期进程是否仍在使用旧版本。
- 日志在哪里，是否自动脱敏。
- 如何安全停止并重启。

很多 gateway 问题看起来像“agent 不理我”，实际是 bot token、平台权限、session 路由或服务进程状态问题。

## 建议保存的排错信息

```text
Hermes version:
Install method:
Python version:
OS and shell:
Provider:
Model:
Command or prompt:
Working directory:
Expected result:
Actual result:
Relevant log or error:
```

这份信息足够短，但能让别人真正帮你判断层次。

## 相关页面

- [安装与版本基线](/zh/hermes/installation/)
- [第一条可靠路径](/zh/hermes/first-run/)
- [Provider 与模型配置](/zh/hermes/providers-and-models/)
- [架构阅读路径](/zh/hermes/architecture/)

## 参考资料

- FAQ and Troubleshooting：https://hermes-agent.nousresearch.com/docs/reference/faq
- Security：https://hermes-agent.nousresearch.com/docs/user-guide/security
- CLI commands：https://hermes-agent.nousresearch.com/docs/reference/cli-commands
