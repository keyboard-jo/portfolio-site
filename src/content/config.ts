import { defineCollection, z } from 'astro:content';

const postsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    id: z.string(),
    permalink: z.string(),
    title: z.string().max(60),
    subtitle: z.string(),
    date: z.coerce.date(), 
    coverImage: z.string(), 
    coverWidth: z.number().default(1200),
    coverHeight: z.number().default(1200),
    tags: z.array(z.string()).optional()
  }),
});

export const collections = {
  'posts': postsCollection,
};