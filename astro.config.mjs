import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { blogEnabled } from './src/data/site.js';

export default defineConfig({
  site: 'https://bhargavmanchala.github.io',
  integrations: [
    // Keep the "coming soon" blog page out of the sitemap until the blog is enabled.
    sitemap({ filter: (page) => blogEnabled || !page.includes('/blog') }),
  ],
  redirects: {
    '/home': '/website/',
  },
});
