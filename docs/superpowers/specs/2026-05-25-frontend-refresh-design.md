# Vibe Docs 前端体验升级设计

## 背景

当前站点是基于 Astro + Starlight 的双语技术文档站，已经具备 topic 路由、语言切换、主题切换和当前 topic 侧栏过滤能力。现有前端问题主要集中在三处：

- 根首页仍是轻量 topic 列表，缺少产品化入口和明确阅读路径。
- 主题数量偏多，`pop-brutal`、`pixel` 与当前文档站定位关系不够清晰。
- 阅读页已有基础样式覆盖，但 Starlight shell、Markdown 内容和主题质感之间还不够统一。

本次升级采用 `frontend-design` 的工作原则：先明确视觉方向，再让布局、字体、颜色、动效和组件细节一致服务这个方向。

## 目标

将站点改造成更有识别度的“产品化文档站”，但不做泛营销首页。读者进入站点后应能快速判断：

- 有哪些 topic 可读；
- 每个 topic 适合解决什么问题；
- 应该从哪个语言和路径开始；
- 当前站点是来源链接型、任务导向的技术指南，而不是上游 README 的薄改写。

默认体验应保持专业可信；可选主题提供明确个性，但不能牺牲技术文档的可读性。

## 非目标

- 不重写公开文档内容。
- 不调整 topic 的 URL 结构。
- 不建设总 topic 目录页之外的新内容体系。
- 不引入 React、Vue、Tailwind 或新的前端依赖。
- 不改动当前与 Hermes topic 迁移相关的未提交内容。
- 不运行测试、构建或验证命令。

## 视觉方向

采用“产品化文档站”作为主方向。

- `Base`：默认主题。安静、清晰、可信，像成熟技术出版物。用于建立站点第一印象和 SEO 入口页的稳定阅读体验。
- `neo-retro`：高识别度主题。保留亮色、高对比、轻实验室感，但降低玩具感，确保正文、代码和导航仍然可读。
- `luminous`：沉浸阅读主题。深色、分层、适合代码和长文阅读，通过轻微发光、半透明表面和冷色高亮形成“夜间工具台”质感。

三套主题共享同一布局和语义组件，只改变 token、边框、阴影、背景、控件质感和局部氛围。主题不应只是换颜色，也不应改变读者的信息架构。

## 页面结构

### 根首页

`src/pages/index.astro` 从简单列表升级为主题选择控制台。

首页首屏包含：

- `Vibe Docs` 品牌和一句定位；
- 当前站点的工作方式说明：双语、topic-first、来源链接、任务导向；
- 三个 topic 卡片：Astro、Hermes Agent、Swarms；
- 每个 topic 的英文和中文入口；
- 低干扰的阅读路径提示，例如“从快速开始进入”“查看排错路径”“比较替代方案”。

首页不做纯营销 hero，不使用空泛大图。首屏必须直接服务 topic 选择，并在移动端保持可扫描。

### 文档页

文档页继续使用 Starlight，不重建 docs shell。改造集中在：

- header 中的搜索、语言切换和主题切换密度；
- 当前 topic 侧栏的清晰度；
- Markdown 正文的标题、段落、列表、表格、代码块、blockquote、链接；
- 页面背景、边界、阅读宽度和右侧目录之间的层次；
- 移动端 header、sidebar footer 和主题控件不挤压、不溢出。

同 topic 页面之间的链接和内容闭环不在本次重写，但样式应支持这些链接更清楚地呈现。

## 组件边界

### `src/components/StyleSwitcher.astro`

将主题切换器改为三选项分段控件：

- `Base`
- `Retro`
- `Luminous`

交互要求：

- 使用 `role="radiogroup"` 和 `role="radio"`；
- 当前项同步 `aria-checked` 和视觉状态；
- 继续使用 `localStorage` 保存选择；
- 同步 Starlight 的 `data-theme`，其中 `Base` 和 `neo-retro` 使用 light，`luminous` 使用 dark；
- 移除 `pop-brutal`、`pixel` 的白名单。

### `astro.config.mjs`

同步启动脚本中的主题白名单和亮暗主题映射，只保留：

- `base`
- `neo-retro`
- `luminous`

### `src/styles/custom.css`

重整全局样式入口：

- 只导入 `base.css`、`neo-retro.css`、`luminous.css`；
- 移除 `pop-brutal`、`pixel` 的主题覆盖；
- 保留 Starlight 变量覆盖，但减少对不稳定内部结构的侵入；
- 为首页增加可复用 class；
- 加强 Markdown 内容的表格、代码块、blockquote 和链接样式；
- 增加 `prefers-reduced-motion` 下的安全降级。

### `src/styles/themes/*`

保留并打磨：

- `base.css`
- `neo-retro.css`
- `luminous.css`

删除或停止引用：

- `pop-brutal.css`
- `pixel.css`

主题文件只定义 token 和主题特定组件质感，不承载页面结构。

## 数据流

首页 topic 数据保持在 `src/pages/index.astro` 内部常量中，避免引入额外数据层。每个 topic 至少包含：

- 名称；
- 简短定位；
- 英文入口；
- 中文入口；
- 推荐路径；
- 适合读者或主要任务。

主题选择的数据流保持当前模式：

1. 启动脚本在页面渲染早期读取 `localStorage`；
2. 校验主题值是否属于允许列表；
3. 设置 `html[data-theme-pack]` 和 `html[data-theme]`；
4. 主题切换器加载后同步按钮状态；
5. 用户切换时更新 DOM 和 `localStorage`。

## 错误与降级

- `localStorage` 不可用时使用 `base`。
- 存储了已删除主题时回落到 `base`。
- 禁用 JavaScript 时页面仍显示默认 `base` 样式，只是无法切换主题。
- `prefers-reduced-motion: reduce` 时禁用非必要动画和滚动行为。
- 移动端控件允许换行，避免遮挡搜索、语言选择和导航。

## 可访问性

- 首页使用语义化 `main`、`section`、`article` 和明确标题层级。
- 主题切换器使用 radio group 语义。
- 链接和按钮具备可见 focus 状态。
- 三套主题都需要保持正文、代码、链接和卡片的对比度。
- 不使用依赖颜色才能理解的信息提示。

## 实现范围

本次实现允许修改：

- `astro.config.mjs`
- `src/pages/index.astro`
- `src/components/StyleSwitcher.astro`
- `src/components/starlight/MobileMenuFooter.astro`，仅在移动端主题控件需要加入时修改
- `src/styles/custom.css`
- `src/styles/themes/base.css`
- `src/styles/themes/neo-retro.css`
- `src/styles/themes/luminous.css`
- `src/styles/themes/pop-brutal.css`，仅用于删除
- `src/styles/themes/pixel.css`，仅用于删除

不修改：

- `src/content/docs/**`
- `content-plans/**`
- `tools/**`
- 部署配置，除非实现过程中发现主题资源路径必须同步。

## 风险

- Starlight 内部 class 变更可能影响覆盖样式。处理方式是优先使用 CSS variables 和较稳定的外层 class。
- 首页样式如果全部写在页面内，会变得难维护。处理方式是将可复用视觉 class 放入 `custom.css`。
- 三套主题差异过大可能造成维护成本上升。处理方式是共享布局和语义，只在 token 与局部质感上分化。
- 当前工作区有较多未提交改动。实现时需要只处理本设计范围内文件，不回滚他人改动。

## 验收标准

由于项目指令要求默认不运行测试、构建或验证命令，本次验收以代码审阅和静态检查为主：

- 主题切换列表只剩 `Base / Retro / Luminous`。
- `pop-brutal`、`pixel` 不再被启动脚本、组件或 CSS 入口引用。
- 根首页能直接表达站点定位、topic 入口和双语入口。
- 文档页 shell 与 Markdown 元素在三套主题中具有一致层级和可读性。
- 移动端样式有明确响应式规则，避免 header 和切换器挤压。
- 公开文档内容不出现内部策划字段。
