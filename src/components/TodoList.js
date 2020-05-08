// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo";

const TodoList = (props) => {
  return (
    <div className="list">
      {props.list.length > 0 ? (
        props.list.map((item) => {
          return <Todo item={item} key={item.id} toggleCompleted={props.toggleCompleted} />;
        })
      ) : (
        <div>Your list is empty</div>
      )}
    </div>
  );
};

export default TodoList;
