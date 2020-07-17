import React from "react";
import { FaTrash, FaHeart, FaHeartBroken } from "react-icons/fa";
import "./style.scss";

const Tasks = (props) => {
  const { list, checkTodo, deleteTodo, handleFavClick } = props;
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
            <span
              onClick={() => {
                handleFavClick(todoObject.id);
              }}
              className="todo-delete"
            >
              {todoObject.favoris ? <FaHeart /> : <FaHeartBroken />}
            </span>
          </li>
        );
      })}
    </ul>
  );
};

export default Tasks;
