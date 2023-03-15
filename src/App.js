import React, { useState } from 'react';

import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Food',
    amount: 10,
    date: new Date(2023, 1, 27),
    locationOfExpenditure: 'Shop'
  },
  { id: 'e2', 
    title: 'Petrol', 
    amount: 100, 
    date: new Date(2022, 7, 21),
    locationOfExpenditure: 'Bunk'
  },
  {
    id: 'e3',
    title: 'Movie',
    amount: 200,
    date: new Date(2021, 9, 4),
    locationOfExpenditure: 'Theater'
  },
  {
    id: 'e4',
    title: 'Exams',
    amount: 500,
    date: new Date(2020, 10, 17),
    locationOfExpenditure: 'University'
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;