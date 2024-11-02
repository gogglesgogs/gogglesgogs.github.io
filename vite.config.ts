import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

/** @type {import('vite').UserConfig} */
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          libs: [
            'react-router-dom',
            '/src/utils/cn.ts',
            'tailwind-merge',
            'clsx',
          ],
          animation: ['framer-motion'],
        },
        compact: true,
      },
    },
  },
});
