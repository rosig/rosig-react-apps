import React, { useState } from "react";
import "./Todos.css";

import AddTodo from "./AddTodo";
import ListTodos from "./ListTodos";

const Todos = () => {
  const [todos, setTodos] = useState([
    {
      title: "Título teste",
      description: "Descrição teste",
      id: 0
    }
  ]);
  const [lastId, setLastId] = useState(0);

  const addTodo = todo => {
    setTodos([...todos, todo]);
    setLastId(lastId + 1);
  };

  const deleteTodo = id => {
    setTodos(
      todos.filter(todo => {
        return todo.id !== id;
      })
    );
  };

  return (
    <div className="todos-container">
      <AddTodo addTodo={addTodo} lastId={lastId} />
      <ListTodos todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
};

export default Todos;
