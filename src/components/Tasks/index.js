import React from "react";

import "./style.scss";

const Tasks = (props) => {
  const { list } = props;
  return (
    <ul className="todo-list">
      {list.map((todoObject) => {
        const goodClass = todoObject.done ? "task task--done" : "task";
        return (
          <li className={goodClass}>
            <input type="checkbox" checked={todoObject.done} />
            <span>{todoObject.label}</span>
          </li>
        );
      })}
    </ul>
  );
};

export default Tasks;
