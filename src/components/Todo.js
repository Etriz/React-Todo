import React from "react";

const Todo = ({ item }) => {
  return <p key={item.id}>{item.task}</p>;
};

export default Todo;
