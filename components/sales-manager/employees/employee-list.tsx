import React from 'react';

import { MongoClient } from 'mongodb';

import EmployeeListRow from '@/components/sales-manager/employees/employee-list-row';

const EmployeeList: React.FC<{ allEmployees: any }> = props => {
	return (
		<div className="w-full overflow-x-auto">
			<table className="w-full">
				<thead>
					<tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
						<th className="px-4 py-3">Employee</th>
						<th className="px-4 py-3">Region</th>
						<th className="px-4 py-3">Email</th>
						<th className="px-4 py-3">Phone number</th>
						<th className="px-4 py-3">Car</th>
						<th className="px-4 py-3">Next medical exam.</th>
						<th className="px-4 py-3">Next car periodic exam..</th>
						<th className="px-4 py-3">End of contract</th>
					</tr>
				</thead>
				<tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
					{props.allEmployees.map(employee => (
						<EmployeeListRow
							key={employee._id}
							image={employee.image}
							name={`${employee.firstName} ${employee.lastName}`}
							number={employee.phone}
							car={employee.car}
							medicalDate={employee.medical}
							region={employee.region}
							email={employee.email}
							carPeriodic={employee.periodic}
							endContract={employee.endContract}
						/>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default EmployeeList;
