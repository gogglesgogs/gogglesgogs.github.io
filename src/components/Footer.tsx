import Content from '../../content.config';
import cn from '../utils/cn';

function Footer() {
	return (
		<footer className="mt-12 text-sm text-neutral-600 dark:text-neutral-400">
			<div className="flex w-full cursor-default flex-col items-center justify-between space-y-4 border-y border-neutral-400 py-4 sm:flex-row sm:space-y-0 dark:border-neutral-600">
				<p className="font-medium">goggles.gogs</p>
				<span className="font-medium">
					{new Date().toDateString().toLowerCase()}
				</span>
			</div>
			{Content.footer && (
				<figure className="prose prose-neutral my-6 text-sm dark:prose-invert">
					<blockquote>{Content.footer?.quote}</blockquote>
					<figcaption className="mt-4 flex h-fit items-center gap-x-4">
						<p className="my-0 font-semibold">
							<strong>{Content.footer?.author}</strong>
						</p>{' '}
						•
						<p className="my-0">
							<cite>{Content.footer?.title}</cite>
						</p>
					</figcaption>
				</figure>
			)}
		</footer>
	);
}

export default Footer;
