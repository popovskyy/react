import ExpenseItem from "./ExpenseItem";

function Expenses({expenses}) {
	return (
		<div className="expenses">
			{expenses.map(item => {
				return  <ExpenseItem key={item.id} title={item.title} amount={item.amount} date={item.date}/>
			})}
		</div>
	);
}

export default Expenses;
