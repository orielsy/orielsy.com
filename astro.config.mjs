import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const contentRoot = fileURLToPath(new URL('./src/content/', import.meta.url));

function normalizeSitemapPath(pathname) {
  if (pathname === '/') return '/';
  return `/${pathname.replace(/^\/+|\/+$/g, '')}/`;
}

function collectUnpublishedPaths(directory, pathPrefix, paths) {
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const entryPath = join(directory, entry.name);

    if (entry.isDirectory()) {
      collectUnpublishedPaths(entryPath, `${pathPrefix}/${entry.name}`, paths);
      continue;
    }

    if (!/\.(md|mdx)$/.test(entry.name)) continue;

    const source = readFileSync(entryPath, 'utf8');
    const frontmatter = source.match(/^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/);
    const published = /^published:\s*true\s*$/m.test(frontmatter?.[1] || '');

    if (!published) {
      const slug = entry.name.replace(/\.(md|mdx)$/, '');
      paths.add(normalizeSitemapPath(`/${pathPrefix}/${slug}`));
    }
  }
}

const unpublishedSitemapPaths = new Set();
for (const collection of ['research', 'projects']) {
  collectUnpublishedPaths(join(contentRoot, collection), collection, unpublishedSitemapPaths);
}

// https://astro.build/config
export default defineConfig({
  site: 'https://orielsy.com',
  output: 'static',
  integrations: [
    mdx(),
    sitemap({
      filter: (page) => {
        const pathname = new URL(page).pathname;
        return (
          normalizeSitemapPath(pathname) !== '/404/' &&
          !unpublishedSitemapPaths.has(normalizeSitemapPath(pathname))
        );
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    shikiConfig: {
      themes: {
        light: 'github-light',
        dark: 'tokyo-night',
      },
      wrap: true,
    },
  },
});
