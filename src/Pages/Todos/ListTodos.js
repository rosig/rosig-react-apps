import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "./ListTodos.css";

const Items = props => {
  return props.todos.map((todo, index) => (
    <li key={index} className="todo-li">
      <div className="todo-title">
        {todo.title}{" "}
        <FontAwesomeIcon
          icon={faTrash}
          className="todo-icon-trash"
          onClick={() => props.deleteTodo(todo.id)}
        />
      </div>
      <p>{todo.description}</p>
    </li>
  ));
};

const ListTodos = props => {
  return (
    <div className="listTodos-container">
      <ul>
        <Items todos={props.todos} deleteTodo={props.deleteTodo} />
      </ul>
    </div>
  );
};

export default ListTodos;
