import ExpenseItem from './components/ExpenseItem'

function App() {

    const expenses = [
        {
            date: new Date(2023, 2, 27),
            expenseItem: 'Food',
            expensePrice: 10,
            locationOfExpenditure: 'Shop'
        },
        {
            date: new Date(2022, 8, 17),
            expenseItem: 'Petrol',
            expensePrice: 100,
            locationOfExpenditure: 'Bunk'
        },
        {
            date: new Date(2021, 10, 4),
            expenseItem: 'Movie',
            expensePrice: 200,
            locationOfExpenditure: 'Theater'
        },
        {
            date: new Date(2022, 11, 17),
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
                        date = {expense.date}
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