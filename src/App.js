
import {useState} from "react";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";


const DUMMY_EXPENSES = [
  {
    id : 'e1',
    title: "toilet paper",
    amount: 94.12,
    date: new Date(2022, 7, 14)
  },
  {
    id:'e2',
    title: "car insurance",
    amount: 100.12,
    date: new Date(2021, 9, 12)
  },
  {
    id : 'e3',
    title: "new chair",
    amount: 200.12,
    date: new Date(2020, 9, 24)
  }
];


const App = () =>  {

  const[expenses , setExpenses ] = useState(DUMMY_EXPENSES);
  
 const addExpenseHandler =  (expense) => {
  setExpenses((prevExpenses) => {
    return[expense , ...prevExpenses];
  });

 };

  return (
    <div>
    <NewExpense onAddExpense={addExpenseHandler} />
  <Expenses items={expenses} /> 
</div>

  );
}
export default App;
