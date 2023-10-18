import ExpenseItem from "./ExpenseItem";
import './Expenses.css'
import Card from "./Card";

function Expenses({expenses}) {
	return (
		<Card className="expenses">
			{expenses.map(item => {
				return  <ExpenseItem key={item.id} title={item.title} amount={item.amount} date={item.date}/>
			})}
		</Card>
	);
}

export default Expenses;
