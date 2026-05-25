# 中文高质量文章英文转化内容策略

## 背景与目标

用户会持续发现高质量中文公众号文章，主题包括中国产业、财政、经济、能源、科技、创新、公司与政策观察。目标不是把这些文章简单翻译成英文转载，而是把中文信息优势转化为英文读者更容易搜索、理解、引用和继续阅读的内容，从而提升站点访问量与长期主题权威。

核心判断：

- 直接全文翻译公众号文章存在版权、重复内容、低差异化和搜索定位不清的问题。
- 更有价值的做法是把文章作为“来源之一”，经过事实核验、背景补全、术语解释、英文搜索意图重组和来源标注，产出面向英文读者的原创解释型内容。
- 公开页面应服务英文读者的真实问题，例如“China EV battery supply chain explained”“Why local government financing vehicles matter”“China industrial policy examples”，而不是服务中文原文的标题结构。

## 内容形态建议

### 1. China Industry Briefs

适合持续更新，承接公众号文章中具有时效性但仍有解释价值的内容。

页面特征：

- 每篇围绕一个具体问题、事件、产业链节点或政策变化。
- 以英文读者能理解的背景开头，解释“发生了什么、为什么重要、影响谁”。
- 保留来源地图，但不复制原文结构。
- 适合 800-1800 词，不追求长文堆砌。

示例 URL：

- `/china-industry/china-ev-battery-overcapacity/`
- `/china-economy/local-government-debt-lgfv-explained/`
- `/china-industry/china-solar-supply-chain-price-war/`

### 2. Explainers

适合 evergreen 主题，承接长期搜索需求，是站点权重的核心。

页面特征：

- 解释一个长期概念、机制、行业结构或政策工具。
- 从多篇中文文章、官方数据、公司公告、研究报告和英文资料中综合。
- 使用图表、定义、对比表、常见误解、时间线和术语表。

示例 URL：

- `/china-economy/local-government-financing-vehicles/`
- `/china-energy/ultra-high-voltage-grid/`
- `/china-tech/industrial-policy-guidance-funds/`

### 3. Source Notes

适合作为内部产物，不建议默认公开。用于记录公众号文章原始信息、出处、观点、可复用事实、待核验点和版权状态。

建议位置：

- `content-plans/china-industry-briefs/source-notes/<slug>.md`

公开前必须经过二次写作，不能把 Source Notes 直接复制到 `src/content/docs/`。

### 4. Topic Hubs

每个稳定方向建立一个 topic 首页，承担导览和内部链接枢纽作用。

候选 topic：

- China industry
- China economy
- China energy
- China technology
- China fiscal policy
- China innovation

每个 topic 首页应包含：

- 读者应该从哪里开始。
- 关键概念地图。
- 最近 brief。
- 长期 explainers。
- 术语表和数据来源页。

## 不建议的形态

- 不建议做“公众号英文翻译合集”。
- 不建议保留原文标题、段落顺序和修辞风格。
- 不建议每篇都标榜“translated from Chinese article”，这会把页面定位成转载内容，而不是英文读者问题的答案。
- 不建议公开页面出现“选题判断、搜索意图、来源需求、人工审核”等内部字段。
- 不建议只靠每日大量发布短翻译稿获取搜索流量，容易形成低差异内容。

## 生产流程

### 1. 输入

用户给出公众号文章链接、截图、复制文本、标题或摘要。

Agent 记录：

- 原文标题。
- 原文作者和发布平台。
- 发布时间。
- 原文链接或可追溯来源。
- 用户认为它高质量的原因。
- 是否允许引用原文中的少量句子。

### 2. 版权与使用判断

每篇文章先做使用分级：

- A 级：可授权转载或作者明确允许改编，可较多利用原文观点，但仍要重写。
- B 级：普通公众号文章，只能作为研究来源，公开页不全文翻译，不复刻结构。
- C 级：版权或来源不清，只能做选题线索，公开页必须依赖可核验公开来源。

默认按 B 级处理。

### 3. 信息抽取

从中文原文提取：

- 核心事实。
- 数据点。
- 关键判断。
- 产业链关系。
- 政策或公司主体。
- 读者可能看不懂的中文语境。
- 原文没有解释但英文读者需要的背景。

### 4. 外部核验

每篇公开页至少补充：

- 官方统计、政策文件、公司公告或交易所文件。
- 英文主流媒体、研究机构或国际组织资料。
- 如有争议，补充不同观点。
- 对数字、时间、公司名称、政策名称做二次确认。

### 5. 英文搜索意图重组

不要按中文标题翻译。先判断英文读者会怎么搜：

- `what is ...`
- `why ... matters`
- `China ... explained`
- `... supply chain`
- `... policy`
- `... vs ...`
- `... risks`
- `... data`

再决定 URL、标题、页面结构和内部链接。

### 6. 写作

公开页应输出为英文原创内容：

- 用英文读者熟悉的背景和术语开场。
- 明确说明事实、解释和判断的边界。
- 用小标题组织问题，而不是复刻原文段落。
- 保留来源链接，必要时注明“基于中文报道和公开资料综合”。
- 少量引用必须短、必要、标明来源，优先转述。

### 7. 内部记录

每个 topic 在 `content-plans/<topic-slug>/outline.md` 或独立策略文件中记录：

- 来源地图。
- SERP/竞品观察。
- 页面组织。
- URL 路径。
- 人工审核问题。

确认后再进入 `src/content/docs/en/` 和 `src/content/docs/zh/`。

## 搜索与发现策略

### 页面选题

优先做“英文世界缺解释，但中文信息密度高”的内容：

- 中国政策、产业链和地方财政中的特有概念。
- 中文媒体讲得细、英文结果零散或过度新闻化的主题。
- 外国读者会搜索但不容易找到结构化答案的问题。
- 有长期复用价值的机制解释，而不是只追逐单日新闻。

### URL 与标题

URL 使用英文、短、稳定、问题导向：

- 好：`/china-economy/local-government-financing-vehicles/`
- 好：`/china-energy/ultra-high-voltage-grid/`
- 避免：`/articles/20260525-wechat-translation-001/`

标题尽量接近英文搜索表达：

- `China's Local Government Financing Vehicles, Explained`
- `How China's Ultra-High-Voltage Grid Works`
- `Why China's Solar Supply Chain Keeps Pushing Prices Down`

### 站内结构

建议从少数 topic 开始，不要一次展开过多分类。

第一阶段可以只建：

- `/china-industry/`
- `/china-economy/`
- `/china-energy/`
- `/china-tech/`

每个 topic 内部保持：

- 首页导览。
- 5-10 篇 evergreen explainers。
- 若干 briefs。
- 一个 resources/data sources 页面。
- 文章之间互相链接，形成主题闭环。

### 内容差异化

每篇文章至少提供一种英文 SERP 中稀缺的价值：

- 中文术语和英文术语的准确映射。
- 产业链图谱或参与方清单。
- 政策时间线。
- 关键数据表。
- 常见误解。
- 反例和边界条件。
- 对海外读者的影响说明。
- 可继续追踪的官方数据源。

### 多语言策略

本项目的新主线内容只做英文公开页，不再为中国内容方向生成中文公开页。

建议：

- 英文页作为 canonical 主版本。
- 新主线公开 URL 不使用 `/en/` 或 `/zh/` 前缀。
- 已发布 URL 尽量稳定，分类调整时用 301、hub 和内部链接承接。
- 使用清晰的内部链接，让 topic 内部形成路径。

### Google Discover 与社交传播

如果后续希望进入 Discover 或社交推荐，应补充：

- 每篇文章的清晰发布日期和更新时间。
- 可信作者或编辑署名。
- 高质量封面图或数据图。
- 事实核验和来源透明。
- 标题避免夸张和点击诱导。

## 风险

### 版权风险

公众号文章默认有版权。未经授权的全文翻译或结构复刻都不稳妥。公开页应以“基于多来源的原创解释”为原则。

### 搜索质量风险

Google 对主要为搜索排名而生成、缺乏原创价值的内容不友好。自动翻译后缺少人工审核、只拼接来源、只改写别人内容，都可能降低站点质量。

### 品牌定位风险

现有站点定位偏 agent-assisted bilingual technical docs。如果加入宏观经济、产业和政策内容，需要明确是否扩展为更宽的“bilingual knowledge docs”。否则公开站点会出现主题混杂。

建议把新方向作为独立 topic 空间，不与技术工具文档混在同一个导航组中。

## MVP 建议

第一阶段不要自动化大规模发布。先人工验证 10 篇。

建议流程：

1. 用户提供 10 篇公众号文章。
2. Agent 为每篇创建 source note。
3. 聚类成 2-3 个 topic。
4. 为每个 topic 生成一个 `outline.md`。
5. 人工审核选题和风险。
6. 先发布 3 篇 evergreen explainers 和 2 篇 briefs。
7. 发布后用 Search Console 观察 query、impression、CTR 和索引情况。
8. 再决定是否增加自动化程度。

第一批优先选：

- 一个能源或产业链主题。
- 一个财政或经济机制主题。
- 一个科技或创新政策主题。

每篇公开页都要回答：

- 英文读者会搜什么？
- 这页比已有英文结果多了什么？
- 哪些事实已经核验？
- 哪些判断来自原文作者，哪些是我们综合判断？
- 是否存在版权或敏感表达风险？

## 需要确认的问题

1. 新方向是否仍放在同一个站点品牌下，还是未来拆成独立栏目或子域名？
2. 目标读者更偏海外投资/研究人员、技术从业者、政策观察者，还是普通英文读者？
3. 是否能获取公众号作者授权？如果不能，默认只能做研究来源和原创改写。
4. 是否接受新主线只做英文公开页？
5. 是否希望每篇文章展示作者署名和编辑说明？

## 参考原则

- Google Search Central 的有用内容原则：内容应面向用户而不是主要面向搜索引擎，并提供原创信息、分析或价值。参考：https://developers.google.com/search/docs/fundamentals/creating-helpful-content
- Google Search spam policies：自动化生成大量缺少用户价值的页面、复制或改写来源而没有实质增量，可能被视为低质量或滥用。参考：https://developers.google.com/search/docs/essentials/spam-policies
- Google 多语言站点文档：不同语言版本应有独立 URL，并可通过 `hreflang` 帮助搜索引擎理解页面关系。参考：https://developers.google.com/search/docs/advanced/crawling/localized-versions
- Google 多地区和多语言站点文档：站点应保持清晰的语言 URL 结构，避免让搜索引擎混淆不同语言版本。参考：https://developers.google.com/search/docs/advanced/crawling/managing-multi-regional-sites
- Google Article structured data 文档：文章页可使用结构化数据表达标题、作者、发布日期、修改日期和图片等信息。参考：https://developers.google.com/search/docs/appearance/structured-data/article
