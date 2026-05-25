const TOPIC_HOSTS = new Map([
  ['astro.docxing.top', 'astro'],
  ['hermes.docxing.top', 'hermes'],
  ['hermes-agent.docxing.top', 'hermes'],
  ['swarms.docxing.top', 'swarms'],
]);

const ASSET_PATHS = [
  /^\/_astro\//,
  /^\/favicon(?:\..*)?$/,
  /^\/robots\.txt$/,
  /^\/sitemap-index\.xml$/,
  /^\/sitemap-\d+\.xml$/,
  /^\/manifest\.webmanifest$/,
];

export async function onRequest(context) {
  const url = new URL(context.request.url);
  const topic = TOPIC_HOSTS.get(url.hostname.toLowerCase());

  if (!topic || isAssetPath(url.pathname)) {
    return context.next();
  }

  const rewrittenPath = topicPath(url.pathname, topic);
  if (!rewrittenPath) {
    return context.next();
  }

  url.pathname = rewrittenPath;
  return context.env.ASSETS.fetch(new Request(url.toString(), context.request));
}

function isAssetPath(pathname) {
  return ASSET_PATHS.some((pattern) => pattern.test(pathname));
}

function topicPath(pathname, topic) {
  if (pathname === '/' || pathname === '') {
    return `/en/${topic}/`;
  }

  const match = pathname.match(/^\/(en|zh)(?:\/(.*))?$/);
  if (!match) {
    return null;
  }

  const locale = match[1];
  const rest = match[2] ?? '';

  if (!rest) {
    return `/${locale}/${topic}/`;
  }

  if (rest === topic || rest.startsWith(`${topic}/`)) {
    return `/${locale}/${rest}`;
  }

  return `/${locale}/${topic}/${rest}`;
}
