# 中国“十五五”规划内容集群实施计划

## 目标

按照 `content-plans/china-15th-five-year-plan/outline.md` 的方案，完成 1 篇英文支柱页和 6 篇英文专题页，并把它们接入现有 topic hub 与站内知识图谱。

## 文件计划

新增公开文章：

- `src/content/docs/china-economy/china-15th-five-year-plan.md`
- `src/content/docs/china-industry/new-quality-productive-forces-15th-five-year-plan.md`
- `src/content/docs/china-ai/ai-data-compute-15th-five-year-plan.md`
- `src/content/docs/china-economy/domestic-demand-15th-five-year-plan.md`
- `src/content/docs/china-economy/opening-up-15th-five-year-plan.md`
- `src/content/docs/china-society/population-welfare-15th-five-year-plan.md`
- `src/content/docs/china-energy/green-transition-energy-security-15th-five-year-plan.md`

可能新增 topic hub：

- `src/content/docs/china-energy/index.md`

需要更新的 hub：

- `src/content/docs/china-economy/index.md`
- `src/content/docs/china-industry/index.md`
- `src/content/docs/china-ai/index.md`
- `src/content/docs/china-society/index.md`

## 执行步骤

1. 读取现有 frontmatter、hub、内部链接和文章风格。
2. 从 docx 中提取规划目标、篇章结构、AI/产业/内需/开放/人口/能源相关政策段落。
3. 写支柱页，重点提供总览、术语表、目标表和指向专题页的阅读路径。
4. 写 6 篇专题页，每篇围绕一个真实英文搜索意图，避免逐段翻译。
5. 更新 hub 页面，让新内容能从 topic 首页被发现。
6. 检查公开页不得出现内部策划词，例如“SEO 计划”“搜索意图”“人工审核”“来源需求”。
7. 不运行测试、构建或验证命令；只做文件读取级静态自查。

## 写作边界

- 公开页只使用英文。
- 公开页不暴露本地 docx 路径。
- 对规划目标使用 cautious framing：目标、方向、政策信号，不写成已经发生的事实。
- 公开来源优先使用官方公开全文、人大批准决议、政府/部委公开资料。
- 文章保留 Article JSON-LD、topics/tags/entities/related 字段。
- 不创建 `.superpowers` 目录。
