import React, { useRef, FormEvent } from 'react';

import AddEmployeeInput from '../../../components/sales-manager/dashboard/add-employee/add-employee-input';

const AddEmployeePage = () => {
	const firstNameRef = useRef<HTMLInputElement>(null);
	const lastNameRef = useRef<HTMLInputElement>(null);
	const imageRef = useRef<HTMLInputElement>(null);
	const emailRef = useRef<HTMLInputElement>(null);
	const phoneRef = useRef<HTMLInputElement>(null);
	const adressRef = useRef<HTMLInputElement>(null);
	const regionRef = useRef<HTMLInputElement>(null);
	const carRef = useRef<HTMLInputElement>(null);
	const periodicRef = useRef<HTMLInputElement>(null);
	const medicalRef = useRef<HTMLInputElement>(null);
	const endContractRef = useRef<HTMLInputElement>(null);

	const submitHandler = async (event: FormEvent) => {
		event.preventDefault();

		const firstName = firstNameRef.current!.value;
		const lastName = lastNameRef.current!.value;
		const image = imageRef.current!.value;
		const email = emailRef.current!.value;
		const phone = phoneRef.current!.value;
		const adress = adressRef.current!.value;
		const region = regionRef.current!.value;
		const car = carRef.current!.value;
		const periodic = periodicRef.current!.value;
		const medical = medicalRef.current!.value;
		const endContract = endContractRef.current!.value;

		const response = await fetch('/api/auth/signup', {
			method: 'POST',
			body: JSON.stringify({
				firstName,
				lastName,
				image,
				email,
				phone,
				adress,
				region,
				car,
				periodic,
				medical,
				endContract,
			}),
			headers: {
				'Content-Type': 'application/json',
			},
		});
		const data = await response.json();
		if (!response.ok) {
			throw new Error(data.message || 'Something went wrong');
		}

		return data;
	};

	return (
		<div className="h-screen ml-14 mt-14 mb-10 md:ml-64">
			<div className="bg-white w-1/2 mt-10 rounded mx-auto flex flex-col items-center justify-center">
				<form onSubmit={submitHandler} className="mt-8 mb-4">
					<AddEmployeeInput propsref={firstNameRef} id="first-name" label="First name:" />
					<AddEmployeeInput propsref={lastNameRef} id="last-name" label="Last name:" />
					<AddEmployeeInput propsref={imageRef} id="image" label="Image" />
					<AddEmployeeInput propsref={emailRef} id="email" label="Email:" />
					<AddEmployeeInput propsref={phoneRef} id="phone-number" label="Phone number:" />
					<AddEmployeeInput propsref={adressRef} id="adress" label="Adress:" />
					<AddEmployeeInput propsref={regionRef} id="region" label="Region of sale:" />
					<AddEmployeeInput propsref={carRef} id="car" label="Car registration number:" />
					<AddEmployeeInput propsref={periodicRef} id="car-periodic-inspection" label="Car periodic inspection:" />
					<AddEmployeeInput
						propsref={medicalRef}
						id="medical-periodic-examinations"
						label="Medical periodic examinations:"
					/>
					<AddEmployeeInput propsref={endContractRef} id="end-of-contract" label="End of employment contract:" />

					<button className="bg-gray-700 h-11 text-sm hover:bg-gray-800 text-white font-bold w-full py-3" type="submit">
						Register employee
					</button>
				</form>
			</div>
		</div>
	);
};

export default AddEmployeePage;
