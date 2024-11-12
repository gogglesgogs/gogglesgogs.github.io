import { useLocation, useRoutes } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { cloneElement, lazy, Suspense } from 'react';

const Terminal = lazy(() => import('./pages/Terminal.tsx'));
const Nav = lazy(() => import('./components/Nav.tsx'));
const Footer = lazy(() => import('./components/Footer.tsx'));
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
    {
      path: '/terminal',
      element: <Terminal />,
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
    <Suspense
      fallback={
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          Loading...
        </div>
      }
    >
      <Nav />
      <AnimatePresence mode="wait">
        {cloneElement(element, { key: location.pathname })}
      </AnimatePresence>
      <Footer />
    </Suspense>
  );
}

export default App;
