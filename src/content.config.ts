import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const news = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/news' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    // Set true only for clearly marked development placeholders.
    placeholder: z.boolean().default(false),
  }),
});

const publications = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/publications' }),
  schema: z.object({
    title: z.string(),
    authors: z.array(z.string()).default([]),
    journal: z.string(),
    year: z.number(),
    featured: z.boolean().default(false),
    doi: z.string().optional(),
    pubmed: z.string().optional(),
    pdf: z.string().optional(),
    // Provisional entries establish layout without claiming complete metadata.
    provisional: z.boolean().default(false),
  }),
});

const people = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/people' }),
  schema: z.object({
    name: z.string(),
    role: z.enum([
      'principal-investigator',
      'postdoctoral-fellow',
      'graduate-student',
      'research-staff',
      'undergraduate',
      'alumni',
    ]),
    order: z.number().default(0),
    title: z.string().optional(),
    institution: z.string().optional(),
    education: z.array(z.string()).default([]),
    awards: z.array(z.string()).default([]),
    links: z
      .array(
        z.object({
          label: z.string(),
          href: z.string().url(),
        }),
      )
      .default([]),
    portraitAlt: z.string().optional(),
  }),
});

export const collections = { news, publications, people };
