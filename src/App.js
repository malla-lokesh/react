import ExpenseItem from './components/ExpenseItem'

function App() {

    const expenses = [
        {
            expenseItem: 'Food',
            expensePrice: 10,
            locationOfExpenditure: 'Shop'
        },
        {
            expenseItem: 'Petrol',
            expensePrice: 100,
            locationOfExpenditure: 'Bunk'
        },
        {
            expenseItem: 'Movie',
            expensePrice: 200,
            locationOfExpenditure: 'Theater'
        },
        {
            expenseItem: 'Exams',
            expensePrice: 500,
            locationOfExpenditure: 'University'
        }
    ]

    return (
        <div>
            <h1>Let's get started</h1>
            <h2>Expense Items:</h2>
            {
                expenses.map((expense) => (
                    <ExpenseItem
                        expenseItem = {expense.expenseItem}
                        expensePrice = {expense.expensePrice}
                        locationOfExpenditure = {expense.locationOfExpenditure}
                    ></ExpenseItem>
                ))
            }
        </div>
    )
}

export default App