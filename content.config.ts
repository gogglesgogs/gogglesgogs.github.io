import type Content from './types/content.config';

//! this file is used for the content of the website
export default {
  name: 'goggles.gogs',
  addr: 'hung yen, vietnam',
  job: 'high school student @ Greenfield School',
  bio: "i'm a 16 y/o teenager whos good at problem solving and interested in computer science. currently learning web development to pursue my career.",
  github: 'https://github.com/gogglesgogs',
  email: 'ngkhoa0075@gmail.com',
  //todo add logic to implement discord id links
  discord: '799597159661699112',
  kofi: 'https://ko-fi.com/gogglesgogs',
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
  footer: {
    quote:
      '"Any application that can be written in JavaScript, will eventually be written in JavaScript."',
    author: 'Jeff Atwood',
    title: 'co-founder of Stack Overflow',
  },
} satisfies Content;
