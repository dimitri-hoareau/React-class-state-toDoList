// == Import npm
import React from "react";

// == Import
import Form from "../Form";
import Counter from "../Counter";
import Tasks from "../Tasks";
import "./styles.css";

import todosData from "../../data/tasks";

// == Composant
const App = () => (
  <div className="app">
    <Form />
    <Counter number={0} />
    <Tasks list={todosData} />
  </div>
);

// == Export
export default App;
