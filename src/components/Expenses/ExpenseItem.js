import React, {useState} from 'react'

import './ExpenseItem.css'
import Card from '../UI/Card'
import ExpenseDate from './ExpenseDate'

const ExpenseItem = (props) => {

    const [expenseItem, setExpenseItem] = useState(props.expenseItem)

    const updateHandler = () => {
        setExpenseItem('Updated')
        console.log(expenseItem)
    }

    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date}/>
            <div className='expense-item__description'>
                <h2>{expenseItem}</h2>
                <h2>{props.locationOfExpenditure}</h2>
                <div className='expense-item__price'>
                    Rs {props.expensePrice}
                </div>
            </div>
            <button onClick={updateHandler}>Update Expense</button>
        </Card>
    )
}

export default ExpenseItem