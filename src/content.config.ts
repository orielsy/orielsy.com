import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const socialCard = z.object({
  variant: z.enum(['dark', 'light']).optional(),
  topic: z.string().optional(),
  metadataDensity: z.enum(['rich', 'sparse']).optional(),
  description: z.string().optional(),
}).optional();

const homeFeature = z.object({
  blurb: z.string().optional(),
  visual: z.string().optional(),
}).optional();

const research = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/research' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tldr: z.string().optional(),
    tldrLabel: z.string().optional(),
    pubDate: z.coerce.date(),
    researchNumber: z.number().int().positive().optional(),
    updatedDate: z.coerce.date().optional(),
    type: z.enum([
      'Article',
      'Research Note',
      'Architecture Exploration',
      'Experiment',
      'Essay',
      'Field Note',
    ]).default('Research Note'),
    tags: z.array(z.string()).default([]),
    status: z.enum(['published', 'draft']).default('published'),
    published: z.boolean().default(false),
    draft: z.boolean().default(false),
    featured: z.boolean().default(false),
    github: z.string().url().optional(),
    demo: z.string().optional(),
    readingTime: z.string().optional(),
    heroImage: z.string().optional(),
    socialCard,
    home: homeFeature,
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    projectName: z.string().optional(),
    summary: z.string(),
    date: z.coerce.date(),
    dateLabel: z.string().optional(),
    projectNumber: z.number().int().positive().optional(),
    status: z.enum(['Active', 'Prototype', 'Completed', 'Archived', 'In Progress']).default('Active'),
    published: z.boolean().default(false),
    draft: z.boolean().default(false),
    role: z.string().default('Creator / Developer'),
    technologies: z.array(z.string()).default([]),
    architecture: z.string().optional(),
    problem: z.string().optional(),
    solution: z.string().optional(),
    github: z.string().url().optional(),
    demo: z.string().optional(),
    demoCaption: z.string().optional(),
    featured: z.boolean().default(false),
    associatedResearch: z.array(
      z.string().regex(
        /^\/research\/[a-z0-9]+(?:[/-][a-z0-9]+)*$/,
        'Associated Research entries must use a /research/<stable-slug> route.',
      ),
    ).default([]),
    heroImage: z.string().optional(),
    socialCard,
    home: homeFeature,
  }),
});

export const collections = { research, projects };
