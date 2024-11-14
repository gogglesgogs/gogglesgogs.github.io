import { type Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';
import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['InterVariable', ...defaultTheme.fontFamily.sans],
			},
			transformOrigin: {
				'center-bottom': 'center bottom',
			},
		},
	},
	plugins: [typography],
} satisfies Config;
