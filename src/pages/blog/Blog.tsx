function Blog() {
  return (
    <section className="space-y-12">
      <h1 className="text-2xl font-medium tracking-tighter">blog</h1>
      <div className="space-y-6">
        <p className="font-medium">subscribe for updates. no spam.</p>
        <form action="" encType="multipart/form-data" method="POST">
          <input
            type="hidden"
            name="$ACTION_ID_f29d2f1ecff19af7d995687f89eefdf1c4a11ccd"
          />
          <div className="flex w-full gap-4">
            <div className="flex-grow">
              <input
                type="email"
                placeholder="email"
                autoComplete="off"
                className="w-full border-b border-black bg-inherit p-1 transition-colors placeholder:text-neutral-400 focus:border-neutral-400 focus:outline-none dark:border-white dark:placeholder:text-neutral-600 dark:focus:border-neutral-600"
                name="email"
              />
            </div>
            <button
              type="submit"
              className="rounded-md bg-transparent p-1 text-black transition-colors duration-300 ease-in-out hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-black disabled:cursor-not-allowed disabled:bg-neutral-400 disabled:text-neutral-600 dark:text-white dark:hover:bg-neutral-100 dark:hover:text-black dark:focus:ring-white"
            >
              subscribe
            </button>
          </div>
          <div></div>
        </form>
      </div>
      <div className="space-y-12">
        {/* todo add blog posts */}
        <a className="group block" href="/blog/dfa">
          <div className="flex w-full flex-col space-y-3">
            <p className="text-lg font-medium group-hover:underline group-hover:decoration-neutral-400 group-hover:underline-offset-4 group-hover:dark:decoration-neutral-600">
              lorem ipsum dolor sit amet, consectetur adipisicing elit. veniam,
              dolore.
            </p>
            <p className="prose prose-neutral dark:prose-invert">
              lorem ipsum dolor sit amet.
            </p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              jul 5, 2024 •{' '}
              <span className="text-neutral-600 dark:text-neutral-400">
                2,786 views
              </span>
            </p>
          </div>
        </a>
      </div>
    </section>
  );
}

export default Blog;
