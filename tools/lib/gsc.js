export function summarizeGscCsv(csv, { siteUrl = '' } = {}) {
  const rows = parseCsv(csv);
  const summary = { siteUrl, topics: {} };

  for (const row of rows) {
    const query = get(row, 'query');
    const page = get(row, 'page');
    const clicks = toNumber(get(row, 'clicks'));
    const impressions = toNumber(get(row, 'impressions'));
    const position = toNumber(get(row, 'position'));
    const topicInfo = extractTopic(page, siteUrl);
    if (!topicInfo) continue;

    const topic = ensureTopic(summary.topics, topicInfo.topic);
    topic.clicks += clicks;
    topic.impressions += impressions;
    topic.positionWeight += position * impressions;
    topic.rows += 1;

    const locale = topic.locales[topicInfo.locale] || { clicks: 0, impressions: 0, rows: 0 };
    locale.clicks += clicks;
    locale.impressions += impressions;
    locale.rows += 1;
    topic.locales[topicInfo.locale] = locale;

    topic.topQueries.push({ query, page, clicks, impressions, position });
  }

  for (const topic of Object.values(summary.topics)) {
    topic.ctr = topic.impressions > 0 ? topic.clicks / topic.impressions : 0;
    topic.averagePosition = topic.impressions > 0 ? topic.positionWeight / topic.impressions : 0;
    topic.topQueries.sort((a, b) => b.clicks - a.clicks || b.impressions - a.impressions);
    topic.topQueries = topic.topQueries.slice(0, 10);
    delete topic.positionWeight;
  }

  return summary;
}

export function parseCsv(csv) {
  const lines = csv.trim().split(/\r?\n/).filter(Boolean);
  if (lines.length === 0) return [];
  const headers = splitCsvLine(lines[0]).map((header) => header.trim());
  return lines.slice(1).map((line) => {
    const values = splitCsvLine(line);
    return Object.fromEntries(headers.map((header, index) => [header, values[index] ?? '']));
  });
}

function splitCsvLine(line) {
  const values = [];
  let current = '';
  let quoted = false;
  for (let i = 0; i < line.length; i += 1) {
    const char = line[i];
    const next = line[i + 1];
    if (char === '"' && quoted && next === '"') {
      current += '"';
      i += 1;
    } else if (char === '"') {
      quoted = !quoted;
    } else if (char === ',' && !quoted) {
      values.push(current);
      current = '';
    } else {
      current += char;
    }
  }
  values.push(current);
  return values;
}

function extractTopic(page, siteUrl) {
  if (!page) return null;
  const url = page.startsWith('http') ? new URL(page) : new URL(page, siteUrl || 'https://example.com');
  const [, locale, topic] = url.pathname.split('/');
  if (!['en', 'zh'].includes(locale) || !topic) return null;
  return { locale, topic };
}

function ensureTopic(topics, slug) {
  topics[slug] ||= {
    clicks: 0,
    impressions: 0,
    ctr: 0,
    averagePosition: 0,
    positionWeight: 0,
    rows: 0,
    locales: {},
    topQueries: [],
  };
  return topics[slug];
}

function get(row, key) {
  const match = Object.keys(row).find((name) => name.toLowerCase() === key.toLowerCase());
  return match ? row[match] : '';
}

function toNumber(value) {
  const normalized = String(value ?? '').trim().replace(/%$/, '');
  const number = Number(normalized);
  return Number.isFinite(number) ? number : 0;
}
