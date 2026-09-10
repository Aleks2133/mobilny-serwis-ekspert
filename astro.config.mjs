// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import tailwindcss from '@tailwindcss/vite';

// Domena kanoniczna: mobilnyserwisekspert.pl
// Druga domena (mobilnyserwisexpert.pl) → przekierowanie 301 na poziomie hostingu/DNS.
// https://astro.build/config
export default defineConfig({
  site: 'https://mobilnyserwisekspert.pl',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
