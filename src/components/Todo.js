import React from "react";

const Todo = (props) => {
  const item = props.item;
  const handleCompleted = () => {
    props.toggleCompleted(item.id);
  };
  return (
    <div className={`${item.completed ? "completed" : ""} listItem`} onClick={handleCompleted}>
      {item.task}
    </div>
  );
};

export default Todo;
