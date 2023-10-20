import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import {useState} from "react";

function App() {
    const expensesDefault = [
        {
            id: 'e1',
            title: 'Кухня',
            amount: 94.12,
            date: new Date(2020, 7, 14),
        },
        { id: 'e2', title: 'Телевізор', amount: 799.49, date: new Date(2021, 2, 12) },
        {
            id: 'e3',
            title: 'Стіл',
            amount: 294.67,
            date: new Date(2021, 2, 28),
        },
        {
            id: 'e4',
            title: 'Ліжко',
            amount: 450,
            date: new Date(2021, 5, 12),
        },
    ];
    const [expenses, setExpenses] = useState(expensesDefault)
    const newExpenseAddedHandler = (newExpenseData) => {
        const updatedExpenses = [...expenses];
        updatedExpenses.push(newExpenseData);

        console.log(newExpenseData)
        setExpenses(updatedExpenses)
    }

    return (
        <div>
            <h1>REACT 81 LESSON</h1>
            <NewExpense onNewExpenseAdded={newExpenseAddedHandler}/>
            <Expenses expenses={expenses} />
        </div>
    );
}

export default App;
