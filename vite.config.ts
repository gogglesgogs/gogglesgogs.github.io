import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

/** @type {import('vite').UserConfig} */
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom', 'react-router-dom'],
          tailwind: ['tailwind-merge', 'clsx'],
          animation: ['framer-motion'],
        },
        compact: true,
      },
    },
  },
});
