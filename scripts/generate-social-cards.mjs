import {
  existsSync,
  mkdirSync,
  readFileSync,
  readdirSync,
  rmSync,
} from 'node:fs';
import { delimiter, dirname, extname, join, relative, resolve } from 'node:path';
import { spawn, spawnSync } from 'node:child_process';

const ROOT = process.cwd();
const PORT = Number(process.env.SOCIAL_CARD_PORT || 4328);
const HOST = `http://127.0.0.1:${PORT}`;
const OUTPUT_ROOT = resolve(ROOT, 'public/social');
const ASTRO_ENTRY = resolve(ROOT, 'node_modules/astro/astro.js');

function fail(message) {
  console.error(`\n[social-cards] ${message}\n`);
  process.exitCode = 1;
}

function walkContent(directory) {
  const files = [];

  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) files.push(...walkContent(path));
    if (entry.isFile() && ['.md', '.mdx'].includes(extname(entry.name))) files.push(path);
  }

  return files;
}

function publishedSlugs(collection) {
  const directory = resolve(ROOT, `src/content/${collection}`);
  return walkContent(directory)
    .filter((path) => {
      const source = readFileSync(path, 'utf8');
      const frontmatter = source.match(/^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/);
      return /^published:\s*true\s*$/m.test(frontmatter?.[1] || '');
    })
    .map((path) => relative(directory, path).replace(/\\/g, '/').replace(/\.(md|mdx)$/, ''))
    .sort();
}

function executableOnPath(names) {
  const pathEntries = (process.env.PATH || '').split(delimiter).filter(Boolean);
  const extensions = process.platform === 'win32'
    ? (process.env.PATHEXT || '.EXE;.CMD;.BAT').split(';')
    : [''];

  for (const name of names) {
    for (const directory of pathEntries) {
      for (const extension of extensions) {
        const candidate = join(directory, process.platform === 'win32' ? `${name}${extension}` : name);
        if (existsSync(candidate)) return candidate;
      }
    }
  }

  return null;
}

function findBrowser() {
  if (process.env.SOCIAL_CARD_BROWSER) {
    const configured = resolve(process.env.SOCIAL_CARD_BROWSER);
    if (existsSync(configured)) return configured;
    throw new Error(`SOCIAL_CARD_BROWSER does not exist: ${configured}`);
  }

  const fromPath = executableOnPath([
    'chromium',
    'chromium-browser',
    'google-chrome',
    'google-chrome-stable',
    'chrome',
    'msedge',
    'microsoft-edge',
  ]);
  if (fromPath) return fromPath;

  const candidates = process.platform === 'darwin'
    ? [
        '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
        '/Applications/Chromium.app/Contents/MacOS/Chromium',
        '/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge',
      ]
    : process.platform === 'win32'
      ? [
          join(process.env.PROGRAMFILES || '', 'Google/Chrome/Application/chrome.exe'),
          join(process.env['PROGRAMFILES(X86)'] || '', 'Google/Chrome/Application/chrome.exe'),
          join(process.env.LOCALAPPDATA || '', 'Google/Chrome/Application/chrome.exe'),
          join(process.env.PROGRAMFILES || '', 'Microsoft/Edge/Application/msedge.exe'),
          join(process.env['PROGRAMFILES(X86)'] || '', 'Microsoft/Edge/Application/msedge.exe'),
        ]
      : [
          '/usr/bin/chromium',
          '/usr/bin/chromium-browser',
          '/usr/bin/google-chrome',
          '/usr/bin/google-chrome-stable',
          '/usr/bin/microsoft-edge',
        ];

  return candidates.find((candidate) => candidate && existsSync(candidate)) || null;
}

function encodedSlug(slug) {
  return slug.split('/').map(encodeURIComponent).join('/');
}

function readPngDimensions(path) {
  const bytes = readFileSync(path);
  const pngSignature = '89504e470d0a1a0a';
  if (bytes.subarray(0, 8).toString('hex') !== pngSignature || bytes.length < 24) {
    throw new Error(`Generated file is not a valid PNG: ${path}`);
  }

  return {
    width: bytes.readUInt32BE(16),
    height: bytes.readUInt32BE(20),
  };
}

async function waitForServer(url, timeoutMs = 30_000) {
  const started = Date.now();

  while (Date.now() - started < timeoutMs) {
    try {
      const response = await fetch(url);
      if (response.ok) return;
    } catch {
      // Server is still starting.
    }
    await new Promise((resolvePromise) => setTimeout(resolvePromise, 250));
  }

  throw new Error(`Timed out waiting for Astro preview server at ${url}`);
}

function capture(browser, url, output) {
  mkdirSync(dirname(output), { recursive: true });

  const args = [
    '--headless=new',
    '--hide-scrollbars',
    '--disable-gpu',
    '--disable-dev-shm-usage',
    '--disable-background-networking',
    '--no-first-run',
    '--no-default-browser-check',
    '--force-device-scale-factor=1',
    '--window-size=1200,630',
    '--virtual-time-budget=5000',
    '--run-all-compositor-stages-before-draw',
    `--screenshot=${output}`,
  ];

  if (typeof process.getuid === 'function' && process.getuid() === 0) {
    args.push('--no-sandbox');
  }

  args.push(url);

  const result = spawnSync(browser, args, {
    cwd: ROOT,
    encoding: 'utf8',
    timeout: 30_000,
  });

  if (result.status !== 0) {
    throw new Error(
      `Browser capture failed for ${url}\n${result.stderr || result.stdout || 'Unknown browser error'}`,
    );
  }

  if (!existsSync(output)) {
    throw new Error(`Browser did not create expected screenshot: ${output}`);
  }

  const { width, height } = readPngDimensions(output);
  if (width !== 1200 || height !== 630) {
    throw new Error(`Expected 1200×630, received ${width}×${height}: ${output}`);
  }
}

async function main() {
  if (!existsSync(ASTRO_ENTRY)) {
    throw new Error(`Astro entry point not found at ${ASTRO_ENTRY}. Install repository dependencies first.`);
  }

  const browser = findBrowser();
  if (!browser) {
    throw new Error(
      'No Chromium-based browser was found. Install Chrome, Chromium, or Edge, or set SOCIAL_CARD_BROWSER to its executable path.',
    );
  }

  const research = publishedSlugs('research');
  const projects = publishedSlugs('projects');
  const cards = [
    {
      url: `${HOST}/social-preview/render/default/`,
      output: resolve(OUTPUT_ROOT, 'default.png'),
      label: 'default',
    },
    ...research.map((slug) => ({
      url: `${HOST}/social-preview/render/research/${encodedSlug(slug)}/`,
      output: resolve(OUTPUT_ROOT, 'research', `${slug}.png`),
      label: `research/${slug}`,
    })),
    ...projects.map((slug) => ({
      url: `${HOST}/social-preview/render/projects/${encodedSlug(slug)}/`,
      output: resolve(OUTPUT_ROOT, 'projects', `${slug}.png`),
      label: `projects/${slug}`,
    })),
  ];

  rmSync(OUTPUT_ROOT, { recursive: true, force: true });
  mkdirSync(OUTPUT_ROOT, { recursive: true });

  const server = spawn(
    process.execPath,
    [ASTRO_ENTRY, 'dev', '--host', '127.0.0.1', '--port', String(PORT), '--mode', 'social-preview'],
    {
      cwd: ROOT,
      stdio: ['ignore', 'pipe', 'pipe'],
    },
  );

  let serverErrors = '';
  server.stderr?.on('data', (chunk) => {
    serverErrors += chunk.toString();
  });

  try {
    await waitForServer(`${HOST}/social-preview/render/default/`);

    console.log(`[social-cards] Rendering ${cards.length} card(s) with ${browser}`);
    for (const card of cards) {
      capture(browser, card.url, card.output);
      console.log(`[social-cards] ✓ ${card.label}`);
    }

    console.log(`[social-cards] Generated ${cards.length} exact 1200×630 PNG(s) in public/social/`);
  } finally {
    server.kill('SIGTERM');
  }

  if (server.exitCode && server.exitCode !== 0 && serverErrors) {
    console.warn(`[social-cards] Astro preview server output:\n${serverErrors}`);
  }
}

main().catch((error) => {
  fail(error instanceof Error ? error.message : String(error));
});
