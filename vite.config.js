/// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom', // Needed for DOM testing
    setupFiles: './src/setupTests.js', // Setup file for custom configs
  },
});
