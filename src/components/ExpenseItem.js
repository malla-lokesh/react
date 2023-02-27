import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'

function ExpenseItem(props) {
    return (
        <div className='expense-item'>
            <ExpenseDate date={props.date}/>
            <div className='expense-item__description'>
                <h2>{props.expenseItem}</h2>
                <h2>{props.locationOfExpenditure}</h2>
                <div className='expense-item__price'>
                    Rs {props.expensePrice}
                </div>
            </div>
        </div>
    )
}

export default ExpenseItem