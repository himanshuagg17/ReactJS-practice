import ExpenseItem from "./components/expenseItem";
import React from "react";
import ExpenseDescription from "./components/expenseDescription";
import ProductForm from "./components/ExpenseForm";
function App() {
  // creating the variables and passing it to the component
  let expenseDetails = [
    {
      id: "e1",
      title: "grocery",
      amount: 4000,
    },
    {
      id: "e2",
      title: "rent",
      amount: 8000,
    },
  ];

  let expenseDesc = [
    {
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum, quod. Pariatur molestias magni suscipit consequatur corporis laboriosam aut illum odit.",
    },
    {
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum, quod. Pariatur molestias magni suscipit consequatur corporis laboriosam aut illum odit. write some more random words which have abosolutely no need and no meaning either.",
    },
  ];


  
  const expenseDataHandler=(x)=>{
        const obj={
          ...x,
          id: Math.random().toString()
        }
        console.log(obj);
  }


  // passing the variables to the component.
  return (
    <div>
      <ExpenseItem
        title={expenseDetails[0].title}
        amount={expenseDetails[0].amount}
      ></ExpenseItem>

      <ExpenseItem
        title={expenseDetails[1].title}
        amount={expenseDetails[1].amount}
      ></ExpenseItem>

      <ExpenseDescription description={expenseDesc[0].desc} />

      <ExpenseDescription description={expenseDesc[1].desc} />

     

      <ProductForm onExpenseDataHandler={expenseDataHandler}/>
    </div>
  );
}

export default App;
