import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  
  const [form, setForm] = useState(false)
  
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
    setForm(false)
  };

  const addNewExpenseHandler = () => {
    setForm(true)
  }

  const cancelForm = () => {
    setForm(false)
  }

  return (
    <div className='new-expense'>
      {!form && (
        <button onClick={addNewExpenseHandler}>Add New Expense</button>
      )}
      {form && (
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}
                     onCancel={cancelForm} />
      )}
    </div>
  );
};

export default NewExpense;