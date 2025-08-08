import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.js'],
  format: ['esm', 'cjs', 'iife'],
  outDir: 'dist',
  dts: true,
  globalName: 'Inflector', // 👈 ini yang akan membuat window.Inflector tersedia
  clean: true,
});
