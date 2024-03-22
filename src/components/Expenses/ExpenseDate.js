import React from 'react'
import './ExpenseDate.css';

const ExpenseDate = (props) => {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const year = props.date.getFullYear();
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  return (
    <div className="expense_date ">
        <div className="expense-date__month">{month}</div>
        <div className="expense-date__yea">{year}</div>
        <div className="expens-date__day">{day}</div>
      </div>
  )
}

export default ExpenseDate;
