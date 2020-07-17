import React from "react";

import "./style.scss";

const Form = (props) => {
  const { text, changeText, onTodoSubmit } = props;
  return (
    <form
      className="todo-form"
      onSubmit={(evt) => {
        evt.preventDefault();
        console.log("submit");
        onTodoSubmit();
      }}
    >
      <input
        type="text"
        placeholder="Ajoutez une tâche"
        className="todo-input"
        value={text}
        onChange={(evt) => {
          console.log(evt.target.value);
          // PRevenir le state de son nouvel état
          changeText(evt.target.value);
        }}
      />
    </form>
  );
};

export default Form;
