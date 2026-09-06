import { defineConfig } from 'vite';

export default defineConfig({
  base: './', // Use relative path for GitHub Pages compatibility
  build: {
    outDir: 'dist',
  }
});
