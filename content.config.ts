import type Content from './types/content.config';
import * as FinishedPortfolio from './src/pages/blogs/finished-portfolio.mdx';
import * as QuikVSSolid from './src/pages/blogs/quik-vs-solid.mdx';
import * as Claude from './src/pages/blogs/claude.mdx';
import * as TechTrend2024 from './src/pages/blogs/tech-trend-2024.mdx';

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
      title: FinishedPortfolio.metadata.title,
      date: FinishedPortfolio.metadata.date,
      author: FinishedPortfolio.metadata.author,
      desc: FinishedPortfolio.metadata.desc,
      content: FinishedPortfolio.default,
    },
    'quik-vs-solid': {
      title: QuikVSSolid.metadata.title,
      date: QuikVSSolid.metadata.date,
      author: QuikVSSolid.metadata.author,
      desc: QuikVSSolid.metadata.desc,
      content: QuikVSSolid.default,
    },
    claude: {
      title: Claude.metadata.title,
      date: Claude.metadata.date,
      author: Claude.metadata.author,
      desc: Claude.metadata.desc,
      content: Claude.default,
    },
    'tech-trend-2024': {
      title: TechTrend2024.metadata.title,
      date: TechTrend2024.metadata.date,
      author: TechTrend2024.metadata.author,
      desc: TechTrend2024.metadata.desc,
      content: TechTrend2024.default,
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
    echo: (args) => {
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
