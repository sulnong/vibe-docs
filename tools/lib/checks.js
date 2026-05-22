import { readdir, readFile, stat } from 'node:fs/promises';
import { join } from 'node:path';

const PLACEHOLDER_RE = /\b(TODO|TBD|lorem ipsum|coming soon|placeholder)\b/i;
const URL_RE = /https?:\/\/[^\s)>\]]+/i;

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
