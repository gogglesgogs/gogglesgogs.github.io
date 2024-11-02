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
        <a className="group block" href="/blog/dfa">
          <div className="flex w-full flex-col space-y-3">
            <p className="text-lg font-medium group-hover:underline group-hover:decoration-neutral-400 group-hover:underline-offset-4 group-hover:dark:decoration-neutral-600">
              implementing string pattern matching using dfas
            </p>
            <p className="prose prose-neutral dark:prose-invert">
              using dfas for string pattern matching.
            </p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              jul 5, 2024 •{' '}
              <span className="text-neutral-600 dark:text-neutral-400">
                2,786 views
              </span>
            </p>
          </div>
        </a>
        <a className="group block" href="/blog/ricing-macos">
          <div className="flex w-full flex-col space-y-3">
            <p className="text-lg font-medium group-hover:underline group-hover:decoration-neutral-400 group-hover:underline-offset-4 group-hover:dark:decoration-neutral-600">
              ricing macos
            </p>
            <p className="prose prose-neutral dark:prose-invert">
              my macos rice.
            </p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              nov 1, 2023 •{' '}
              <span className="text-neutral-600 dark:text-neutral-400">
                12,815 views
              </span>
            </p>
          </div>
        </a>
        <a className="group block" href="/blog/organising-life">
          <div className="flex w-full flex-col space-y-3">
            <p className="text-lg font-medium group-hover:underline group-hover:decoration-neutral-400 group-hover:underline-offset-4 group-hover:dark:decoration-neutral-600">
              how i organise my life
            </p>
            <p className="prose prose-neutral dark:prose-invert">
              in this post, i share the apps and the simplistic approach i use
              to organise my life.
            </p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              aug 3, 2023 •{' '}
              <span className="text-neutral-600 dark:text-neutral-400">
                7,029 views
              </span>
            </p>
          </div>
        </a>
        <a className="group block" href="/blog/neovim-to-vscode">
          <div className="flex w-full flex-col space-y-3">
            <p className="text-lg font-medium group-hover:underline group-hover:decoration-neutral-400 group-hover:underline-offset-4 group-hover:dark:decoration-neutral-600">
              why i switched from neovim to vscode
            </p>
            <p className="prose prose-neutral dark:prose-invert">
              a few weeks ago i made the switch from neovim to vscode as my
              primary code editor. here's why.
            </p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              jun 23, 2023 •{' '}
              <span className="text-neutral-600 dark:text-neutral-400">
                107,149 views
              </span>
            </p>
          </div>
        </a>
        <a className="group block" href="/blog/new-mac">
          <div className="flex w-full flex-col space-y-3">
            <p className="text-lg font-medium group-hover:underline group-hover:decoration-neutral-400 group-hover:underline-offset-4 group-hover:dark:decoration-neutral-600">
              everything i installed on my new mac
            </p>
            <p className="prose prose-neutral dark:prose-invert">
              i recently got a new mac and decided to document everything i
              installed on it. this is a list of all the apps and tools i
              installed and will use on a daily basis.
            </p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              jun 2, 2023 •{' '}
              <span className="text-neutral-600 dark:text-neutral-400">
                14,623 views
              </span>
            </p>
          </div>
        </a>
        <a className="group block" href="/blog/rust">
          <div className="flex w-full flex-col space-y-3">
            <p className="text-lg font-medium group-hover:underline group-hover:decoration-neutral-400 group-hover:underline-offset-4 group-hover:dark:decoration-neutral-600">
              rust: not just zoom zoom fast
            </p>
            <p className="prose prose-neutral dark:prose-invert">
              explore the versatility of rust beyond performance and memory
              safety with its well-designed language, package manager, and
              ecosystem.
            </p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              feb 25, 2023 •{' '}
              <span className="text-neutral-600 dark:text-neutral-400">
                10,067 views
              </span>
            </p>
          </div>
        </a>
        <a className="group block" href="/blog/pipe">
          <div className="flex w-full flex-col space-y-3">
            <p className="text-lg font-medium group-hover:underline group-hover:decoration-neutral-400 group-hover:underline-offset-4 group-hover:dark:decoration-neutral-600">
              implementing the pipe operator in typescript
            </p>
            <p className="prose prose-neutral dark:prose-invert">
              the pipe operator is one of my favourite features in functional
              languages like elixir and ocaml. let's implement it in typescript!
            </p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              jan 21, 2023 •{' '}
              <span className="text-neutral-600 dark:text-neutral-400">
                23,698 views
              </span>
            </p>
          </div>
        </a>
        <a className="group block" href="/blog/pattern-matching">
          <div className="flex w-full flex-col space-y-3">
            <p className="text-lg font-medium group-hover:underline group-hover:decoration-neutral-400 group-hover:underline-offset-4 group-hover:dark:decoration-neutral-600">
              expressive code with pattern matching
            </p>
            <p className="prose prose-neutral dark:prose-invert">
              elevate your code by writing declarative, and easy-to-read code
              with pattern matching.
            </p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              dec 29, 2022 •{' '}
              <span className="text-neutral-600 dark:text-neutral-400">
                2,674 views
              </span>
            </p>
          </div>
        </a>
        <a className="group block" href="/blog/typesafe-database">
          <div className="flex w-full flex-col space-y-3">
            <p className="text-lg font-medium group-hover:underline group-hover:decoration-neutral-400 group-hover:underline-offset-4 group-hover:dark:decoration-neutral-600">
              typesafe database queries on the edge
            </p>
            <p className="prose prose-neutral dark:prose-invert">
              edge computing is all the rage. learn how to get typesafe access
              to data on the edge using kysely, prisma and planetscale.
            </p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              nov 12, 2022 •{' '}
              <span className="text-neutral-600 dark:text-neutral-400">
                6,040 views
              </span>
            </p>
          </div>
        </a>
        <a className="group block" href="/blog/wsl-workflow">
          <div className="flex w-full flex-col space-y-3">
            <p className="text-lg font-medium group-hover:underline group-hover:decoration-neutral-400 group-hover:underline-offset-4 group-hover:dark:decoration-neutral-600">
              my developer workflow using wsl, tmux and neovim
            </p>
            <p className="prose prose-neutral dark:prose-invert">
              i live on the terminal now. learn about the tools i use set up a
              productive developer environment.
            </p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              aug 16, 2022 •{' '}
              <span className="text-neutral-600 dark:text-neutral-400">
                81,127 views
              </span>
            </p>
          </div>
        </a>
        <a className="group block" href="/blog/ct3a">
          <div className="flex w-full flex-col space-y-3">
            <p className="text-lg font-medium group-hover:underline group-hover:decoration-neutral-400 group-hover:underline-offset-4 group-hover:dark:decoration-neutral-600">
              t3 stack and my most popular open source project ever
            </p>
            <p className="prose prose-neutral dark:prose-invert">
              create-t3-app recently reached 100 stars on github and is my most
              popular open source project. learn more about it!
            </p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              jun 27, 2022 •{' '}
              <span className="text-neutral-600 dark:text-neutral-400">
                20,617 views
              </span>
            </p>
          </div>
        </a>
        <a className="group block" href="/blog/gen-license">
          <div className="flex w-full flex-col space-y-3">
            <p className="text-lg font-medium group-hover:underline group-hover:decoration-neutral-400 group-hover:underline-offset-4 group-hover:dark:decoration-neutral-600">
              create licenses for your projects right from the terminal
            </p>
            <p className="prose prose-neutral dark:prose-invert">
              i made a cli in rust to generate licenses for open source
              projects.
            </p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              mar 25, 2022 •{' '}
              <span className="text-neutral-600 dark:text-neutral-400">
                2,679 views
              </span>
            </p>
          </div>
        </a>
        <a className="group block" href="/blog/nexdle">
          <div className="flex w-full flex-col space-y-3">
            <p className="text-lg font-medium group-hover:underline group-hover:decoration-neutral-400 group-hover:underline-offset-4 group-hover:dark:decoration-neutral-600">
              i made a wordle clone
            </p>
            <p className="prose prose-neutral dark:prose-invert">
              nexdle is a wordle clone made with react, typescript, tailwindcss,
              vite, zustand and tested with vitest.
            </p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              mar 21, 2022 •{' '}
              <span className="text-neutral-600 dark:text-neutral-400">
                2,643 views
              </span>
            </p>
          </div>
        </a>
      </div>
    </section>
  );
}

export default Blog;
