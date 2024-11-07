import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import mdx from '@mdx-js/rollup';
import remarkGfm from 'remark-gfm';

/** @type {import('vite').UserConfig} */
export default defineConfig({
  plugins: [
    {
      enforce: 'pre',
      ...mdx({
        remarkPlugins: [remarkGfm],
      }),
    },
    react({ include: /\.(mdx|js|jsx|ts|tsx)$/ }),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          libs: [
            'react-router-dom',
            '/src/utils/cn.ts',
            '/src/utils/discordLink.ts',
            'tailwind-merge',
            'clsx',
          ],
          animation: ['framer-motion'],
          content: ['/content.config.ts'],
        },
        compact: true,
      },
    },
  },
});
