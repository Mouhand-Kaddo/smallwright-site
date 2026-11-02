// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://mouhand-kaddo.github.io',
  base: '/smallwright-site/',
  vite: {
    plugins: [tailwindcss()],
  },
  fonts: [
    {
      name: 'Doto',
      cssVariable: '--font-doto',
      provider: fontProviders.google(),
      weights: [700, 900],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['monospace'],
    },
    {
      name: 'Archivo',
      cssVariable: '--font-archivo',
      provider: fontProviders.google(),
      weights: [400, 600, 800],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['sans-serif'],
    },
    {
      name: 'Archivo Narrow',
      cssVariable: '--font-archivo-narrow',
      provider: fontProviders.google(),
      weights: [600, 700],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['sans-serif'],
    },
  ],
});
