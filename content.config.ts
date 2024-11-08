import type Content from './types/content.config';

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
      description: 'a imaginary, individual-driven tech company managed by me.',
      link: 'https://github.com/gogglesinc',
    },
  ],
  blogs: {
    'finished-portfolio': {
      title: "I Finally Finished My Portfolio! 🚀 Here's What I Used",
      date: '7 Nov, 2024',
      author: 'Goggles',
      desc: 'My journey of creating my portfolio website and what I used in the process.',
    },
    'quik-vs-solid': {
      title: 'Quik vs SolidJS: Which one is better?',
      date: '10 Jul, 2024',
      author: 'Goggles',
      desc: "Quik's fast-loading, minimal-JS approach and SolidJS's high-performance, reactive design. Who's gonna win?",
    },
    claude: {
      title: 'The new Claude 3.5 Sonnet is here!',
      date: '25 Jun, 2024',
      author: 'Goggles',
      desc: 'Discover Claude 3.5, an AI thats packed with new features and capabilities.',
    },
    'tech-trend-2024': {
      title: 'The Hottest Tech Trends Right Now! 🔥',
      date: '20 Mar, 2024',
      author: 'Goggles',
      desc: 'The current tech landscape with the rapid rise of AI, Web3, serverless architectures, and cybersecurity.',
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
