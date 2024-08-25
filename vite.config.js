import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 100000000,
    // Vite automatically handles assets and outputs to dist/assets by default
  },
  base: '/', // Update if using GitHub Pages or subdirectory
});
