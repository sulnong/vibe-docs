# 内部工具

`tools/` 是给 agent 使用的辅助工具，不是给人手动学习的一套产品流程。用户只需要在 agent 里输入 topic，agent 负责调用这些工具、补充研究、生成选题大纲报告，并在人工确认后生成文档。

这些工具不属于公开站点内容。公开读者只应该看到 `src/content/docs/` 里的主题文档。

## 目录职责

- `cli.js`：agent 可调用的命令入口。
- `lib/github.js`：解析 GitHub 仓库、读取仓库元信息、列出官方来源候选。
- `lib/topic-plan.js`：生成选题大纲报告的数据结构和 Markdown。
- `lib/draft.js`：在人工确认大纲后写入中英文 Markdown 草稿。
- `lib/checks.js`：检查双语页面数量、元信息、来源链接和占位内容。

## agent 可用命令

这些命令主要由 agent 调用。人通常不需要直接运行。

```bash
node tools/cli.js help
node tools/cli.js research --topic "Astro" --repo withastro/astro --official-docs https://docs.astro.build/
node tools/cli.js draft --topic "Astro" --repo withastro/astro --official-docs https://docs.astro.build/
node tools/cli.js check --topic astro
```

## agent 研究要求

生成选题大纲报告前，agent 必须尽量多找与选题相关的资料：

- 官方仓库、README、release notes、examples、源码目录、issues。
- 官方文档首页、指南、API/reference、FAQ、迁移或升级文档。
- 中英文搜索需求、SERP 页面类型、竞品文档、社区问答和排错资料。
- 能制造差异化的材料：反例、边界条件、真实任务地图、排错路径、版本差异、对比决策表。

如果 clone 官方仓库耗时太久，agent 应放弃 clone，改用 GitHub API、raw 文件、官方文档和网页搜索继续研究。

`research` 输出到 `content-plans/<topic-slug>/outline.md`。报告必须写清楚 URL 路径设计、页面组织、每个页面回答的问题、内容结构、来源需求和差异化内容。用户审核通过后，agent 才能使用 `draft` 生成正式文档。

## 注意事项

- `research` 只生成大纲报告，不直接发布文档。
- `draft` 会写入 `src/content/docs/en/<topic>/` 和 `src/content/docs/zh/<topic>/`，执行前必须确认人工已经审核大纲报告。
- `check` 只做结构性质量检查，不能替代人工事实核对。
