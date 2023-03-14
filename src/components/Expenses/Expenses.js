import ExpenseItem from "./ExpenseItem"
import './Expenses.css'
import Card from "../UI/Card"
import NewExpense from "../NewExpense/NewExpense"
import { useState } from "react"
import ExpenseFilter from "./ExpenseFilter"

const dummy_expenses = [
    {
        id : 1,
        date: new Date(2023, 1, 27),
        expenseItem: 'Food',
        expensePrice: 10,
        locationOfExpenditure: 'Shop'
    },
    {
        id : 2,
        date: new Date(2022, 7, 21),
        expenseItem: 'Petrol',
        expensePrice: 100,
        locationOfExpenditure: 'Bunk'
    },
    {
        id : 3,
        date: new Date(2021, 9, 4),
        expenseItem: 'Movie',
        expensePrice: 200,
        locationOfExpenditure: 'Theater'
    },
    {
        id : 4,
        date: new Date(2022, 10, 17),
        expenseItem: 'Exams',
        expensePrice: 500,
        locationOfExpenditure: 'University'
    }
]

const Expenses = () => {
    const [expenses, setExpenses] = useState(dummy_expenses)

    const newExpenseData = expenseData => {
        setExpenses((prevExpenses) => {
            return [expenseData, ...prevExpenses]
        })
    }

    return(
        <div>
            <NewExpense onGettingData={newExpenseData}/>
            <Card className="expenses">
                <ExpenseFilter />
                {
                    expenses.map((expense) => (
                        <ExpenseItem 
                            key = {expense.id}
                            date = {expense.date}
                            expenseItem = {expense.expenseItem}
                            expensePrice = {expense.expensePrice}
                            locationOfExpenditure = {expense.locationOfExpenditure}
                        />
                    ))
                }
            </Card>
        </div>
    )
}

export default Expenses