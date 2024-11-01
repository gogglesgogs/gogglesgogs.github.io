import { useState } from 'react';
import cn from '../utils/cn';
import { Link } from 'react-router-dom';

function Footer() {
  const [isOpen, setOpen] = useState(false);

  const handleMouseClick = () => {
    setOpen(!isOpen);
  };

  return (
    <footer className="mt-12 text-sm text-neutral-600 dark:text-neutral-400">
      <hr className="mb-4 border-t border-neutral-400 dark:border-neutral-600" />
      <button
        onClick={handleMouseClick}
        className="flex w-full cursor-default flex-col items-center justify-between space-y-4 sm:flex-row sm:space-y-0"
      >
        <span className="font-medium">goggles.gogs</span>
        <span className="font-medium">{new Date().toDateString()}</span>
      </button>
      <div className={cn(isOpen ? 'visible' : 'hidden')}>
        <figure className="prose prose-neutral mt-6 text-sm dark:prose-invert">
          <blockquote>
            "Any application that can be written in JavaScript, will eventually
            be written in JavaScript."
          </blockquote>
          <figcaption className="mt-4 flex items-center gap-x-4">
            <p className="font-semibold">
              <strong>Jeff Atwood</strong>
            </p>{' '}
            •<cite>co-founder of Stack Overflow</cite>
          </figcaption>
        </figure>
      </div>
      <p className="mt-4 border-t border-neutral-400 py-4 dark:border-neutral-600">
        p/s: here are the older versions of this website. note that it may not work as well as the current one. <br />
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
