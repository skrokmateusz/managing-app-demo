import React, { useEffect } from 'react';

import { getSession } from 'next-auth/react';

import EmployeeList from '@/components/sales-manager/employees/employee-list';

const EmployeesPage = props => {
	const { allEmployees } = props;

	return (
		<div className="h-full ml-14 mt-14 mb-10 md:ml-64">
			<div className="mt-4 mx-4">
				<div className="w-full overflow-hidden rounded-lg shadow-xs">
					<EmployeeList allEmployees={allEmployees} />
				</div>
			</div>
		</div>
	);
};

export async function getServerSideProps(context) {
	const session = await getSession({ req: context.req });
	if (!session) {
		return {
			redirect: {
				destination: '/',
				permanent: false,
			},
		};
	}

	const response = await fetch(process.env.GET_ALL_EMPLOYEES);
	const allEmployees = await response.json();

	return {
		props: allEmployees,
	};
}

export default EmployeesPage;
