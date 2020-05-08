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
      <button type="submit" className="addBtn">
        Add Item
      </button>
      <button disabled={props.clearBtnDisabled} onClick={props.clearCompleted} className="clearBtn">
        Clear Complete
      </button>
    </form>
  );
};

export default TodoForm;
