import React from "react";
import PropTypes from "prop-types";

import "./style.scss";

const Counter = (props) => {
  const { number } = props;
  const message = number > 1 ? "Tâches en cours" : "Tâche en cours";

  return (
    <div className="todo-counter">
      {number} {message}
    </div>
  );
};

Counter.propTypes = {
  number: PropTypes.number.isRequired,
};

export default Counter;
