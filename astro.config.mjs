import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import alpinejs from '@astrojs/alpinejs';

import mdx from '@astrojs/mdx';

export default defineConfig({
  // This wires up the CSS and JS engines
  integrations: [tailwind(), alpinejs(), mdx()],
});