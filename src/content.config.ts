import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    // Optional on-page H1. Falls back to `title` when omitted, so the SEO
    // <title> and the visible heading can differ where a post needs it.
    heading: z.string().optional(),
    description: z.string(),
    pubDate: z.coerce.date(),
    tag: z.string().optional(),
    relatedPages: z.array(z.object({
      label: z.string(),
      url: z.string(),
    })).optional(),
  }),
});

const docs = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/docs' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    section: z.string(),
    order: z.number().default(0),
    relatedPages: z.array(z.object({
      label: z.string(),
      url: z.string(),
    })).optional(),
  }),
});

export const collections = { blog, docs };
