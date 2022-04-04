import React from "react";
import "./Todo.css";

const Todo = ({description, remove, id}) => {
  return (
    <div className="Todo">
      <p className="Todo-description">{description}</p>
      <button className="Todo-button" onClick={() => remove(id)}>X</button>
    </div>
  )
}

export default Todo;