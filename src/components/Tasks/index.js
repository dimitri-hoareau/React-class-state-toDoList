import React from "react";

import "./style.scss";

const Tasks = () => {
  return (
    <ul className="todo-list">
      <li className="task">
        <input type="checkbox" />
        <span>Titre de la todo</span>
      </li>
      <li className="task task--done">
        <input type="checkbox" checked />
        <span>Titre de la duxieme todo</span>
      </li>
      <li className="task">
        <input type="checkbox" />
        <span>Titre de la troisieme todo</span>
      </li>
    </ul>
  );
};

export default Tasks;
