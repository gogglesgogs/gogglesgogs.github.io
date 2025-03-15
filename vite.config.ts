import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import mdx from '@mdx-js/rollup';
import remarkGfm from 'remark-gfm';
import remarkFrontmatter from 'remark-frontmatter';
import remarkMdxFrontmatter from 'remark-mdx-frontmatter';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeClassNames from 'rehype-class-names';

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
				rehypePlugins: [
					rehypeSlug,
					[
						rehypeClassNames,
						{
							h1: 'heading',
							h2: 'heading',
							h3: 'heading',
							h4: 'heading',
							h5: 'heading',
							h6: 'heading',
						},
					],
					[
						rehypeAutolinkHeadings,
						{
							properties: {
								className: ['heading-link'],
								ariaLabel: 'Link to this heading',
							},
							content: {
								type: 'element',
								tagName: 'span',
								properties: {
									className: ['heading-icon'],
								},
								children: [
									{
										type: 'element',
										tagName: 'svg',
										properties: {
											width: '12',
											height: '12',
											fill: 'none',
											'aria-hidden': 'true',
										},
										children: [
											{
												type: 'element',
												tagName: 'path',
												properties: {
													d: 'M3.75 1v10M8.25 1v10M1 3.75h10M1 8.25h10',
													stroke: 'currentColor',
													'stroke-width': '1.5',
													'stroke-linecap': 'round',
												},
											},
										],
									},
								],
							},
						},
					],
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
						'@tanstack/react-query',
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
