import React from "react";

const TodoList = (props) => {
  return (
    <>
      <div className="todo_style">
        <button
          className="button_close"
          onClick={() => {
            props.onSelect(props.id);
          }}
        ></button>
        <li> {props.value}</li>
      </div>
    </>
  );
};

export default TodoList;
