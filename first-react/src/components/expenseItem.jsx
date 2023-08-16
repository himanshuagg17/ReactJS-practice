import "./expenseItem.css";
import React, { useState } from "react";

function ExpenseItem(props) {
  // useState returns a variable , here it is "title" and a fucntion , here it is "setTitle".
  // useState is used to update the value of any variable, like the color , text etc.

  const [title, setTitle] = useState(props.title);

  const [newTitle, setNewTitle]=useState("");

  return (
    <div className="expenseItem">
      <div>
        <h3>{title}</h3>
        <p>{props.amount}</p>
      </div>

      {/* creating a button and changing the title of the element */}
      <button onClick={() => {
          setTitle(newTitle);
      }}>change the title</button>


      {/* we will create an input box and the text in the input box will go on to replace the title */}

      <input type="text" name="" id="" onChange={(e)=>{
        setNewTitle(e.target.value);
      }} />
    </div>
  );
}

export default ExpenseItem;
