import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',  // Ensure jsdom is set for testing React components
    css: true,
    setupFiles: './src/components/setup.js',  // Ensure the path is correct for setup.js
  },
});
