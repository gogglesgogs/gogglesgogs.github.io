import { useState } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const [isHovered, setHover] = useState(false);

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  return (
    <main className="text-left">
      <h1
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="mb-6 w-fit text-2xl font-medium tracking-tighter"
      >
        {isHovered ? 'nguyen khoa' : 'goggles.gogs'}
      </h1>
      <div className="mb-6 flex flex-col gap-2">
        <div className="flex items-center gap-3 text-neutral-700 dark:text-neutral-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5"
          >
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
          <p>hung yen, vietnam</p>
        </div>
        <div className="flex items-center gap-3 text-neutral-700 dark:text-neutral-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5"
          >
            <path d="M12 12h.01"></path>
            <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"></path>
            <path d="M22 13a18.15 18.15 0 0 1-20 0"></path>
            <rect width="20" height="14" x="2" y="6" rx="2"></rect>
          </svg>
          <p className="inline-flex">high school student @ Greenfield School</p>
        </div>
      </div>
      <p className="prose prose-neutral mb-10 dark:prose-invert">
        i'm a 16 y/o teenager whos good at problem solving and interested in
        computer science. currently learning web development to persue my
        career.
      </p>
      <div className="my-12 grid grid-cols-1 gap-12 md:grid-cols-2">
        <section className="text-left">
          <h3 className="mb-8 text-xl font-medium">skills</h3>
          <ul>
            <li className='mb-6 font-medium before:pr-2 before:text-sm before:content-["●"]'>
              <Link
                to="https://react.dev/"
                target="_blank"
                className="font-medium underline decoration-neutral-400 decoration-[0.1em] underline-offset-2 dark:decoration-neutral-600"
              >
                react
              </Link>
              <p className="mt-3">javascript library</p>

              <p className="mt-3 text-neutral-700 dark:text-neutral-300">
                a javascript library for building web and native user interfaces based on components.
              </p>
            </li>
            <li className='mb-6 font-medium before:pr-2 before:text-sm before:content-["●"]'>
              <Link
                to="https://tailwindcss.com"
                target="_blank"
                className="font-medium underline decoration-neutral-400 decoration-[0.1em] underline-offset-2 dark:decoration-neutral-600"
              >
                tailwind
              </Link>
              <p className="mt-3">css framework</p>

              <p className="mt-3 text-neutral-700 dark:text-neutral-300">
                a utility-first css framework packed with classes that can be composed to build any design.
              </p>
            </li>
            <li className='mb-6 font-medium before:pr-2 before:text-sm before:content-["●"]'>
              <Link
                to="https://nodejs.org/"
                target="_blank"
                className="font-medium underline decoration-neutral-400 decoration-[0.1em] underline-offset-2 dark:decoration-neutral-600"
              >
                nodejs
              </Link>
              <p className="mt-3">javascript runtime environment</p>

              <p className="mt-3 text-neutral-700 dark:text-neutral-300">
                a cross-platform, open-source javascript runtime
                environment built on top of v8 javascript engine.
              </p>
            </li>
          </ul>
        </section>
        <section className="text-left">
          <h3 className="mb-8 text-xl font-medium">projects</h3>
          <ul>
            <li className="mb-6 font-medium">
              <Link
                to=""
                target="_blank"
                className="font-medium underline decoration-neutral-400 decoration-[0.1em] underline-offset-2 dark:decoration-neutral-600"
              >
                gogglesgogs/todo-app
              </Link>
              <p className="mt-3">creator and maintainer</p>
              <p className="mt-3 text-neutral-700 dark:text-neutral-300">
                a simple todo app that records your tasks.
              </p>
            </li>
            <li className="mb-6 font-medium">
              <Link
                to=""
                target="_blank"
                className="font-medium underline decoration-neutral-400 decoration-[0.1em] underline-offset-2 dark:decoration-neutral-600"
              >
                gogglesinc/gogglesinc.github.io
              </Link>
              <p className="mt-3">creator and maintainer</p>
              <p className="mt-3 text-neutral-700 dark:text-neutral-300">
                a tech company web app that utilizes react, tailwindcss, and
                other frameworks.
              </p>
            </li>
            <li className="mb-6 font-medium">
              <Link
                to=""
                target="_blank"
                className="font-medium underline decoration-neutral-400 decoration-[0.1em] underline-offset-2 dark:decoration-neutral-600"
              >
                gogglesinc/
              </Link>
              <p className="mt-3">founder</p>
              <p className="mt-3 text-neutral-700 dark:text-neutral-300">
                {/*todo just a place where i put my web app under*/}a imaginary,
                individual-driven tech company managed by me.
              </p>
            </li>
            <li className="mb-6 font-medium">
              <Link
                to="https://github.com/gogglesgogs"
                target="_blank"
                className="font-medium underline decoration-neutral-400 decoration-[0.1em] underline-offset-2 dark:decoration-neutral-600"
              >
                all projects →
              </Link>
              <p className="mt-3 text-neutral-700 dark:text-neutral-300"></p>
            </li>
          </ul>
        </section>
      </div>
      <h3 className="mb-8 text-xl font-medium">blog</h3>
      <div className="flex flex-col gap-6">
        <Link className="" to="/blog">
          <div className="flex w-full justify-between">
            <p className="font-medium underline decoration-neutral-400 decoration-[0.1em] underline-offset-2 dark:decoration-neutral-600">
              lorem ipsum dolor sit amet, consectetur adipisicing elit. iure,
              architecto!
            </p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              {new Date().toDateString()}
            </p>
          </div>
        </Link>
        <Link
          className="decoration-neutral-4000 mt-4 font-medium underline decoration-[0.1em] underline-offset-2 dark:decoration-neutral-600"
          to="/blog"
        >
          all posts →
        </Link>
      </div>
      <h3 className="mb-6 mt-12 text-xl font-medium">links</h3>
      <ul className="font-sm flex flex-col space-x-0 space-y-3 text-neutral-600 md:flex-row md:space-x-6 md:space-y-0 dark:text-neutral-300">
        <li>
          <Link
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            to="mailto:ngkhoa0075@gmail.com"
          >
            <p className="mr-2 h-7">email</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <path d="M7 7h10v10"></path>
              <path d="M7 17 17 7"></path>
            </svg>
          </Link>
        </li>
        <li>
          <Link
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            to="https://discord.com/users/799597159661699112"
          >
            <p className="mr-2 h-7">discord</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <path d="M7 7h10v10"></path>
              <path d="M7 17 17 7"></path>
            </svg>
          </Link>
        </li>
        <li>
          <Link
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            to="https://ko-fi.com/gogglesgogs"
          >
            <p className="mr-2 h-7">support me</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <path d="M7 7h10v10"></path>
              <path d="M7 17 17 7"></path>
            </svg>
          </Link>
        </li>
        <li>
          <Link
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            to="https://github.com/gogglesgogs"
          >
            <p className="mr-2 h-7">github</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <path d="M7 7h10v10"></path>
              <path d="M7 17 17 7"></path>
            </svg>
          </Link>
        </li>
      </ul>
    </main>
  );
}

export default Home;
