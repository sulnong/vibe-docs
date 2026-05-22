import sitemap from '@astrojs/sitemap';
import starlight from '@astrojs/starlight';
import { defineConfig } from 'astro/config';

const site = process.env.PUBLIC_SITE_URL || 'https://example.com';
const base = process.env.PUBLIC_BASE_PATH || '/';
const cloudflareToken = process.env.PUBLIC_CLOUDFLARE_ANALYTICS_TOKEN;
const styleBootScript = `(() => {
  const allowed = ['base', 'pop-brutal', 'luminous', 'neo-retro', 'pixel'];
  const storageKey = 'astro-style-pack';
  const root = document.documentElement;
  let pack = 'base';
  try {
    const stored = localStorage.getItem(storageKey);
    if (allowed.includes(stored)) pack = stored;
  } catch {}
  const mode = 'dark';
  root.setAttribute('data-theme-pack', pack);
  root.setAttribute('data-theme', mode);
  root.style.colorScheme = mode;
  try {
    localStorage.setItem('starlight-theme', 'dark');
  } catch {}
})();`;

export default defineConfig({
  site,
  base,
  integrations: [
    sitemap(),
    starlight({
      title: {
        en: 'Astro Guide',
        zh: 'Astro 指南',
      },
      customCss: ['./src/styles/custom.css'],
      components: {
        Header: './src/components/starlight/Header.astro',
        MobileMenuFooter: './src/components/starlight/MobileMenuFooter.astro',
        Sidebar: './src/components/starlight/Sidebar.astro',
        TableOfContents: './src/components/starlight/TableOfContents.astro',
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
      ],
    }),
  ],
});
