import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Content from '../../content.config';

const visible = { opacity: 1, transition: { duration: 0.5 } };
const hidden = { opacity: 0, transition: { duration: 0.5 } };
const elementVariants = {
  visible,
  hidden,
};

function Home() {
  const [isHovered, setHover] = useState(false);

  const handleMouseEnter = () => {
    if (!Content.hover_name) return;
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  useEffect(() => {
    document.title = 'Goggles Gogs';
  }, []);

  return (
    <motion.main
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
      className="text-left"
    >
      <motion.h1
        className="relative mb-6 h-8 w-full text-2xl font-medium tracking-tighter"
        variants={{ hidden, visible }}
      >
        <motion.span
          className="absolute inset-y-0 left-0 z-10"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          animate={isHovered ? { opacity: 0 } : {}}
        >
          {Content.name ? Content.name : 'My name'}
        </motion.span>
        {Content.hover_name && (
          <motion.span
            className="absolute inset-y-0 left-0"
            initial={{ opacity: 0 }}
            animate={isHovered ? { opacity: 1 } : {}}
          >
            {Content.hover_name}
          </motion.span>
        )}
      </motion.h1>
      <motion.div
        className="mb-2 flex items-center gap-3 text-neutral-700 dark:text-neutral-300"
        variants={elementVariants}
      >
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
        <p>{Content.addr ? Content.addr : 'My Location'}</p>
      </motion.div>
      <motion.div
        className="mb-6 flex items-center gap-3 text-neutral-700 dark:text-neutral-300"
        variants={elementVariants}
      >
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
        <p className="inline-flex">{Content.job ? Content.job : 'My Job'}</p>
      </motion.div>
      <motion.p
        className="prose prose-neutral mb-10 dark:prose-invert"
        variants={elementVariants}
      >
        {Content.bio ? Content.bio : 'A short bio about me'}
      </motion.p>
      <div className="my-12 grid grid-cols-1 gap-12 md:grid-cols-2">
        <section className="text-left">
          <motion.h2
            className="mb-8 text-xl font-medium"
            variants={elementVariants}
          >
            skills
          </motion.h2>
          <ul>
            {Content.skills.map((skill) => (
              <motion.li
                key={skill.mainHeading}
                className="mb-6 font-medium"
                variants={elementVariants}
              >
                <Link
                  to={skill.link ? skill.link : ''}
                  target="_blank"
                  className="font-medium underline decoration-neutral-400 decoration-[0.1em] underline-offset-2 dark:decoration-neutral-600"
                >
                  {skill.mainHeading}
                </Link>
                <p className="mt-3">{skill.secondHeading}</p>

                <p className="mt-3 text-neutral-700 dark:text-neutral-300">
                  {skill.description}
                </p>
              </motion.li>
            ))}
          </ul>
        </section>
        <section className="text-left">
          <motion.h2
            className="mb-8 text-xl font-medium"
            variants={elementVariants}
          >
            projects
          </motion.h2>
          <ul>
            {Content.projects.map((project) => (
              <motion.li
                key={project.mainHeading}
                className="mb-6 font-medium"
                variants={elementVariants}
              >
                <Link
                  to={project.link ? project.link : ''}
                  target="_blank"
                  className="font-medium underline decoration-neutral-400 decoration-[0.1em] underline-offset-2 dark:decoration-neutral-600"
                >
                  {project.mainHeading}
                </Link>
                <p className="mt-3">{project.secondHeading}</p>
                <p className="mt-3 text-neutral-700 dark:text-neutral-300">
                  {project.description}
                </p>
              </motion.li>
            ))}
            <motion.li className="mb-6 font-medium" variants={elementVariants}>
              <Link
                to={Content.links.github ? Content.links.github : ''}
                target="_blank"
                className="font-medium underline decoration-neutral-400 decoration-[0.1em] underline-offset-2 dark:decoration-neutral-600"
              >
                all projects →
              </Link>
              <p className="mt-3 text-neutral-700 dark:text-neutral-300"></p>
            </motion.li>
          </ul>
        </section>
      </div>
      <motion.h3
        className="mb-8 text-xl font-medium"
        variants={elementVariants}
      >
        blog
      </motion.h3>
      <motion.ul className="flex flex-col gap-6">
        {Object.entries(Content.blogs).map(([key, value]) => (
          <motion.li variants={elementVariants} key={key}>
            <Link className="" to={`/blog/${key}`}>
              <div className="flex w-full justify-between">
                <p className="font-medium underline decoration-neutral-400 decoration-[0.1em] underline-offset-2 dark:decoration-neutral-600">
                  {value.title.toLowerCase()}
                </p>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  {value.date.toLowerCase()}
                </p>
              </div>
            </Link>
          </motion.li>
        ))}
      </motion.ul>
      <motion.div className="mt-10" variants={elementVariants}>
        <Link
          className="font-medium underline decoration-neutral-400 decoration-[0.1em] underline-offset-2 dark:decoration-neutral-600"
          to="/blog"
        >
          all posts →
        </Link>
      </motion.div>
      <motion.h3
        className="mb-6 mt-12 text-xl font-medium"
        variants={elementVariants}
      >
        links
      </motion.h3>
      <ul className="font-sm flex flex-col space-x-0 space-y-3 text-neutral-600 md:flex-row md:space-x-6 md:space-y-0 dark:text-neutral-300">
        {Object.entries(Content.links).map(([key, value]) => (
          <motion.li variants={elementVariants} key={key}>
            <Link
              className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
              rel="noopener noreferrer"
              target="_blank"
              to={value}
            >
              <p className="mr-2 h-7">{key}</p>
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
          </motion.li>
        ))}
      </ul>
    </motion.main>
  );
}

export default Home;
