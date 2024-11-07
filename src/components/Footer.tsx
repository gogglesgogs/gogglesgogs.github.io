import Content from '../../content.config';
import cn from '../utils/cn';

function Footer() {
  return (
    <footer className="mt-12 text-sm text-neutral-600 dark:text-neutral-400">
      <div className="flex w-full cursor-default flex-col items-center justify-between space-y-4 border-y border-neutral-400 py-4 sm:flex-row sm:space-y-0 dark:border-neutral-600">
        <p className="font-medium">goggles.gogs</p>
        <span className="font-medium">
          {new Date().toDateString().toLowerCase()}
        </span>
      </div>
      {Content.footer && (
        <figure className="prose prose-neutral my-6 text-sm dark:prose-invert">
          <blockquote>{Content.footer?.quote}</blockquote>
          <figcaption className="mt-4 flex h-fit items-center gap-x-4">
            <p className="my-0 font-semibold">
              <strong>{Content.footer?.author}</strong>
            </p>{' '}
            •
            <p className="my-0">
              <cite>{Content.footer?.title}</cite>
            </p>
          </figcaption>
        </figure>
      )}
      <p
        className={cn(
          'py-4',
          Content.footer
            ? 'border-t border-neutral-400 dark:border-neutral-600'
            : '',
        )}
      >
        p/s: here are the older versions of this website. note that it may not
        work as well as the current one. <br />
        <a
          className="font-medium underline decoration-neutral-400 decoration-[0.1em] underline-offset-2 dark:decoration-neutral-600"
          href="/v1/index.html"
        >
          version 1
        </a>{' '}
        <a
          className="font-medium underline decoration-neutral-400 decoration-[0.1em] underline-offset-2 dark:decoration-neutral-600"
          href="/v2/index.html"
        >
          version 2
        </a>
      </p>
    </footer>
  );
}

export default Footer;
