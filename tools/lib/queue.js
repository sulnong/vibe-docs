import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname } from 'node:path';

export const DEFAULT_QUEUE_PATH = 'workflow/topics.json';

export async function readQueue(path = DEFAULT_QUEUE_PATH) {
  try {
    const content = await readFile(path, 'utf8');
    const parsed = JSON.parse(content);
    return Array.isArray(parsed.topics) ? parsed : { topics: [] };
  } catch (error) {
    if (error.code === 'ENOENT') return { topics: [] };
    throw error;
  }
}

export async function writeQueue(queue, path = DEFAULT_QUEUE_PATH) {
  await mkdir(dirname(path), { recursive: true });
  await writeFile(path, `${JSON.stringify(queue, null, 2)}\n`);
}

export function upsertTopic(queue, topic) {
  const index = queue.topics.findIndex((item) => item.slug === topic.slug || item.repo === topic.repo);
  const existing = index >= 0 ? queue.topics[index] : {};
  const next = {
    ...existing,
    ...topic,
    updatedAt: new Date().toISOString(),
  };
  if (!next.createdAt) next.createdAt = next.updatedAt;
  if (index >= 0) queue.topics[index] = next;
  else queue.topics.push(next);
  return next;
}

export function findTopic(queue, slugOrRepo) {
  return queue.topics.find((topic) => topic.slug === slugOrRepo || topic.repo === slugOrRepo);
}
