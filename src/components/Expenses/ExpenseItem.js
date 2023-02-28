import './ExpenseItem.css'
import Card from '../UI/Card'
import ExpenseDate from './ExpenseDate'

const ExpenseItem = (props) => {
    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date}/>
            <div className='expense-item__description'>
                <h2>{props.expenseItem}</h2>
                <h2>{props.locationOfExpenditure}</h2>
                <div className='expense-item__price'>
                    Rs {props.expensePrice}
                </div>
            </div>
        </Card>
    )
}

export default ExpenseItem