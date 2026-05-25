import { defineCollection } from 'astro:content';
import { docsLoader, i18nLoader } from '@astrojs/starlight/loaders';
import { docsSchema, i18nSchema } from '@astrojs/starlight/schema';
import { z } from 'astro/zod';

export const collections = {
  docs: defineCollection({
    loader: docsLoader(),
    schema: docsSchema({
      extend: z.object({
        topics: z.array(z.string()).optional(),
        tags: z.array(z.string()).optional(),
        entities: z.array(z.string()).optional(),
        related: z
          .array(
            z.object({
              title: z.string(),
              href: z.string(),
              relation: z.string().optional(),
            })
          )
          .optional(),
      }),
    }),
  }),
  i18n: defineCollection({ loader: i18nLoader(), schema: i18nSchema() }),
};
