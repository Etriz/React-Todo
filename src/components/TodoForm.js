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
      <button>Add Item</button>
    </form>
  );
};

export default TodoForm;
