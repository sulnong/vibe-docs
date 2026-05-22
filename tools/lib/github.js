const GITHUB_REPO_RE = /^[A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+$/;

export function parseRepoSlug(input) {
  if (!input || typeof input !== 'string') {
    throw new Error('A GitHub repository is required, for example owner/name.');
  }

  let value = input.trim();
  if (value.startsWith('http://') || value.startsWith('https://')) {
    const url = new URL(value);
    if (!url.hostname.endsWith('github.com')) {
      throw new Error(`Expected a github.com URL, received ${url.hostname}.`);
    }
    const [owner, name] = url.pathname.replace(/^\/+|\/+$/g, '').split('/');
    value = `${owner}/${name ?? ''}`;
  }

  value = value.replace(/\.git$/i, '');
  if (!GITHUB_REPO_RE.test(value)) {
    throw new Error(`Invalid GitHub repository "${input}". Use owner/name or a GitHub URL.`);
  }

  const [owner, name] = value.split('/');
  return {
    owner,
    name,
    fullName: `${owner}/${name}`,
    slug: slugifyRepoName(name),
  };
}

export function slugifyRepoName(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export async function fetchGitHubRepo(input, { token = process.env.GITHUB_TOKEN } = {}) {
  const repo = parseRepoSlug(input);
  const response = await fetch(`https://api.github.com/repos/${repo.fullName}`, {
    headers: githubHeaders(token),
  });
  if (!response.ok) {
    throw new Error(`GitHub repo lookup failed for ${repo.fullName}: ${response.status} ${response.statusText}`);
  }
  const data = await response.json();
  return normalizeRepo(data, repo);
}

export async function discoverRepos({ query, limit = 10, token = process.env.GITHUB_TOKEN } = {}) {
  const since = new Date(Date.now() - 1000 * 60 * 60 * 24 * 30).toISOString().slice(0, 10);
  const q = query || `stars:>500 pushed:>${since}`;
  const url = new URL('https://api.github.com/search/repositories');
  url.searchParams.set('q', q);
  url.searchParams.set('sort', 'stars');
  url.searchParams.set('order', 'desc');
  url.searchParams.set('per_page', String(Math.min(Number(limit) || 10, 50)));

  const response = await fetch(url, { headers: githubHeaders(token) });
  if (!response.ok) {
    throw new Error(`GitHub discovery failed: ${response.status} ${response.statusText}`);
  }
  const data = await response.json();
  return data.items.map((item, index) => normalizeRepo(item, parseRepoSlug(item.full_name), index + 1));
}

function githubHeaders(token) {
  return {
    Accept: 'application/vnd.github+json',
    'X-GitHub-Api-Version': '2022-11-28',
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  };
}

function normalizeRepo(data, repo, trendingRank) {
  return {
    repo: repo.fullName,
    owner: repo.owner,
    name: repo.name,
    slug: repo.slug,
    description: data.description || '',
    url: data.html_url || `https://github.com/${repo.fullName}`,
    stars: data.stargazers_count || 0,
    forks: data.forks_count || 0,
    language: data.language || '',
    pushedAt: data.pushed_at || '',
    createdAt: data.created_at || '',
    latestReleaseAt: '',
    trendingRank,
  };
}
