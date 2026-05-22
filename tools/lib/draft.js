import { mkdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

import { buildOutline } from './outline.js';

export async function writeDraftTopic({ docsRoot = 'src/content/docs', topic }) {
  const outline = buildOutline({
    topicSlug: topic.slug,
    title: topic.title || topic.name || topic.slug,
    repo: topic.repo,
    sources: topic.sources || [`https://github.com/${topic.repo}`],
  });

  for (const locale of ['en', 'zh']) {
    const dir = join(docsRoot, locale, topic.slug);
    await mkdir(dir, { recursive: true });
    const pages = locale === 'en' ? outline.pages : outline.translations.zh;
    for (const page of pages) {
      await writeFile(join(dir, `${page.slug}.md`), renderPage({ locale, topic, page }));
    }
  }
  return outline;
}

function renderPage({ locale, topic, page }) {
  const source = `https://github.com/${topic.repo}`;
  const title = page.title;
  const description =
    locale === 'en'
      ? `${title} for ${topic.title || topic.slug}: a source-linked guide generated for review before publication.`
      : `${topic.title || topic.slug} 的${title}：面向发布前审核的、有来源链接、可本地化扩展、适合搜索收录的双语文档页面。`;

  if (locale === 'zh') {
    return `---
title: ${yamlString(title)}
description: ${yamlString(description)}
---

# ${title}

这篇页面围绕 \`${topic.repo}\` 整理，目标是帮助读者快速判断项目价值、使用方式和进一步阅读路径。正文保留统一事实基线，发布前需要结合官方文档、README 和 release notes 复核关键步骤。

## 适用场景

- 需要快速了解 ${topic.title || topic.slug} 的开发者。
- 正在比较同类开源项目的技术负责人。
- 希望用中文材料完成初步评估，再回到官方资料验证细节的读者。

## 审核重点

发布前请确认安装命令、版本要求、配置字段和限制条件都来自官方资料。若搜索结果显示用户更关心替代品、教程或中文问题，应在本页补充相应段落。

## Sources

- GitHub repository: ${source}
`;
  }

  return `---
title: ${yamlString(title)}
description: ${yamlString(description)}
---

# ${title}

This page summarizes \`${topic.repo}\` for developers who need a fast but source-linked evaluation path. It keeps the factual baseline tied to the official repository so the page can be reviewed, localized, and expanded without drifting away from source material.

## When to use this page

- You want to understand what ${topic.title || topic.slug} does before investing deeper research time.
- You are comparing open-source tools in the same category.
- You need a reviewable draft that can be expanded with official docs, README details, release notes, and examples.

## Review checklist

Before publication, confirm installation commands, version requirements, configuration fields, and limitations against official sources. If the search results show tutorial, comparison, or troubleshooting intent, expand this page with those concrete queries.

## Sources

- GitHub repository: ${source}
`;
}

function yamlString(value) {
  return JSON.stringify(String(value));
}
