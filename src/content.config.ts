import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const research = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/research' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
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
    featured: z.boolean().default(false),
    github: z.string().url().optional(),
    demo: z.string().url().optional(),
    readingTime: z.string().optional(),
    heroImage: z.string().optional(),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    date: z.coerce.date(),
    status: z.enum(['Active', 'Prototype', 'Completed', 'Archived', 'In Progress']).default('Active'),
    role: z.string().default('Architect & Lead Developer'),
    technologies: z.array(z.string()).default([]),
    architecture: z.string().optional(),
    problem: z.string().optional(),
    solution: z.string().optional(),
    github: z.string().url().optional(),
    demo: z.string().url().optional(),
    featured: z.boolean().default(false),
    associatedResearch: z.string().optional(),
    heroImage: z.string().optional(),
  }),
});

export const collections = { research, projects };
