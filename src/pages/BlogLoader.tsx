import { motion } from 'motion/react';
import { Suspense, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useQueryClient, useQuery, useMutation } from '@tanstack/react-query';
import Content from '../../content.config';

const visible = { opacity: 1, transition: { duration: 0.5 } };
const hidden = { opacity: 0, transition: { duration: 0.5 } };
const elementVariants = {
	visible,
	hidden,
};

const fetchBlogViews = async (blogId: string) => {
	const res = await fetch(
		`https://blog-views.goggles.workers.dev/?blogid=${blogId}`,
	);
	if (!res) throw new Error('Failed to fetch blog views');
	return res.json();
};

const incrementBlogViews = async (blogId: string) => {
	return;
	const res = await fetch(
		`https://blog-views.goggles.workers.dev/?blogid=${blogId}`,
		{
			method: 'POST',
		},
	);
	if (!res.ok) throw new Error('Failed to increment blog views');
	return res.json();
};

function BlogLoader() {
	const { blogId } = useParams();
	const queryClient = useQueryClient();

	if (!blogId) return (window.location.href = '/blog');
	if (!(blogId in Content.blogs)) return (window.location.href = '/blog');

	const blogData = Content.blogs[blogId];

	const BlogComponent = blogData.content;

	useEffect(() => {
		document.title = `${blogData.title} - Goggles Gogs`;
	}, []);

	const { data, error, isLoading } = useQuery({
		queryKey: ['blogViews', blogId],
		queryFn: () => fetchBlogViews(blogId),
		enabled: !!blogId,
		retry: false,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false,
		staleTime: Infinity,
	});

	const mutation = useMutation({
		mutationFn: () => incrementBlogViews(blogId),
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ['blogViews', blogId],
			});
		},
	});

	useEffect(() => {
		if (blogId) {
			mutation.mutate();
		}
	}, [blogId]);

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
				<span>{blogData.date}</span> ~ <span>{blogData.author}</span> ~
				{isLoading && (
					<span className="h-3 w-14 animate-pulse rounded-full bg-neutral-700"></span>
				)}
				{data && <span>{data.viewcount} views</span>}
				{error && <span>Error: viewcounts: failed to fetch</span>}
			</motion.div>
			<Suspense fallback={<div className="w-full text-center">Loading...</div>}>
				<motion.article
					className="prose prose-neutral dark:prose-invert"
					variants={elementVariants}
				>
					{BlogComponent ? <BlogComponent /> : 'Error Loading Blog'}
				</motion.article>
			</Suspense>
		</motion.section>
	);
}

export default BlogLoader;
