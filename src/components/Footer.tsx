import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import cn from '../utils/cn';

const variants = {
  open: {
    opacity: 1,
    y: 0,
    height: '73.5px',
    display: 'block',
  },
  closed: {
    opacity: 0,
    y: '-73.5px',
    height: '0px',
    display: 'none',
  },
};

function Footer() {
  const [isOpen, setOpen] = useState(false);

  const handleMouseClick = () => {
    setOpen(!isOpen);
  };

  return (
    <footer className="mt-12 text-sm text-neutral-600 dark:text-neutral-400">
      <button
        onClick={handleMouseClick}
        className="flex w-full cursor-default flex-col items-center justify-between space-y-4 border-y border-neutral-400 py-4 sm:flex-row sm:space-y-0 dark:border-neutral-600"
        aria-hidden="true"
      >
        <span className="font-medium">goggles.gogs</span>
        <span className="font-medium">
          {new Date().toDateString().toLowerCase()}
        </span>
      </button>
      <motion.figure
        className="prose prose-neutral my-6 overflow-hidden text-sm dark:prose-invert"
        initial="closed"
        animate={isOpen ? 'open' : 'closed'}
        exit="closed"
        variants={variants}
      >
        <blockquote>
          "Any application that can be written in JavaScript, will eventually be
          written in JavaScript."
        </blockquote>
        <figcaption className="mt-4 flex h-fit items-center gap-x-4">
          <p className="my-0 font-semibold">
            <strong>Jeff Atwood</strong>
          </p>{' '}
          •<cite>co-founder of Stack Overflow</cite>
        </figcaption>
      </motion.figure>
      {/*todo implement way to add or delete this additional element in the content.config */}
      <p
        className={cn(
          'py-4',
          isOpen ? 'border-t border-neutral-400 dark:border-neutral-600' : '',
        )}
      >
        p/s: here are the older versions of this website. note that it may not
        work as well as the current one. <br />
        <Link
          className="font-medium underline decoration-neutral-400 decoration-[0.1em] underline-offset-2 dark:decoration-neutral-600"
          to="/v1"
        >
          version 1
        </Link>{' '}
        <Link
          className="font-medium underline decoration-neutral-400 decoration-[0.1em] underline-offset-2 dark:decoration-neutral-600"
          to="/v2"
        >
          version 2
        </Link>
      </p>
    </footer>
  );
}

export default Footer;
