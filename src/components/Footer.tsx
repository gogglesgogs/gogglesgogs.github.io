function Footer() {
  return (
    <footer className="mt-12 text-sm text-neutral-600 dark:text-neutral-400">
      <div className="flex w-full cursor-default flex-col items-center justify-between space-y-4 border-y border-neutral-400 py-4 sm:flex-row sm:space-y-0 dark:border-neutral-600">
        <em className="font-medium">goggles.gogs</em>
        <span className="font-medium">
          {new Date().toDateString().toLowerCase()}
        </span>
      </div>
      <figure className="prose prose-neutral my-6 text-sm dark:prose-invert">
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
      </figure>
      {/*todo implement way to add or delete this additional element in the content.config */}
      <p className={'border-t border-neutral-400 py-4 dark:border-neutral-600'}>
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
