import React from "react";
import { FaTrash } from "react-icons/fa";
import "./style.scss";

const Tasks = (props) => {
  const { list, checkTodo, deleteTodo } = props;
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
            <span
              onClick={() => {
                deleteTodo(todoObject.id);
              }}
              className="todo-delete"
            >
              <FaTrash />
            </span>
          </li>
        );
      })}
    </ul>
  );
};

export default Tasks;
