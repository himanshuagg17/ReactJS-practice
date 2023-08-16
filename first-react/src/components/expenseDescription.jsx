import "./expenseDescription.css"
import React from "react";
function ExpenseDescription(props){
     return(
        <div className="expenseDesc">
        <div>
          <p>{props.description}</p>
        </div>
      </div>
     )
}

export default ExpenseDescription;