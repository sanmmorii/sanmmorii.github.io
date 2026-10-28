import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/index.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      role: z.string(),
      tech: z.array(z.string()),
      year: z.union([z.number(), z.string()]),
      demoUrl: z.string().optional(),
      repoUrl: z.string().optional(),
      cover: image(),
      featured: z.boolean().default(false),
    }),
});

const kegiatan = defineCollection({
  loader: glob({ pattern: '**/index.md', base: './src/content/kegiatan' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.string(),
      category: z.string(),
      description: z.string(),
      cover: image(),
    }),
});

export const collections = { projects, kegiatan };
