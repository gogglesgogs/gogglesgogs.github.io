import { Link, useLocation } from 'react-router-dom';
import cn from '../utils/cn';

function Nav() {
  const location = useLocation();

  return (
    <aside className="-ml-[8px] mb-8 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="relative flex scroll-pr-6 flex-row items-start px-0 pb-0 md:relative md:overflow-auto"
          id="nav"
        >
          <div className="flex flex-row space-x-0 pr-10">
            <Link
              className={cn(
                'relative flex px-2 py-1 align-middle transition-all hover:text-neutral-800 dark:hover:text-neutral-200',
                ['/home', '/'].includes(location.pathname)
                  ? 'underline decoration-wavy decoration-[0.1em] underline-offset-4'
                  : '',
              )}
              to="/"
            >
              home
            </Link>
            <Link
              className={cn(
                'relative flex px-2 py-1 align-middle transition-all hover:text-neutral-800 dark:hover:text-neutral-200',
                location.pathname == '/blog'
                  ? 'underline decoration-wavy decoration-[0.1em] underline-offset-4'
                  : '',
              )}
              to="/blog"
            >
              blog
            </Link>
          </div>
        </nav>
      </div>
    </aside>
  );
}

export default Nav;
