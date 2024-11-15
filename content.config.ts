import type Content from './src/types/content.config';
import FinishedPortfolio, {
	metadata as FinishedPortfolioMetadata,
} from './src/pages/blogs/finished-portfolio.mdx';
import ErrorCorrection, {
	metadata as ErrorCorrectionMetadata,
} from './src/pages/blogs/error-correction.mdx';
import QuikVSSolid, {
	metadata as QuikVSSolidMetadata,
} from './src/pages/blogs/quik-vs-solid.mdx';
import Claude, {
	metadata as ClaudeMetadata,
} from './src/pages/blogs/claude.mdx';
import TechTrend2024, {
	metadata as TechTrend2024Metadata,
} from './src/pages/blogs/tech-trend-2024.mdx';

//* this file is used for the content of the website
const Content: Content = {
	name: 'goggles.gogs',
	hover_name: 'nguyen khoa',
	addr: 'hung yen, vietnam',
	job: 'high school student @ Greenfield School',
	bio: "i'm a 16 y/o teenager whos good at problem solving and interested in computer science. currently learning web development to pursue my career.",
	links: {
		email: 'mailto:ngkhoa0075@gmail.com',
		discord: 'https://discordapp.com/users/799597159661699112',
		'support me': 'https://ko-fi.com/gogglesgogs',
		github: 'https://github.com/gogglesgogs',
	},
	skills: [
		{
			mainHeading: 'react',
			secondHeading: 'javascript library',
			description:
				'a javascript library for building web and native user interfaces based on components.',
			link: 'https://react.dev/',
		},
		{
			mainHeading: 'tailwind',
			secondHeading: 'css framework',
			description:
				'a utility-first css framework packed with classes that can be composed to build any design.',
			link: 'https://tailwindcss.com',
		},
		{
			mainHeading: 'nodejs',
			secondHeading: 'javascript runtime environment',
			description:
				'a cross-platform, open-source javascript runtime environment built on top of v8 javascript engine.',
			link: 'https://nodejs.org/',
		},
	],
	projects: [
		{
			mainHeading: 'gogglesinc/gogglesinc.github.io',
			secondHeading: 'creator and maintainer',
			description:
				'a tech company web app that utilizes react, tailwindcss, and other frameworks.',
			link: 'https://github.com/gogglesinc/gogglesinc.github.io',
		},
		{
			mainHeading: 'gogglesgogs/todo-app',
			secondHeading: 'creator and maintainer',
			description: 'a simple todo app that records your tasks.',
			link: 'https://github.com/gogglesgogs/todo-app',
		},
		{
			mainHeading: 'gogglesinc/',
			secondHeading: 'founder',
			description: 'a imaginary, individually owned tech company by me.',
			link: 'https://github.com/gogglesinc',
		},
	],
	blogs: {
		'finished-portfolio': {
			title: FinishedPortfolioMetadata.title,
			date: FinishedPortfolioMetadata.date,
			author: FinishedPortfolioMetadata.author,
			desc: FinishedPortfolioMetadata.desc,
			content: FinishedPortfolio,
		},
		'error-correction': {
			title: ErrorCorrectionMetadata.title,
			date: ErrorCorrectionMetadata.date,
			author: ErrorCorrectionMetadata.author,
			desc: ErrorCorrectionMetadata.desc,
			content: ErrorCorrection,
		},
		'quik-vs-solid': {
			title: QuikVSSolidMetadata.title,
			date: QuikVSSolidMetadata.date,
			author: QuikVSSolidMetadata.author,
			desc: QuikVSSolidMetadata.desc,
			content: QuikVSSolid,
		},
		claude: {
			title: ClaudeMetadata.title,
			date: ClaudeMetadata.date,
			author: ClaudeMetadata.author,
			desc: ClaudeMetadata.desc,
			content: Claude,
		},
		'tech-trend-2024': {
			title: TechTrend2024Metadata.title,
			date: TechTrend2024Metadata.date,
			author: TechTrend2024Metadata.author,
			desc: TechTrend2024Metadata.desc,
			content: TechTrend2024,
		},
	},
	commands: {
		help: () =>
			'Available commands: ' + Object.keys(Content.commands).join(', '),
		hostname: () => window.location.hostname,
		whoami: () => 'guest',
		author: () => Content.name,
		date: () => new Date().toLocaleDateString(),
		time: () => new Date().toLocaleTimeString(),
		echo: args => {
			if (!args) return 'No echo string provided';
			return args.join(' ');
		},
		github: () => {
			window.open(Content.links.github, '_blank');
			return 'Redirecting...';
		},
		email: () => {
			window.open(Content.links.email, '_blank');
			return 'Redirecting...';
		},
		donate: () => {
			window.open(Content.links['support me'], '_blank');
			return 'Redirecting...';
		},
	},
	footer: {
		quote:
			'"Any application that can be written in JavaScript, will eventually be written in JavaScript."',
		author: 'Jeff Atwood',
		title: 'co-founder of Stack Overflow',
	},
};

export default Content;
