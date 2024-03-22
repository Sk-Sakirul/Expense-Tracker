import React, { useState } from "react";
import "./ExpenseForm.css";

const URL = `http://localhost:4000/api/data/expense`;

const ExpenseForm = (props) => {
  const [inputData, setInputData] = useState({
    title: "",
    amount: "",
    date: "",
  });

  const changeHandler = (e) => {
    var name = e.target.name;
    var value = e.target.value;
    setInputData({
      ...inputData,
      [name]: value,
    });
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    const expenseData = {
      title: inputData.title,
      amount: inputData.amount,
      date: new Date(inputData.date), // Convert date string to Date object
    };

    props.onSaveExpenseData(expenseData);

    const response = await fetch(URL, {
      method:"POST",
      headers:{
        "Content-Type":"application/json",
      },
      body:JSON.stringify(inputData),
    });

    console.log(response);

    setInputData({
      title: "",
      amount: "",
      date: "",
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            name="title"
            id="title"
            value={inputData.title}
            onChange={changeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            name="amount"
            id="amount"
            min="0.01"
            step="0.01"
            value={inputData.amount}
            onChange={changeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            name="date"
            id="date"
            value={inputData.date}
            onChange={changeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
