import React, { useState } from "react";

export const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    // Prevent page from refreshing when submitting new task
    e.preventDefault();
    // Only add to list if value is populated by user
    if (value) {
      addTodo(value);
    }
    // Set input field back to blank
    setValue("");
  };

  // Track input as user enters todo list item
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      {/* Input field for entering the to-do */}
      <input
        type="text"
        className="todo-input"
        placeholder="Enter your To Do"
        value={value}
        onChange={handleChange}
      />
      {/* Button to submit the to-do */}
      <button type="submit" className="todo-btn">
        Add To Do
      </button>
    </form>
  );
};
