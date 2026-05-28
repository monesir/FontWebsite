import { defineConfig } from 'vite';

import { cloudflare } from "@cloudflare/vite-plugin";

export default defineConfig({
  plugins: [cloudflare()],
  base: './', // Use relative paths so the built site works perfectly on GitHub Pages subdirectories
  esbuild: false, // Disable esbuild transpiler to save memory in sandbox environments
  build: {
    minify: false, // Disable minification to save memory
    sourcemap: false, // Disable sourcemaps
    cssCodeSplit: false, // Disable CSS splitting
    rollupOptions: {
      cache: false, // Disable rollup build cache
    }
  }
});