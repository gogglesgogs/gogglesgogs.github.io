import { useTransition } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import cn from '../utils/cn';

function Nav() {
  // @ts-expect-error
  const [isPending, startTransition] = useTransition();
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigate = (path: string) => {
    startTransition(() => {
      navigate(path);
    });
  };

  return (
    <aside className="-ml-[8px] mb-8 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav className="relative flex scroll-pr-6 flex-row items-start px-0 pb-0 md:relative md:overflow-auto">
          <div className="flex flex-row space-x-0 pr-10">
            <button
              className={cn(
                'relative flex px-2 py-1 align-middle transition-all hover:text-neutral-800 dark:hover:text-neutral-200',
                ['/home', '/'].includes(location.pathname)
                  ? 'underline decoration-wavy decoration-[0.1em] underline-offset-4'
                  : '',
              )}
              onClick={() => handleNavigate('/')}
            >
              home
            </button>
            <button
              className={cn(
                'relative flex px-2 py-1 align-middle transition-all hover:text-neutral-800 dark:hover:text-neutral-200',
                location.pathname.includes('/blog')
                  ? 'underline decoration-wavy decoration-[0.1em] underline-offset-4'
                  : '',
              )}
              onClick={() => handleNavigate('/blog')}
            >
              blog
            </button>
          </div>
        </nav>
      </div>
    </aside>
  );
}

export default Nav;
