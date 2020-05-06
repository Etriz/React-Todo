import React from "react";

const TodoForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <input
        type="text"
        id="add"
        name="add"
        placeholder="add item"
        value={props.inputValue}
        onChange={props.handleChange}
      />
      <button type="submit">Add Item</button>
      <button>Clear Complete</button>
    </form>
  );
};

export default TodoForm;
