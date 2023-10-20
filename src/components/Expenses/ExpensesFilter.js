import React from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = ({onSelectedYear, filteredYear}) => {
	const years = ['All','2019', '2020', '2021', '2022', '2023'];
	const onChangeYearHandler = (e) => {
		onSelectedYear(e.target.value)
	}

	return (
		<div className='expenses-filter'>
			<div className='expenses-filter__control'>
				<label>Filter by year</label>
				<select onChange={onChangeYearHandler} value={filteredYear}>
					{years.map((optionVal)=> {
						return (
							<option key={optionVal} value={optionVal} >{optionVal}</option>
						)
					})}
				</select>
			</div>
		</div>
	);
};

export default ExpensesFilter;