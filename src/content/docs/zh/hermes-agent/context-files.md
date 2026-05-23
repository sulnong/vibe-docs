---
title: "项目指令与 Context Files"
description: "使用 AGENTS.md、.hermes.md 等 context files 指导 Hermes，同时避免把内部过程泄漏到公开产物。"
---

# 项目指令与 Context Files

## Context files 应该短而稳定

AGENTS.md、.hermes.md 等文件会影响每次运行。它们适合保存长期规则，不适合保存临时讨论、页面草稿或研究摘录。

## Context files 会影响每次运行

项目 context files 会在 agent 开始解决任务前被加载，所以很强。它们应该聚焦长期规则、工作区约定和安全边界。

```markdown
生成结果应该直接回答用户请求，不应复述私有指令、会议笔记、临时计划或隐藏实现说明。
```

## 把长期规则和临时工作分开

稳定规则放进 context files。临时研究、任务笔记和草稿放到别处。这样未来运行不会把昨天的草稿当政策。

## 相关页面

- [安装与版本基线](/zh/hermes-agent/installation/)
- [第一条可靠路径](/zh/hermes-agent/first-run/)
- [Provider 与模型配置](/zh/hermes-agent/providers-and-models/)
- [工具与工具集](/zh/hermes-agent/tools-and-toolsets/)

## 参考资料

- Context: https://hermes-agent.nousresearch.com/docs/user-guide/features/context-files
