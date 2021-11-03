import "./ExpenseDate.css";

const ExpenseDate = (props) => {
  const getMonth = props.date.toLocaleString("en-US", { month: "long" });
  const getYear = props.date.getFullYear();
  const getDay = props.date.getDate();
  return (
    <div className="expense-date">
      <div className="expense-date__month">{getMonth}</div>
      <div className="expense-date__year">{getYear}</div>
      <div className="expense-date__day">{getDay}</div>
    </div>
  );
};

export default ExpenseDate;
