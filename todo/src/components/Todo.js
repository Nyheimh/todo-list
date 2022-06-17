import React, { useState } from "react";
// import TodoForm from "./TodoForm";
// import TodoList from "./TodoList";
import { TiEdit } from "react-icons/ti";
import { MdDelete } from "react-icons/md";
import TodoForm from "./TodoForm";

// todos & completeTodo brought in as props
function Todo({ todos, completeTodo, removeTodo, updateTodo }) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? "todo-row complete" : "todo-row"}
      key={index}
    >
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      {/* utilized npm i react-icons */}
      <div className="icons">
        <TiEdit
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
          className="edit-icon"
        />
        <MdDelete onClick={() => removeTodo(todo.id)} className="delete-icon" />
      </div>
    </div>
  ));
}

export default Todo;
