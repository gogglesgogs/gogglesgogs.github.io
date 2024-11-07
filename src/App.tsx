import { useLocation, useRoutes } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { cloneElement, lazy, Suspense } from 'react';

const Home = lazy(() => import('./pages/Home.tsx'));
const Blog = lazy(() => import('./pages/Blog.tsx'));
const BlogLoader = lazy(() => import('./pages/BlogLoader.tsx'));

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
    {
      path: '/blog/:blogId',
      element: <BlogLoader />,
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
    <Suspense fallback={<div>Loading...</div>}>
      <AnimatePresence mode="wait">
        {cloneElement(element, { key: location.pathname })}
      </AnimatePresence>
    </Suspense>
  );
}

export default App;
