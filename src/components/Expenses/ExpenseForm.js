import { useState } from 'react'
import './ExpenseForm.css'

const ExpenseForm = () => {

    const [enteredTitle, setEnteredTitle] = useState('')
    const [enteredAmount, setEnteredAmount] = useState('')
    const [enteredDate, setEnteredDate] = useState('')

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value)
        console.log(enteredTitle)
    }

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value)
        console.log(enteredAmount)
    }

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value)
        console.log(enteredDate)
    }

    return <div className="form">
        <form>
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