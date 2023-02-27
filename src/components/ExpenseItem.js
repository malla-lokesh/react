import './ExpenseItem.css'

function ExpenseItem(props) {
    return (
        <div>
            <div className='expense-item'>
                <div className='expense-item__description'>
                    <h2>{props.expenseItem}</h2>
                    <h2>{props.locationOfExpenditure}</h2>
                    <div className='expense-item__price'>
                        Rs {props.expensePrice}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExpenseItem