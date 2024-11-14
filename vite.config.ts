import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import mdx from '@mdx-js/rollup';
import remarkGfm from 'remark-gfm';
import remarkFrontmatter from 'remark-frontmatter';
import remarkMdxFrontmatter from 'remark-mdx-frontmatter';

/** @type {import('vite').UserConfig} */
export default defineConfig({
	plugins: [
		{
			enforce: 'pre',
			...mdx({
				remarkPlugins: [
					remarkGfm,
					remarkFrontmatter,
					[remarkMdxFrontmatter, { name: 'metadata' }],
				],
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
						'tailwind-merge',
						'clsx',
						'plausible-tracker',
					],
					animation: ['motion/react'],
					content: ['/content.config.ts'],
					blogs: [
						'/src/pages/blogs/claude.mdx',
						'/src/pages/blogs/finished-portfolio.mdx',
						'/src/pages/blogs/quik-vs-solid.mdx',
						'/src/pages/blogs/tech-trend-2024.mdx',
					],
				},
				compact: true,
			},
		},
	},
});
