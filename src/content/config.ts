import { z, defineCollection } from 'astro:content';

const photosCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    id: z.string(),
    image: z.string(),
  }),
});

export const collections = {
  'photos': photosCollection,
};