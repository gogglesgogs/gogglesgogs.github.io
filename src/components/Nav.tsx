import { NavLink } from 'react-router-dom';
import cn from '../utils/cn';

function Nav() {
	return (
		<aside className="-ml-[8px] mb-8 tracking-tight">
			<div className="lg:sticky lg:top-20">
				<nav className="relative flex scroll-pr-6 flex-row items-start px-0 pb-0 md:relative md:overflow-auto">
					<div className="align-center flex w-full flex-row justify-between space-x-0">
						<div className="flex flex-row">
							<NavLink
								className={({ isActive }) =>
									cn(
										'relative flex px-2 py-1 align-middle transition-all hover:text-neutral-800 dark:hover:text-neutral-200',
										isActive
											? 'underline decoration-wavy decoration-[0.1em] underline-offset-4'
											: '',
									)
								}
								to={'/'}
							>
								home
							</NavLink>
							<NavLink
								className={({ isActive }) =>
									cn(
										'relative flex px-2 py-1 align-middle transition-all hover:text-neutral-800 dark:hover:text-neutral-200',
										isActive
											? 'underline decoration-wavy decoration-[0.1em] underline-offset-4'
											: '',
									)
								}
								to={'/blog'}
							>
								blog
							</NavLink>
						</div>
						<NavLink
							className={({ isActive }) =>
								cn(
									'relative flex px-2 py-1 align-middle transition-all hover:text-neutral-800 dark:hover:text-neutral-200',
									isActive
										? 'underline decoration-wavy decoration-[0.1em] underline-offset-4'
										: '',
								)
							}
							to={'/terminal'}
						>
							<svg
								width="24"
								height="24"
								viewBox="0 0 128 128"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M114 22H14V106H114V22Z"
									stroke="white"
									strokeWidth="10"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<path
									d="M70 82H90M38 46L58 64L38 82"
									stroke="white"
									strokeWidth="10"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
						</NavLink>
					</div>
				</nav>
			</div>
		</aside>
	);
}

export default Nav;
