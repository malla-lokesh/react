import { useState } from 'react'
import './ExpenseForm.css'

const ExpenseForm = () => {

    const [enteredTitle, setEnteredTitle] = useState('')
    const [enteredAmount, setEnteredAmount] = useState('')
    const [enteredDate, setEnteredDate] = useState('')

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value)
    }

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value)
    }

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value)
    }

    const submittedForm = (event) => {
        event.preventDefault()

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }

        console.log(expenseData)
    }

    return <div className="form">
        <form onSubmit={submittedForm}>
            <label>Title</label>
            <input type='Text' onChange={titleChangeHandler}/>
            <label>Amount spent:</label>
            <input type='number' onChange={amountChangeHandler} />
            <label>Date:</label>
            <input type='Date' onChange={dateChangeHandler}/>
            <button type="submit">Submit</button>
        </form>
    </div>
}

export default ExpenseForm