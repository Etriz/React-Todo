// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo";

const TodoList = (props) => {
  return (
    <div>
      {props.list.length > 0 ? (
        props.list.map((item) => {
          return <Todo item={item} key={item.id} toggleCompleted={props.toggleCompleted} />;
        })
      ) : (
        <p>Your list is empty</p>
      )}
    </div>
  );
};

export default TodoList;
