import React from "react";

import "./style.scss";

const Form = () => {
  return (
    <form className="todo-form">
      <input
        type="text"
        placeholder="Ajoutez une tâche"
        className="todo-input"
      />
    </form>
  );
};

export default Form;
