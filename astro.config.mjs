// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import sitemap from '@astrojs/sitemap';

const NOINDEX_PATHS = new Set(['/aszf/', '/gdpr/', '/impresszum/', '/koszi/']);

// https://astro.build/config
export default defineConfig({
  site: 'https://nyaloda.com',
  integrations: [
    react(),
    sitemap({
      filter: (page) => !NOINDEX_PATHS.has(new URL(page).pathname),
    }),
  ],
});
