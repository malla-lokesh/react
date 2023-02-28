import ExpenseItem from "./ExpenseItem"
import './Expenses.css'
import Card from "../UI/Card"

const Expenses = () => {
    const expenses = [
        {
            date: new Date(2023, 1, 27),
            expenseItem: 'Food',
            expensePrice: 10,
            locationOfExpenditure: 'Shop'
        },
        {
            date: new Date(2022, 7, 21),
            expenseItem: 'Petrol',
            expensePrice: 100,
            locationOfExpenditure: 'Bunk'
        },
        {
            date: new Date(2021, 9, 4),
            expenseItem: 'Movie',
            expensePrice: 200,
            locationOfExpenditure: 'Theater'
        },
        {
            date: new Date(2022, 10, 17),
            expenseItem: 'Exams',
            expensePrice: 500,
            locationOfExpenditure: 'University'
        }
    ]

    return(
        <Card className="expenses">
            <h2>Expense Items:</h2>
            {
                expenses.map((expense) => (
                    <ExpenseItem 
                        date = {expense.date}
                        expenseItem = {expense.expenseItem}
                        expensePrice = {expense.expensePrice}
                        locationOfExpenditure = {expense.locationOfExpenditure}
                    />
                ))
            }
        </Card>
    )
}

export default Expenses