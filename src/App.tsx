import { useLocation, useRoutes } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { cloneElement, lazy, Suspense } from 'react';

const Home = lazy(() => import('./pages/home/Home.tsx'));
const Blog = lazy(() => import('./pages/blog/Blog.tsx'));

function App() {
  const element = useRoutes([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/blog',
      element: <Blog />,
    },
  ]);

  const location = useLocation();

  if (!element)
    return (
      <div className="prose prose-neutral w-full text-center dark:prose-invert">
        oops! an unexpected error has occurred.
      </div>
    );

  return (
    <Suspense fallback={<div className="h-screen w-full text-center"></div>}>
      <AnimatePresence mode="wait">
        {cloneElement(element, { key: location.pathname })}
      </AnimatePresence>
    </Suspense>
  );
}

export default App;
