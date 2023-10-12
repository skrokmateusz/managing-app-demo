import React, { ReactElement } from 'react';
import Link from 'next/link';

const SidebarItem: React.FC<{ element: ReactElement; href: string; title: string }> = props => {
	return (
		<li>
			<Link
				href={props.href}
				className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6">
				<span className="inline-flex justify-center items-center ml-4">{props.element}</span>
				<span className="ml-2 text-sm tracking-wide truncate">{props.title}</span>
			</Link>
		</li>
	);
};

export default SidebarItem;
