import React, { useState } from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import { CSSTransition } from 'react-transition-group';

const TodosList = ({ todos, setTodos }) => {
  const list = todos.map(todo => {
    return (
      <li key={todo.id}>
        <p>{todo.text}</p>
        <div>
          <button className="btn-delete-todo" onClick={
            () => setTodos(todos.filter(td => td.id !== todo.id))}>Apagar</button>
        </div>
      </li>
    );
  });
  return list;
};

const Todos = () => {
  const [todos, setTodos] = useState([{ text: "Nesse vai e volta", id: 0 }]);
  const [showAddContainer, setShowAddContainer] = useState(false);
  const [text, setText] = useState("");
  const [id, setId] = useState(1);

  return (
    <div className="todos-container">
      <FontAwesomeIcon
        icon={faPlusSquare}
        size="3x"
        className="todos-icon-add"
        onClick={() => setShowAddContainer(!showAddContainer)} />

      <CSSTransition
        in={showAddContainer}
        unmountOnExit={true}
        timeout={500}
        classNames="moveAddTodo">
        <div className="add-todo-container">
          <input type="text" onChange={(e) => setText(e.target.value)}></input>
          <button onClick={
            () => {
              if (text) {
                setTodos([...todos, { text: text, id: id }]);
                setId(id + 1);
                setText("");
                setShowAddContainer(false);
              }
            }}>
            Adicionar</button>
        </div>
      </CSSTransition>

      <CSSTransition
        in={showAddContainer}
        timeout={500}
        classNames="moveTodoList">
        <ul className="ul-todo">
          <TodosList todos={todos} setTodos={setTodos} />
        </ul>
      </CSSTransition>
    </div>
  );
};

export default Todos;
