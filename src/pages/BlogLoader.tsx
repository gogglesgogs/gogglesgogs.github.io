import { motion } from 'framer-motion';
import { Suspense, lazy } from 'react';
import { useParams } from 'react-router-dom';
import Content from '../../content.config';

const ClaudeBlog = lazy(() => import('./blogs/claude.mdx'));
const QuikVsSolid = lazy(() => import('./blogs/quik-vs-solid.mdx'));
const FinishedPortfolio = lazy(() => import('./blogs/finished-portfolio.mdx'));
const TechTrend2024 = lazy(() => import('./blogs/tech-trend-2024.mdx'));

const visible = { opacity: 1, transition: { duration: 0.5 } };
const hidden = { opacity: 0, transition: { duration: 0.5 } };
const elementVariants = {
  visible,
  hidden,
};

function Claude() {
  const { blogId } = useParams();

  if (!blogId) return (window.location.href = '/blog');
  if (!(blogId in Content.blogs)) return (window.location.href = '/blog');

  const blogData = Content.blogs[blogId];

  const getBlog = (id: string): JSX.Element => {
    switch (id) {
      case 'claude':
        return <ClaudeBlog />;
      case 'quik-vs-solid':
        return <QuikVsSolid />;
      case 'finished-portfolio':
        return <FinishedPortfolio />;
      case 'tech-trend-2024':
        return <TechTrend2024 />;
      default:
        return <div>Error loading blog</div>;
    }
  };

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={{ visible, hidden }}
    >
      <motion.h1
        className="mb-2 max-w-[650px] text-3xl font-semibold tracking-tighter"
        variants={elementVariants}
      >
        {blogData.title}
      </motion.h1>
      <motion.div
        className="mb-8 flex max-w-[650px] items-center gap-3 text-sm text-neutral-600 dark:text-neutral-400"
        variants={elementVariants}
      >
        <span>{blogData.author}</span> ~ <span>{blogData.date}</span>
      </motion.div>
      <Suspense fallback={<div className="w-full text-center">Loading...</div>}>
        <motion.article
          className="prose prose-neutral dark:prose-invert"
          variants={elementVariants}
        >
          {getBlog(blogId)}
        </motion.article>
      </Suspense>
    </motion.section>
  );
}

export default Claude;
