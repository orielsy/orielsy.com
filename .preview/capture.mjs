import { chromium } from 'playwright';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';

const origin = process.env.PREVIEW_ORIGIN || 'http://127.0.0.1:4321';
const routesFile = '.preview/routes.txt';
const outputRoot = 'branch-preview/routes';

const variants = [
  { name: 'desktop-light', width: 1440, height: 1100, colorScheme: 'light' },
  { name: 'desktop-dark', width: 1440, height: 1100, colorScheme: 'dark' },
  { name: 'mobile-light', width: 390, height: 844, colorScheme: 'light' },
  { name: 'mobile-dark', width: 390, height: 844, colorScheme: 'dark' },
];

function normalizeRoute(line) {
  return line.split('#', 1)[0].trim();
}

function routeSlug(route) {
  const stripped = route.replace(/^\/+|\/+$/g, '');
  if (!stripped) return 'home';
  return stripped.replace(/[^A-Za-z0-9._-]+/g, '-');
}

function formatError(entry) {
  return `[${entry.type}] ${entry.message}`;
}

const routeSource = await readFile(routesFile, 'utf8');
const routes = routeSource
  .split(/\r?\n/)
  .map(normalizeRoute)
  .filter(Boolean);

const browser = await chromium.launch({ headless: true });

try {
  for (const route of routes) {
    const slug = routeSlug(route);
    const routeDir = join(outputRoot, slug);
    await mkdir(routeDir, { recursive: true });

    for (const variant of variants) {
      const errors = [];
      const context = await browser.newContext({
        viewport: { width: variant.width, height: variant.height },
        colorScheme: variant.colorScheme,
      });
      const page = await context.newPage();

      page.on('console', (message) => {
        if (message.type() === 'error') {
          errors.push({ type: 'console', message: message.text() });
        }
      });

      page.on('pageerror', (error) => {
        errors.push({ type: 'pageerror', message: error.stack || error.message });
      });

      page.on('requestfailed', (request) => {
        const failure = request.failure();
        errors.push({
          type: 'requestfailed',
          message: `${request.method()} ${request.url()}${failure?.errorText ? ` - ${failure.errorText}` : ''}`,
        });
      });

      page.on('response', (response) => {
        if (response.status() >= 400) {
          errors.push({
            type: 'http',
            message: `${response.status()} ${response.request().method()} ${response.url()}`,
          });
        }
      });

      const url = new URL(route, origin).toString();
      console.log(`Capturing ${variant.name}: ${url}`);

      try {
        await page.goto(url, { waitUntil: 'networkidle' });
        await page.screenshot({
          path: join(routeDir, `${variant.name}.png`),
          fullPage: true,
        });
      } catch (error) {
        errors.push({
          type: 'capture',
          message: error instanceof Error ? error.stack || error.message : String(error),
        });
      }

      const errorPath = join(routeDir, `${variant.name}.errors.txt`);
      await mkdir(dirname(errorPath), { recursive: true });
      await writeFile(
        errorPath,
        errors.length ? `${errors.map(formatError).join('\n\n')}\n` : '',
        'utf8',
      );

      await context.close();
    }
  }
} finally {
  await browser.close();
}
