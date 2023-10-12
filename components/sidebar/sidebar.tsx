import React from 'react';
import Link from 'next/link';

import DashboardIcon from '@/assets/sidebar/dashboard-icon';
import EmployeesIcon from '@/assets/sidebar/employees-icon';
import MessagesIcon from '@/assets/sidebar/messages-icon';
import OrdersIcon from '@/assets/sidebar/orders-icon';
import SettingsIcon from '@/assets/sidebar/settings-icon';

import SidebarItem from './sidebar-item';

const Sidebar = () => {
	return (
		<div className="fixed flex flex-col top-14 left-0 w-14 hover:w-64 md:w-64 bg-blue-900 dark:bg-gray-900 h-full text-white transition-all duration-300 border-none z-10 sidebar">
			<div className="overflow-y-auto overflow-x-hidden flex flex-col justify-between flex-grow">
				<ul className="flex flex-col py-4 space-y-1">
					<li className="px-5 hidden md:block">
						<div className="flex flex-row items-center h-8">
							<div className="text-sm font-light tracking-wide text-gray-400 uppercase">Main</div>
						</div>
					</li>
					<SidebarItem element={<DashboardIcon />} href="/sales-manager" title="Dashboard" />
					<SidebarItem element={<OrdersIcon />} href="/sales-manager/orders" title="Orders" />
					<SidebarItem element={<EmployeesIcon />} href="/sales-manager/employees" title="Employees" />
					<SidebarItem element={<MessagesIcon />} href="/sales-manager/messages" title="Messages" />
					<SidebarItem element={<EmployeesIcon />} href="/sales-manager/add-employee" title="Add/Edit Employee" />

					<li className="px-5 hidden md:block">
						<div className="flex flex-row items-center mt-5 h-8">
							<div className="text-sm font-light tracking-wide text-gray-400 uppercase">Settings</div>
						</div>
					</li>
					<li>
						<a
							href="#"
							className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6">
							<span className="inline-flex justify-center items-center ml-4">
								<svg
									className="w-5 h-5"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
								</svg>
							</span>
							<span className="ml-2 text-sm tracking-wide truncate">Profile</span>
						</a>
					</li>
					<li>
						<a
							href="#"
							className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6">
							<span className="inline-flex justify-center items-center ml-4">
								<svg
									className="w-5 h-5"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
								</svg>
							</span>
							<span className="ml-2 text-sm tracking-wide truncate">Settings</span>
						</a>
					</li>
				</ul>
				<p className="mb-14 px-5 py-3 hidden md:block text-center text-xs">Copyright @2021</p>
			</div>
		</div>
	);
};

export default Sidebar;
