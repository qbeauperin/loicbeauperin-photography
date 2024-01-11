import { z, defineCollection } from 'astro:content';

const photosCollection = defineCollection({

});

export const collections = {
  'photos': photosCollection,
};