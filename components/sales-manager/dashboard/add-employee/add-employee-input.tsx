import React from 'react';

const AddEmployeeInput: React.FC<{ propsref: any; label: string; id: string }> = props => {
	return (
		<div className="mb-4 flex items-center justify-end">
			<label htmlFor="userEmail" className='mr-2'>
						{props.label}
					</label>
			<input
				className="border-solid border h-11 text-sm border-gray-400 rounded px-2 py-3"
				type="text"
				id={props.id}
				required
			
				ref={props.propsref}
			/>
		</div>
	);
};

export default AddEmployeeInput;
