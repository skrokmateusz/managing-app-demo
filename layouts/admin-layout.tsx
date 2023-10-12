import React, { ReactElement } from 'react';

import { useSession } from 'next-auth/react';

import Header from '@/components/header/header';
import Sidebar from '@/components/sidebar/sidebar';

const AdminLayout: React.FC<{ children: ReactElement }> = props => {
	const { data: session, status } = useSession();

	if (status === 'authenticated') {
		return (
			<>
				<div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-white dark:bg-gray-700 text-black dark:text-white">
					<Header />
					<Sidebar />
					{props.children}
				</div>
			</>
		);
	} else {
		return <div className="h-full flex justify-center items-center">{props.children}</div>
	}
};

export default AdminLayout;
