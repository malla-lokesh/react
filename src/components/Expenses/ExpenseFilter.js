import './ExpenseFilter.css'

export default function ExpenseFilter() {
    return (
        <div className="horizontal-layout">
            <h3>Filter by year</h3>
            <select className='dropdown'>
                <option>Choose a year</option>
                <option>2023</option>
                <option>2022</option>
                <option>2021</option>
                <option>2020</option>
                <option>2019</option>
                <option>2018</option>
            </select>
        </div>
    )
}