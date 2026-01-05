import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import alpinejs from '@astrojs/alpinejs';

import mdx from '@astrojs/mdx';

import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  // This wires up the CSS and JS engines
  integrations: [tailwind(), alpinejs(), mdx()],

  image: {
    domains: ['assets.happymediastrategy.xyz'],
  },

  adapter: cloudflare(),
});