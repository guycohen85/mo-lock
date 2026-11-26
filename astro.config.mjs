// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // Final domain not chosen yet; set SITE_URL in the hosting build settings.
  site: process.env.SITE_URL ?? 'http://localhost:4321',
  trailingSlash: 'always',
  integrations: [sitemap({ filter: (page) => !page.includes('/thanks/') })],
  vite: { plugins: [tailwindcss()] },
  fonts: [
    {
      // Downloaded at build time and self-hosted from our own domain
      provider: fontProviders.google(),
      name: 'Heebo',
      cssVariable: '--font-heebo',
      weights: ['400 900'],
      subsets: ['hebrew', 'latin'],
      fallbacks: ['system-ui', 'sans-serif'],
    },
  ],
});
