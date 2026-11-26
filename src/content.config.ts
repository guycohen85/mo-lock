import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// One Markdown file per service page -> /services/<id>/
const services = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/services' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      order: z.number(),
      /** Ids of the cards in src/data/site.ts that link to this page */
      cards: z.array(z.string()),
      seoTitle: z.string(),
      description: z.string().max(170),
      lead: z.string(),
      /** Content the client still has to supply, shown as [חסר: ...] */
      missing: z.array(z.string()).default([]),
      photos: z
        .array(z.object({ src: image(), alt: z.string(), caption: z.string() }))
        .default([]),
      video: z
        .object({ src: z.string(), poster: image(), caption: z.string() })
        .optional(),
      faqs: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
    }),
});

export const collections = { services };
