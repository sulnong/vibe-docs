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
  return slugifyTopic(name);
}

export function slugifyTopic(name) {
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

export function officialSourceCandidates(input) {
  const repo = parseRepoSlug(input);
  const base = `https://github.com/${repo.fullName}`;

  return [
    { kind: 'repository', url: base, usage: '仓库元信息、README、源码入口' },
    { kind: 'readme', url: `${base}#readme`, usage: '事实基线、定位、安装和示例' },
    { kind: 'docs-directory', url: `${base}/tree/main/docs`, usage: '仓库内文档；路径可能需要 agent 验证' },
    { kind: 'releases', url: `${base}/releases`, usage: '版本变化、breaking changes、升级注意事项' },
    { kind: 'examples', url: `${base}/tree/main/examples`, usage: '真实示例和可复用代码结构；路径可能需要 agent 验证' },
    { kind: 'issues', url: `${base}/issues`, usage: '坑点、排错、用户高频问题；必须回到官方事实交叉验证' },
    { kind: 'discussions', url: `${base}/discussions`, usage: '社区问题、采用疑虑和真实用法；必须回到官方事实交叉验证' },
    { kind: 'wiki', url: `${base}/wiki`, usage: '补充背景资料；是否存在需要 agent 验证' },
  ];
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
    homepage: data.homepage || '',
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
