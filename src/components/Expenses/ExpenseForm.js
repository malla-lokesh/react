import './ExpenseForm.css'

const ExpenseForm = () => {

    const printTitle = (event) => {
        console.log(event.target.value)
    }

    return <div className="form">
        <form>
            <label>Title</label>
            <input type='Text' onChange={printTitle}/>
            <label>Amount spent:</label>
            <input type='number'/>
            <label>Date:</label>
            <input type='Date'/>
            <button type="submit">Submit</button>
        </form>
    </div>
}

export default ExpenseForm