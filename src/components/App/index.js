// == Import npm
import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
// == Import
import Form from "../Form";
import Counter from "../Counter";
import Tasks from "../Tasks";
import "./styles.css";

import todosData from "../../data/tasks";

class App extends Component {
  state = {
    newTodoText: "",
    todos: todosData,
  };

  changeTodoText = (texteTodo) => {
    // Je modifie mon state
    // pour changer le texte de l'input
    this.setState({
      newTodoText: texteTodo,
    });
  };

  addTodo = () => {
    // Je récupère le texte
    const { newTodoText } = this.state;
    // Je fabrique l'objet todo à rajouter
    const newTodo = {
      id: uuidv4(),
      label: newTodoText,
      done: false,
    };
    // Lorsque je modofie le state,
    // je NE DOIS JAMAIS modifier
    // le state directement
    // this.state.truc = "quelquechose"
    // La ligne ci dessus VIOLE le principe
    // fondamental de la programmation fonctionnelle
    // UNE FONCTION NE MODIFIE JAMAIS ELLE MEME
    // UNE VALEUR QU'ELLE REÇOIT
    const newTodos = [newTodo, ...this.state.todos];
    this.setState({
      todos: newTodos,
      newTodoText: "",
    });
  };

  todoCount = () => {
    const { todos } = this.state;
    const filtered = todos.filter((todoObjet) => {
      return todoObjet.done === false;
    });

    return filtered.length;
  };

  handleCheckTodo = (id) => {
    // Mettre dans le state un nouveau tableau de todos
    // Dans ce tableau, je veux lers mêmes objets todos
    // quavant, mais l'objet ayant l'id reçu en paramètre
    // devra voir son .done inversé
    const newTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo, // Je récupère les propriétés intiales
          done: !todo.done,
        };
      }
      return todo;
    });

    this.setState({
      todos: newTodos,
    });
  };

  deleteTodo = (id) => {
    console.log("Je dois supprimer la todo ", id);
    const newTodos = this.state.todos.filter((todoObject) => {
      return todoObject.id !== id;
    });

    this.setState({
      todos: newTodos,
    });
  };

  render() {
    // J'extraie les todos du state
    const { todos, newTodoText } = this.state;
    return (
      <div className="app">
        <Form
          text={newTodoText}
          onTodoSubmit={this.addTodo}
          changeText={this.changeTodoText}
        />
        <Counter number={this.todoCount()} />
        <Tasks
          list={todos}
          checkTodo={this.handleCheckTodo}
          deleteTodo={this.deleteTodo}
        />
      </div>
    );
  }
}

// Transformer App en class
// lui donner un state
// mettre la liste des todos dans le state
// Rajouter une todo dans le state depuis composant Form
// Form doit recevoir une méthode qui vient de App
// La méthode dans App reçoive un texte de todo
// Avec le texte, la méthode rajoute une todo dans le state

// == Export
export default App;
