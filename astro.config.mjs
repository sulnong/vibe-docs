import sitemap from '@astrojs/sitemap';
import starlight from '@astrojs/starlight';
import { defineConfig } from 'astro/config';

import {
  awesomeSkillsCategories,
  skillsForCategory,
} from './src/data/awesome-skills-catalog.mjs';

const site = process.env.PUBLIC_SITE_URL || 'https://docxing.top';
const base = process.env.PUBLIC_BASE_PATH || '/';
const cloudflareToken = process.env.PUBLIC_CLOUDFLARE_ANALYTICS_TOKEN;
const styleBootScript = `(() => {
  const allowed = ['neo-retro'];
  const lightPacks = ['neo-retro'];
  const storageKey = 'astro-style-pack';
  const root = document.documentElement;
  let pack = 'neo-retro';
  try {
    const stored = localStorage.getItem(storageKey);
    if (allowed.includes(stored)) pack = stored;
  } catch {}
  const mode = lightPacks.includes(pack) ? 'light' : 'dark';
  root.setAttribute('data-theme-pack', pack);
  root.setAttribute('data-theme', mode);
  root.style.colorScheme = mode;
  try {
    localStorage.setItem('starlight-theme', mode);
  } catch {}
})();`;

const awesomeSkillsSidebar = [
  {
    label: 'Start',
    translations: { zh: '开始' },
    items: [
      { label: 'Overview', translations: { zh: '概览' }, link: '/awesome-skills/' },
    ],
  },
  ...awesomeSkillsCategories.map((category) => ({
    label: category.label.en,
    translations: { zh: category.label.zh },
    items: [
      {
        label: 'Overview',
        translations: { zh: '分类概览' },
        link: `/awesome-skills/categories/${category.key}/`,
      },
      ...skillsForCategory(category.key).map((skill) => ({
        label: skill.title,
        translations: { zh: skill.title },
        link: `/awesome-skills/${skill.slug}/`,
      })),
    ],
  })),
];

export default defineConfig({
  site,
  base,
  integrations: [
    sitemap(),
    starlight({
      title: {
        en: 'China Explained',
        zh: 'China Explained',
      },
      customCss: ['./src/styles/custom.css'],
      components: {
        Header: './src/components/starlight/Header.astro',
        Sidebar: './src/components/starlight/TopicSidebar.astro',
        MobileMenuFooter: './src/components/starlight/MobileMenuFooter.astro',
      },
      defaultLocale: 'en',
      locales: {
        en: {
          label: 'English',
          lang: 'en',
        },
        zh: {
          label: '简体中文',
          lang: 'zh-CN',
        },
      },
      head: [
        { tag: 'script', content: styleBootScript },
        { tag: 'meta', attrs: { name: 'robots', content: 'index, follow' } },
        ...(cloudflareToken
          ? [
              {
                tag: 'script',
                attrs: {
                  defer: true,
                  src: 'https://static.cloudflareinsights.com/beacon.min.js',
                  'data-cf-beacon': JSON.stringify({ token: cloudflareToken }),
                },
              },
            ]
          : []),
      ],
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/' },
      ],
      sidebar: [
        {
          label: 'Astro',
          translations: { zh: 'Astro' },
          items: [
            {
              label: 'Start',
              translations: { zh: '开始' },
              items: [
                { label: 'Overview', translations: { zh: '概览' }, link: '/astro/' },
                { label: 'Getting Started', translations: { zh: '快速开始' }, link: '/astro/getting-started/' },
                { label: 'Project Structure', translations: { zh: '项目结构' }, link: '/astro/project-structure/' },
              ],
            },
            {
              label: 'Core Concepts',
              translations: { zh: '核心概念' },
              items: [
                { label: 'Core Concepts', translations: { zh: '核心概念' }, link: '/astro/core-concepts/' },
                { label: 'Routing', translations: { zh: '路由' }, link: '/astro/routing/' },
                { label: 'Components & Islands', translations: { zh: '组件与 Islands' }, link: '/astro/components-and-islands/' },
              ],
            },
            {
              label: 'Authoring',
              translations: { zh: '内容创作' },
              items: [
                { label: 'Content Collections', translations: { zh: '内容集合' }, link: '/astro/content-collections/' },
                { label: 'Styling', translations: { zh: '样式' }, link: '/astro/styling/' },
                { label: 'MDX & Starlight', translations: { zh: 'MDX 与 Starlight' }, link: '/astro/mdx-and-starlight/' },
              ],
            },
            {
              label: 'Deployment',
              translations: { zh: '部署' },
              items: [
                { label: 'Build & Deploy', translations: { zh: '构建与部署' }, link: '/astro/build-and-deploy/' },
                { label: 'GitHub Pages', translations: { zh: 'GitHub Pages' }, link: '/astro/github-pages/' },
              ],
            },
            {
              label: 'Reference',
              translations: { zh: '参考' },
              items: [
                { label: 'Comparisons', translations: { zh: '对比' }, link: '/astro/comparisons/' },
                { label: 'FAQ', translations: { zh: '常见问题' }, link: '/astro/faq/' },
                { label: 'Resources', translations: { zh: '资源' }, link: '/astro/resources/' },
              ],
            },
          ],
        },
        {
          label: 'Hermes Agent',
          translations: { zh: 'Hermes Agent' },
          items: [
            {
              label: 'Start',
              translations: { zh: '开始' },
              items: [
                { label: 'Overview', translations: { zh: '概览' }, link: '/hermes/' },
                { label: 'Why and When', translations: { zh: '为什么与何时选择' }, link: '/hermes/why-and-when/' },
                { label: 'Installation', translations: { zh: '安装与版本基线' }, link: '/hermes/installation/' },
                { label: 'First Run', translations: { zh: '第一条可靠路径' }, link: '/hermes/first-run/' },
              ],
            },
            {
              label: 'Daily Work',
              translations: { zh: '日常工作流' },
              items: [
                { label: 'Providers and Models', translations: { zh: 'Provider 与模型配置' }, link: '/hermes/providers-and-models/' },
                { label: 'CLI and TUI', translations: { zh: 'CLI 与 TUI' }, link: '/hermes/cli-and-tui/' },
                { label: 'Tools and Toolsets', translations: { zh: '工具与工具集' }, link: '/hermes/tools-and-toolsets/' },
                { label: 'Context Files', translations: { zh: '项目指令与 Context Files' }, link: '/hermes/context-files/' },
                { label: 'Memory and Sessions', translations: { zh: '记忆与会话搜索' }, link: '/hermes/memory-and-sessions/' },
                { label: 'Skills System', translations: { zh: 'Skills 系统' }, link: '/hermes/skills/' },
              ],
            },
            {
              label: 'Automation',
              translations: { zh: '自动化与协作' },
              items: [
                { label: 'Security Model', translations: { zh: '安全模型' }, link: '/hermes/security-model/' },
                { label: 'Automation and Collaboration', translations: { zh: '自动化与协作' }, link: '/hermes/automation/' },
                { label: 'Integrations', translations: { zh: '集成与外部接口' }, link: '/hermes/integrations/' },
              ],
            },
            {
              label: 'Reference',
              translations: { zh: '参考' },
              items: [
                { label: 'Architecture', translations: { zh: '架构阅读路径' }, link: '/hermes/architecture/' },
                { label: 'Troubleshooting', translations: { zh: '排错路径' }, link: '/hermes/troubleshooting/' },
                { label: 'Alternatives', translations: { zh: '替代方案与对比' }, link: '/hermes/alternatives/' },
                { label: 'Resources', translations: { zh: '资源与更新追踪' }, link: '/hermes/resources/' },
              ],
            },
          ],
        },
        {
          label: 'Swarms',
          translations: { zh: 'Swarms' },
          items: [
            {
              label: 'Start',
              translations: { zh: '开始' },
              items: [
                { label: 'Overview', translations: { zh: '概览' }, link: '/swarms/' },
                { label: 'Why and When', translations: { zh: '为什么与何时选择' }, link: '/swarms/why-and-when/' },
                { label: 'Installation', translations: { zh: '安装与环境配置' }, link: '/swarms/installation/' },
                { label: 'Quickstart', translations: { zh: '快速开始' }, link: '/swarms/quickstart/' },
                { label: 'Core Concepts', translations: { zh: '核心概念' }, link: '/swarms/core-concepts/' },
              ],
            },
            {
              label: 'Agent Development',
              translations: { zh: '单 Agent 开发' },
              items: [
                { label: 'Agent Configuration', translations: { zh: 'Agent 配置地图' }, link: '/swarms/agent-configuration/' },
                { label: 'Agent Tools', translations: { zh: 'Agent 工具' }, link: '/swarms/agent-tools/' },
                { label: 'Memory and State', translations: { zh: '记忆与状态' }, link: '/swarms/memory-and-state/' },
                { label: 'Structured Outputs', translations: { zh: '结构化输出' }, link: '/swarms/structured-outputs/' },
                { label: 'Reasoning Agents', translations: { zh: 'Reasoning Agents' }, link: '/swarms/reasoning-agents/' },
              ],
            },
            {
              label: 'Architectures',
              translations: { zh: '多 Agent 架构' },
              items: [
                { label: 'Architecture Overview', translations: { zh: '架构总览' }, link: '/swarms/architectures/' },
                { label: 'SequentialWorkflow', translations: { zh: 'SequentialWorkflow' }, link: '/swarms/sequential-workflow/' },
                { label: 'ConcurrentWorkflow', translations: { zh: 'ConcurrentWorkflow' }, link: '/swarms/concurrent-workflow/' },
                { label: 'AgentRearrange', translations: { zh: 'AgentRearrange' }, link: '/swarms/agent-rearrange/' },
                { label: 'GraphWorkflow', translations: { zh: 'GraphWorkflow' }, link: '/swarms/graph-workflow/' },
                { label: 'SwarmRouter', translations: { zh: 'SwarmRouter' }, link: '/swarms/swarm-router/' },
                { label: 'Advanced Architectures', translations: { zh: '高级架构' }, link: '/swarms/advanced-architectures/' },
              ],
            },
            {
              label: 'Operations',
              translations: { zh: '生产与运维' },
              items: [
                { label: 'CLI and YAML', translations: { zh: 'CLI 与 YAML' }, link: '/swarms/cli-and-yaml/' },
                { label: 'Model Providers', translations: { zh: 'Model Providers' }, link: '/swarms/model-providers/' },
                { label: 'MCP and AOP', translations: { zh: 'MCP 与 AOP' }, link: '/swarms/mcp-and-aop/' },
                { label: 'Production', translations: { zh: '生产化最佳实践' }, link: '/swarms/production/' },
                { label: 'Scaling and Deployment', translations: { zh: '扩展与部署' }, link: '/swarms/scaling-and-deployment/' },
              ],
            },
            {
              label: 'Reference',
              translations: { zh: '参考' },
              items: [
                { label: 'Examples Cookbook', translations: { zh: 'Examples Cookbook' }, link: '/swarms/examples-cookbook/' },
                { label: 'Troubleshooting', translations: { zh: '排错路径' }, link: '/swarms/troubleshooting/' },
                { label: 'Alternatives', translations: { zh: '替代方案与对比' }, link: '/swarms/alternatives/' },
                { label: 'Version Notes', translations: { zh: '版本变化与迁移' }, link: '/swarms/version-notes/' },
                { label: 'Resources', translations: { zh: '资源与更新追踪' }, link: '/swarms/resources/' },
              ],
            },
          ],
        },
        {
          label: 'Awesome Skills',
          translations: { zh: 'Awesome Skills' },
          items: awesomeSkillsSidebar,
        },
        {
          label: 'China Economy',
          translations: { zh: '中国经济' },
          items: [
            {
              label: 'Start',
              translations: { zh: '开始' },
              items: [
                { label: 'Overview', translations: { zh: '概览' }, link: '/china-economy/' },
                {
                  label: 'China 2026 Reflation',
                  translations: { zh: '2026 中国经济' },
                  link: '/china-economy/china-2026-reflation-turning-point/',
                },
              ],
            },
          ],
        },
        {
          label: 'China AI',
          translations: { zh: '中国 AI' },
          items: [
            {
              label: 'Start',
              translations: { zh: '开始' },
              items: [
                { label: 'Overview', translations: { zh: '概览' }, link: '/china-ai/' },
                {
                  label: 'DeepSeek V4',
                  translations: { zh: 'DeepSeek V4' },
                  link: '/china-ai/deepseek-v4-efficiency-strategy/',
                },
                {
                  label: 'Doubao AI Shopping',
                  translations: { zh: '豆包 AI 购物' },
                  link: '/china-ai/doubao-ai-shopping-bytedance-ecommerce/',
                },
                {
                  label: 'OpenClaw AI Products',
                  translations: { zh: 'OpenClaw AI 产品' },
                  link: '/china-ai/openclaw-ai-product-environment/',
                },
              ],
            },
          ],
        },
        {
          label: 'China Industry',
          translations: { zh: '中国产业' },
          items: [
            {
              label: 'Start',
              translations: { zh: '开始' },
              items: [
                { label: 'Overview', translations: { zh: '概览' }, link: '/china-industry/' },
                {
                  label: 'Supply-Chain HQ',
                  translations: { zh: '供应链总部化' },
                  link: '/china-industry/china-supply-chain-headquarters-globalization/',
                },
              ],
            },
          ],
        },
        {
          label: 'China Society',
          translations: { zh: '中国社会' },
          items: [
            {
              label: 'Start',
              translations: { zh: '开始' },
              items: [
                { label: 'Overview', translations: { zh: '概览' }, link: '/china-society/' },
                {
                  label: 'Upward Mobility',
                  translations: { zh: '阶层流动' },
                  link: '/china-society/upward-mobility-ai-age/',
                },
              ],
            },
          ],
        },
      ],
    }),
  ],
});
