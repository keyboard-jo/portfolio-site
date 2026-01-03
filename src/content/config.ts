import { defineCollection, z } from 'astro:content';

const postsCollection = defineCollection({
  type: 'content',
  // We destructure 'image' from the context to use it for local file validation
  schema: ({ image }) => z.object({
    id: z.string(),
    permalink: z.string(),
    title: z.string().max(60),
    subtitle: z.string(),
    date: z.coerce.date(), // 'coerce' helps turn string dates "2025-01-01" into JS Date objects
    
    // This helper validates that the local image exists relative to the .mdx file
    coverImage: image(), 
    
    tags: z.array(z.string()).optional()
  }),
});

export const collections = {
  'posts': postsCollection,
};