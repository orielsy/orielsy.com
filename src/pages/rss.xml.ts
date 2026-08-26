import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const research = await getCollection('research', ({ data }) => {
    return data.status === 'published';
  });

  const sortedResearch = research.sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );

  return rss({
    title: 'Orielsy Diaz — Research & Writing',
    description: 'Technical essays, architecture explorations, and systems design by Orielsy Diaz.',
    site: context.site || 'https://orielsy.com',
    items: sortedResearch.map((item) => ({
      title: item.data.title,
      description: item.data.description,
      pubDate: item.data.pubDate,
      link: `/research/${item.id}/`,
      categories: item.data.tags,
    })),
    customData: `<language>en-us</language>`,
  });
}
