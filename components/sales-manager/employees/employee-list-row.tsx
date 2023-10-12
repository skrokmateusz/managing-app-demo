import React from 'react';

const EmployeeListRow: React.FC<{
	image: string;
	name: string;
	number: string;
	car: string;
	medicalDate: string;
	region: string;
	email: string;
	carPeriodic: string;
	endContract: string;
}> = props => {
	return (
		<tr className="bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-900 text-gray-700 dark:text-gray-400">
			<td className="px-4 py-3">
				<div className="flex items-center text-sm">
					<div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
						<img className="object-cover w-full h-full rounded-full" src={props.image} alt="" loading="lazy" />
						<div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
					</div>
					<div>
						<p className="font-semibold">{props.name}</p>
						<p className="text-xs text-gray-600 dark:text-gray-400">Seller</p>
					</div>
				</div>
			</td>
			<td className="px-4 py-3 text-sm">{props.region}</td>
			<td className="px-4 py-3 text-sm">{props.email}</td>
			<td className="px-4 py-3 text-sm">{props.number}</td>
			<td className="px-4 py-3 text-sm">{props.car}</td>
			<td className="px-4 py-3 text-sm">{props.medicalDate}</td>
			<td className="px-4 py-3 text-sm">{props.carPeriodic}</td>
			<td className="px-4 py-3 text-sm">{props.endContract}</td>
		</tr>
	);
};

export default EmployeeListRow;
