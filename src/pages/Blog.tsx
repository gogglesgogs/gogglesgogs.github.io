import { useEffect } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import Content from '../../content.config';

const visible = { opacity: 1, transition: { duration: 0.5 } };
const hidden = { opacity: 0, transition: { duration: 0.5 } };
const elementVariants = {
	visible,
	hidden,
};

function Blog() {
	useEffect(() => {
		document.title = 'Blogs - Goggles Gogs';
	}, []);

	return (
		<motion.main
			className='space-y-12'
			initial='hidden'
			animate='visible'
			exit='hidden'
			variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
		>
			<motion.h1
				className='text-2xl font-medium tracking-tighter'
				variants={elementVariants}
			>
				blog
			</motion.h1>
			<motion.div className='space-y-6' variants={elementVariants}>
				<p className='font-medium'>want more blogs and updates? subscribe.</p>
				<form action=''>
					<div className='flex w-full gap-4'>
						<div className='flex-grow'>
							<input
								type='email'
								placeholder='email'
								autoComplete='email'
								className='w-full border-b border-black bg-inherit p-1 transition-colors placeholder:text-neutral-400 focus:border-neutral-400 focus:outline-none dark:border-white dark:placeholder:text-neutral-600 dark:focus:border-neutral-600'
								name='email'
							/>
						</div>
						<button
							type='submit'
							className='rounded-md bg-transparent p-1 text-black transition-colors duration-300 ease-in-out hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-black disabled:cursor-not-allowed disabled:bg-neutral-400 disabled:text-neutral-600 dark:text-white dark:hover:bg-neutral-100 dark:hover:text-black dark:focus:ring-white'
						>
							subscribe
						</button>
					</div>
					<div></div>
				</form>
			</motion.div>
			<ul className='space-y-12'>
				{Object.entries(Content.blogs).map(([key, value]) => (
					<motion.li variants={elementVariants} key={key}>
						<Link className='group block' to={`/blog/${key}`}>
							<div className='flex w-full flex-col space-y-3'>
								<p className='text-lg font-medium group-hover:underline group-hover:decoration-neutral-400 group-hover:underline-offset-4 group-hover:dark:decoration-neutral-600'>
									{value.title.toLowerCase()}
								</p>
								<p className='prose prose-neutral dark:prose-invert'>
									{value.desc.toLowerCase()}
								</p>
								<p className='text-sm text-neutral-600 dark:text-neutral-400'>
									{value.date.toLowerCase()} • {value.author.toLowerCase()}
								</p>
							</div>
						</Link>
					</motion.li>
				))}
			</ul>
		</motion.main>
	);
}

export default Blog;
