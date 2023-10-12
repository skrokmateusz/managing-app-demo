import React from 'react';

import NumbersCart from './numbers-cart';
import EmployeesIcon from '../../assets/numbers-carts/employees-icon';
import OrdersIcon from '@/assets/numbers-carts/orders-icon';
import SalesIcon from '@/assets/numbers-carts/sales-icon';
import MonthBalanceIcon from '@/assets/numbers-carts/month-balance-icon';

const NumbersCarts = () => {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 p-4 gap-4">
			<NumbersCart element={<EmployeesIcon />} number={10} title="Employees" />
			<NumbersCart element={<OrdersIcon />} number={15} title="Orders" />
			<NumbersCart element={<SalesIcon />} number={20} title="Sales" />
			<NumbersCart element={<MonthBalanceIcon />} number={25} title="Orders" />
		</div>
	);
};

export default NumbersCarts;
