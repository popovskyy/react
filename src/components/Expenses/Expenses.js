import ExpenseItem from "./ExpenseItem";
import './Expenses.css'
import Card from '../UI/Card'
import ExpensesFilter from "./ExpensesFilter";
import {useState} from "react";

function Expenses({expenses}) {
	console.log(expenses)
	const [filteredExpenses, setFilteredExpenses] = useState(expenses);
	const [filteredYear, setFilteredYear] = useState('All');
	const selectedYearHandler = (year) => {
		setFilteredExpenses(filterExpensesByYear(year));
		setFilteredYear(year)
	}
	const filterExpensesByYear = (year) => {
		if (year === 'All') {
			return expenses;
		}

		const updatedFilteredExpenses = expenses.filter((expense) => {
			const expenseYear = new Date(expense.date).getFullYear().toString();
			return expenseYear === year;
		});

		return updatedFilteredExpenses;
	}

	return (
		<Card className="expenses">
			<ExpensesFilter onSelectedYear={selectedYearHandler} filteredYear={filteredYear}/>
			{filteredExpenses.map(item => {
				return  <ExpenseItem key={item.id} title={item.title} amount={item.amount} date={item.date}/>
			})}
		</Card>
	);
}

export default Expenses;
