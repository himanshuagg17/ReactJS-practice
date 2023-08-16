import "./expenseItem.css";

function ExpenseItem(props){
     return(
        <div className="expenseItem">
          <div>
            <h3>{props.title}</h3>
            <p>{props.amount}</p>
          </div>
        </div>
     )
}

export default ExpenseItem;