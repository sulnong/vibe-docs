import { readdir, readFile, stat } from 'node:fs/promises';
import { join } from 'node:path';

const PLACEHOLDER_RE = /\b(TODO|TBD|lorem ipsum|coming soon|placeholder)\b/i;
const URL_RE = /https?:\/\/[^\s)>\]]+/i;
const LIMITATION_SIGNAL_RE = /\b(limitation|tradeoff|alternative|instead|avoid|mistake|troubleshoot|unsupported|not necessary|may not|does not replace|only when|only what|server rendering|client directive|base path|official source|source map|quality gate)\b|限制|取舍|替代|不适合|误区|排错|不要|未必|不能替代|只有|只在|服务端渲染|按需|base path|官方资料|来源|质量门槛/i;
const NEXT_STEP_SIGNAL_RE = /\b(next steps?|start with|learn first|checklist|deploy|read|verify|try|test|compare|use the official|inspect|add|create|move into|jump to)\b|下一步|先|开始|检查清单|部署|阅读|验证|尝试|测试|对比|继续|查看|添加|创建|再看|跳到/i;

export async function checkTopicContent({ docsRoot = 'src/content/docs', topicSlug } = {}) {
  const failures = [];
  const warnings = [];
  if (!topicSlug) throw new Error('topicSlug is required.');

  const enDir = join(docsRoot, 'en', topicSlug);
  const zhDir = join(docsRoot, 'zh', topicSlug);
  const enFiles = await markdownFiles(enDir).catch(() => []);
  const zhFiles = await markdownFiles(zhDir).catch(() => []);

  if (enFiles.length < 8 || enFiles.length > 15) {
    failures.push(`English topic ${topicSlug} must have 8-15 pages; found ${enFiles.length}.`);
  }
  if (zhFiles.length < 8 || zhFiles.length > 15) {
    failures.push(`Chinese topic ${topicSlug} must have 8-15 pages; found ${zhFiles.length}.`);
  }

  const enNames = enFiles.map(stripExtension).sort();
  const zhNames = zhFiles.map(stripExtension).sort();
  if (enNames.join(',') !== zhNames.join(',')) {
    failures.push(`English and Chinese page sets differ for ${topicSlug}.`);
  }

  for (const locale of ['en', 'zh']) {
    const files = locale === 'en' ? enFiles : zhFiles;
    const dir = locale === 'en' ? enDir : zhDir;
    for (const file of files) {
      const path = join(dir, file);
      const content = await readFile(path, 'utf8');
      const frontmatter = parseFrontmatter(content);
      if (!frontmatter.title) failures.push(`${path} is missing frontmatter title.`);
      if (!frontmatter.description || frontmatter.description.length < 40) {
        failures.push(`${path} needs a frontmatter description of at least 40 characters.`);
      }
      if (PLACEHOLDER_RE.test(content)) failures.push(`${path} contains placeholder text.`);
      if (!URL_RE.test(content)) failures.push(`${path} needs at least one source URL.`);
      if (!hasHeading(content, 'Sources')) {
        failures.push(`${path} needs a Sources section for credible usable publication.`);
      }
      if (!LIMITATION_SIGNAL_RE.test(content)) {
        failures.push(`${path} needs limitations, tradeoffs, alternatives, or troubleshooting signals for credible usable publication.`);
      }
      if (!NEXT_STEP_SIGNAL_RE.test(content)) {
        failures.push(`${path} needs next-step or action-path signals for credible usable publication.`);
      }
    }
  }

  for (const name of enNames) {
    if (!zhNames.includes(name)) continue;
    const enContent = await readFile(join(enDir, `${name}.md`), 'utf8').catch(() => '');
    const zhContent = await readFile(join(zhDir, `${name}.md`), 'utf8').catch(() => '');
    if (enContent && zhContent && enContent === zhContent) {
      warnings.push(`${topicSlug}/${name} has identical English and Chinese content; review localization before publishing.`);
    }
  }

  return { ok: failures.length === 0, failures, warnings };
}

export async function listTopics({ docsRoot = 'src/content/docs' } = {}) {
  const enRoot = join(docsRoot, 'en');
  const entries = await readdir(enRoot).catch(() => []);
  const topics = [];
  for (const entry of entries) {
    const path = join(enRoot, entry);
    if ((await stat(path)).isDirectory()) topics.push(entry);
  }
  return topics;
}

function parseFrontmatter(content) {
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return {};
  return Object.fromEntries(
    match[1]
      .split(/\r?\n/)
      .map((line) => line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/))
      .filter(Boolean)
      .map(([, key, value]) => [key, value.replace(/^['"]|['"]$/g, '')]),
  );
}

async function markdownFiles(dir) {
  const entries = await readdir(dir);
  return entries.filter((entry) => /\.mdx?$/.test(entry)).sort();
}

function stripExtension(file) {
  return file.replace(/\.mdx?$/, '');
}

function hasHeading(content, heading) {
  const escaped = heading.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  return new RegExp(`^##\\s+${escaped}\\s*$`, 'im').test(content);
}
