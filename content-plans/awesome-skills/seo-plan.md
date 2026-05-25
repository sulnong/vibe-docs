# Awesome Skills SEO 计划

## 当前机会

`awesome-skills` 第一轮有 50 个 skill 页面，覆盖浏览器自动化、前端设计、部署平台、安全审查、文档知识、数据后端、AI/ML 和工作流创建。这个 topic 的 SEO 机会不只是“awesome skills”这个词，而是大量长尾查询：

- `openai playwright skill`
- `claude docx skill`
- `cloudflare workers skill for agents`
- `agent skill for accessibility audit`
- `github actions fix ci agent skill`
- `notion knowledge capture skill`

这些查询的共同特点是：搜索者已经知道某个工具或任务，但不知道这个 skill 是否值得安装、依赖什么、和相邻 skill 有什么区别。

## 已完成的基础动作

- 每个 skill 有独立 URL：`/en/awesome-skills/<slug>/` 和 `/zh/awesome-skills/<slug>/`。
- Topic 首页列出全部 50 个页面，形成可爬取内链。
- 左侧导航按任务分类展示 50 个 skill，而不是只展示 Start。
- 每个 skill 页有相似 skill 链接，形成分类内阅读闭环。
- 站点已有 sitemap 集成，发布后可让搜索引擎发现新页面。
- 每页 frontmatter 有独立 `title` 和 `description`。

## 内容策略

### 1. 先让页面“可索引”，再让重点页“值得排名”

第一轮 50 页是可索引骨架，适合快速建立 URL、标题、来源和内链。下一步不要平均加长所有页面，而是优先打磨 10 个高潜力页面：

- `playwright`
- `frontend-skill`
- `cloudflare`
- `workers-best-practices`
- `security-best-practices`
- `static-analysis`
- `openai-docs`
- `docx`
- `postgres-best-practices`
- `gh-fix-ci`

每个重点页补充真实任务示例、常见误用、相邻 skill 对比、失败症状和安装差异。不要只改写 officialskills.sh 的描述。

### 2. 建分类页承接中等搜索意图

当前 topic 首页已经有分类段落，但后续应该拆出 8 个分类页：

- `/awesome-skills/browser-testing-quality/`
- `/awesome-skills/frontend-design/`
- `/awesome-skills/deployment-platform/`
- `/awesome-skills/security-review/`
- `/awesome-skills/documents-knowledge/`
- `/awesome-skills/data-backend/`
- `/awesome-skills/ai-ml-models/`
- `/awesome-skills/workflow-skill-creation/`

分类页目标不是重复列表，而是回答“哪类任务该选哪个 skill”。例如浏览器分类页应比较 `playwright`、`webapp-testing`、`playwright-interactive`、`web-quality-audit` 和 `core-web-vitals` 的边界。

### 3. 每页标题和首段要覆盖实体词

页面需要同时出现：

- 发布方：OpenAI、Anthropic、Cloudflare、Trail of Bits、Vercel、Google Gemini 等。
- skill 名：`playwright`、`frontend-skill`、`gh-fix-ci` 等。
- 任务词：browser automation、deploy、security review、DOCX editing、Postgres best practices 等。

这比只写 “Playwright Skill” 更利于长尾搜索。

### 4. 增加“比较”和“替代”段落

搜索用户常常不是找单个 skill，而是在比较：

- `openai/playwright` vs `anthropics/webapp-testing`
- `frontend-skill` vs `frontend-design`
- `cloudflare` vs `workers-best-practices` vs `wrangler`
- `security-best-practices` vs `security-threat-model` vs `static-analysis`

每个重点页应有 3-5 行对比判断，而不是只列 Similar Skills。

### 5. 控制批量生成风险

Google 的 helpful content 文档强调内容应提供原创信息、完整描述、超出显而易见的信息，并避免只是复制或改写来源。第一轮页面已经有来源和结构，但仍有模板化风险。后续优化顺序：

1. 对前 10 页补真实案例。
2. 对每个分类页补决策表。
3. 对安装命令和 source path 做来源复核。
4. 对高流量页面增加更新时间和变更记录。
5. 保留薄页面，但不要把它们当作最终内容。

## 技术 SEO

- 确认生产域名 `PUBLIC_SITE_URL` 正确，否则 sitemap URL 会错误。
- 发布后在 Google Search Console 提交 sitemap。
- 观察 Page indexing、Crawl stats 和查询词，优先优化有 impression 但 CTR 低的页面。
- 确认每个页面只有一个规范 URL，中英文 slug 保持一致。
- 保持内部链接为真实 HTML 链接，不依赖客户端 JS 才能发现。
- 用清晰的 heading 组织页面，不用隐藏文本堆关键词。

## 内链策略

- Topic 首页链接全部 50 个 skill。
- 每个 skill 页链接同分类 4 个相似 skill。
- 后续分类页链接分类下所有 skill，并反向从每个 skill 页链接回分类页。
- `src/content/docs/en/index.md` 和 `src/content/docs/zh/index.md` 已提供 Awesome Skills 入口。
- 可以在 Hermes 的 skills 页面低干扰位置链接到 Awesome Skills，承接读者的下一步需求。

## 发布后复盘指标

- Search Console impression：先看是否被发现。
- CTR：标题和描述是否能让人点击。
- 平均排名：是否需要补深内容。
- 页面停留和跳出：读者是否找到了能用的信息。
- 内链点击：分类和 similar skills 是否真的引导阅读。

## 参考来源

- Google SEO Starter Guide：https://developers.google.com/search/docs/fundamentals/seo-starter-guide
- Creating helpful, reliable, people-first content：https://developers.google.com/search/docs/fundamentals/creating-helpful-content
- Crawling and indexing overview：https://developers.google.com/search/docs/crawling-indexing
- Build and submit a sitemap：https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap
