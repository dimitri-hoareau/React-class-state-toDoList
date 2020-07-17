import React from "react";

import "./style.scss";

const Tasks = (props) => {
  const { list, checkTodo } = props;
  return (
    <ul className="todo-list">
      {list.map((todoObject) => {
        const goodClass = todoObject.done ? "task task--done" : "task";
        return (
          <li key={todoObject.id} className={goodClass}>
            <input
              type="checkbox"
              checked={todoObject.done}
              onChange={() => {
                console.log("change");
                checkTodo(todoObject.id);
              }}
            />
            <span>{todoObject.label}</span>
          </li>
        );
      })}
    </ul>
  );
};

export default Tasks;
