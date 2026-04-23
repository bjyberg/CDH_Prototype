import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const tutorials = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/tutorials' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    tags: z.array(z.string()).optional().default([]),
    draft: z.boolean().optional().default(false),
  }),
});

const wiki = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/wiki' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()).optional().default([]),
    lastUpdated: z.coerce.date().optional(),
  }),
});

const catalog = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/catalog' }),
  schema: z.object({
    type: z.literal('Feature'),
    stac_version: z.string(),
    stac_extensions: z.array(z.string()).optional().default([]),
    id: z.string(),
    license: z.string().optional(),
    title: z.string(),
    description: z.string(),
    keywords: z.array(z.string()).optional().default([]),
    bbox: z.array(z.number()).length(4),
    geometry: z.any().optional(),
    properties: z.object({
      datetime: z.string().nullable(),
      start_datetime: z.string().optional(),
      end_datetime: z.string().optional(),
      // CDH extension fields
      'cdh:commodities': z.array(z.string()).optional(),
      'cdh:spatial_resolution': z.object({
        value: z.number(),
        unit: z.string(),
        description: z.string().optional(),
      }).optional(),
      'cdh:temporal_resolution': z.object({
        value: z.number(),
        unit: z.string(),
        description: z.string().optional(),
      }).optional(),
      'cdh:variable_summary': z.array(z.object({
        name: z.string(),
        definition: z.string(),
        unit: z.string(),
        interpretation: z.string(),
      })).optional(),
      'cdh:usecases': z.array(z.string()).optional(),
    }).passthrough(),
    links: z
      .array(
        z.object({
          rel: z.string(),
          href: z.string(),
          type: z.string().optional(),
          title: z.string().optional(),
        })
      )
      .optional()
      .default([]),
    assets: z
      .record(
        z.string(),
        z.object({
          href: z.string(),
          title: z.string().optional(),
          type: z.string().optional(),
          roles: z.array(z.string()).optional(),
        })
      )
      .optional()
      .default({}),
  }),
});

export const collections = { tutorials, wiki, catalog };
