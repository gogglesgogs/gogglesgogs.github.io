import { useState } from 'react';
import cn from './utils/cn';

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
      </button>
      <div className={cn(isOpen ? 'visible' : 'hidden')}>
        <figure className="prose prose-neutral dark:prose-invert py-8 text-sm">
          <blockquote>
            "Any application that can be written in JavaScript, will eventually
            be written in JavaScript."
          </blockquote>
          <figcaption className="mt-6 flex items-center gap-x-4">
            <p className="font-semibold">
              <strong>Jeff Atwood</strong>
            </p>{' '}
            •<cite>co-founder of Stack Overflow</cite>
          </figcaption>
        </figure>
        <p>
          p/s: here are some old versions of my portfolio. not garuanteed if the
          site will function correctly tho <br />
          <a href="/v1">version 1</a> <a href="/v2">version 2</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
