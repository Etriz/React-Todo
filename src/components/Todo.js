import React from "react";

const Todo = (props) => {
  const item = props.item;
  const handleCompleted = () => {
    props.toggleCompleted(item.id);
  };
  return (
    <h2 className={`${item.completed ? "completed" : ""}`} onClick={handleCompleted}>
      {item.task}
    </h2>
  );
};

export default Todo;
