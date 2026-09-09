// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Project GitHub Pages site (not a user/organization root site).
// Expected development URL: https://haozou39.github.io/meng-lab.github.io/
// Final institutional repository and domain may change later.
export default defineConfig({
  site: 'https://haozou39.github.io',
  base: '/meng-lab.github.io',
  vite: {
    plugins: [tailwindcss()],
  },
});
