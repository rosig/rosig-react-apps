import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import "./AddTodo.css";

const AddTodo = props => {
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = event => {
    event.preventDefault();
    setShowForm(false);
    setTitle("");
    setDescription("");
    props.addTodo({
      title: title,
      description: description,
      id: props.lastId + 1
    });
  };

  return (
    <div className="addtodo-container">
      <div className="iconPlus-wrapper">
        <FontAwesomeIcon
          icon={faPlusCircle}
          size="3x"
          className="icon-plus"
          onClick={() => setShowForm(true)}
        />
      </div>
      <div className={`addtodo-form ${showForm ? "" : "add-todo-off"}`}>
        <div className="button-wrapper">
          <button onClick={() => setShowForm(false)}> Voltar </button>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Título"
            value={title}
            onChange={event => setTitle(event.target.value)}
          />
          <textarea
            placeholder="O que vai fazer?"
            value={description}
            onChange={event => setDescription(event.target.value)}
          ></textarea>
          <input type="submit" value="Salvar" />{" "}
        </form>
      </div>
    </div>
  );
};

export default AddTodo;
