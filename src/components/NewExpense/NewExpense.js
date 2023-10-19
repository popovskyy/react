import './NewExpense.css';
import NewExpenseForm from "./ExpenseForm";
function NewExpense(props) {
	const saveExpenseDataHandler = (data) => {
		const expenseData = {
			...data,
			id: Math.random().toString()
		}

		props.onNewExpenseAdded(expenseData);
	}

	return (
		<div className='new-expense'>
			<NewExpenseForm onSaveExpanseData={saveExpenseDataHandler}/>
		</div>
	);
}

export default NewExpense;
