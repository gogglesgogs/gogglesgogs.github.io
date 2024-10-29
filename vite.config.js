import { resolve } from 'path';
/** @type {import('vite').UserConfig} */
export default {
	server: {
		port: 8000,
		host: '127.0.0.1',
		strictPort: true,
	},
	build: {
		minify: true,
		rollupOptions: {
			input: {
				main: resolve(__dirname, 'index.html'),
				404: resolve(__dirname, '404.html'),
			},
		},
	},
};
