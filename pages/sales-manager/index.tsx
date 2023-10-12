import React from 'react';

import { getSession } from 'next-auth/react';


import NumbersCarts from '@/components/statistics/numbers-carts';

const DashboardAdminPage = () => {
	return (
		<>
			<div className="h-full ml-14 mt-14 mb-10 md:ml-64">
				<NumbersCarts />;
			</div>
		</>
	);
};

export async function getServerSideProps(context: any) {
	const session = await getSession({ req: context.req });
	if (!session) {
		return {
			redirect: {
				destination: '/',
				permanent: false,
			},
		};
	}

	return {
		props: { data: 'data' },
	};
}

export default DashboardAdminPage;
