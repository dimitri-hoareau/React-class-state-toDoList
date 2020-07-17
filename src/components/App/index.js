// == Import npm
import React from "react";

// == Import
import Form from "../Form";
import Counter from "../Counter";
import Tasks from "../Tasks";
import "./styles.css";

// == Composant
const App = () => (
  <div className="app">
    <Form />
    <Counter />
    <Tasks />
  </div>
);

// == Export
export default App;
