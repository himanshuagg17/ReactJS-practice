import "./expenseDescription.css"

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