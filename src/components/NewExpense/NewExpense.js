import ExpenseForm from "./ExpenseForm"
import './NewExpense.css'

const NewExpense = (props) => {

    const saveExpenseData = (enteredExpenseData) => {
        console.log(enteredExpenseData)
        props.onGettingData(enteredExpenseData)
    }

    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseData}/>
        </div>
    )
}

export default NewExpense