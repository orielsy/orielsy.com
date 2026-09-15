import type { CollectionEntry } from 'astro:content';

export type SocialCardVariant = 'dark' | 'light';
export type SocialCardDensity = 'rich' | 'sparse';

export interface SocialCardData {
  title: string;
  type: string;
  description?: string;
  topic?: string;
  date?: string;
  variant: SocialCardVariant;
  metadataDensity: SocialCardDensity;
}

export const DEFAULT_SOCIAL_CARD: SocialCardData = {
  title: 'Architecture, interaction systems, and applied AI at the edge of the interface.',
  type: 'Senior Frontend Engineer · UI Architect',
  variant: 'dark',
  metadataDensity: 'sparse',
};

const formatDate = (date: Date) => new Intl.DateTimeFormat('en-US', {
  year: 'numeric',
  month: 'short',
  day: 'numeric',
  timeZone: 'UTC',
}).format(date);

export function researchSocialImagePath(id: string): string {
  return `/social/research/${id}.png`;
}

export function projectSocialImagePath(id: string): string {
  return `/social/projects/${id}.png`;
}

export function researchSocialCard(entry: CollectionEntry<'research'>): SocialCardData {
  const { data } = entry;
  const override = data.socialCard;
  const metadataDensity = override?.metadataDensity ?? 'rich';

  return {
    title: data.title,
    type: data.type,
    description: override?.description ?? (metadataDensity === 'rich' ? data.description : undefined),
    topic: override?.topic,
    date: metadataDensity === 'rich' ? formatDate(data.pubDate) : undefined,
    variant: override?.variant ?? 'dark',
    metadataDensity,
  };
}

function projectType(status: CollectionEntry<'projects'>['data']['status']): string {
  return `Project / ${status}`;
}

export function projectSocialCard(entry: CollectionEntry<'projects'>): SocialCardData {
  const { data } = entry;
  const override = data.socialCard;
  const metadataDensity = override?.metadataDensity ?? 'rich';

  return {
    title: data.title,
    type: projectType(data.status),
    description: override?.description ?? (metadataDensity === 'rich' ? data.summary : undefined),
    topic: override?.topic,
    date: metadataDensity === 'rich' ? formatDate(data.date) : undefined,
    variant: override?.variant ?? 'dark',
    metadataDensity,
  };
}
