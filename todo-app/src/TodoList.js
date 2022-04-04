import React, { useState } from "react";
import { v4 as uuid } from 'uuid';
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";
import "./TodoList.css";

const TodoList = () => {
  const INITIAL_STATE = [
    {
      description: "wash dishes",
      id: uuid()
    },
    {
      description: "Do laundry",
      id: uuid()
    }
  ];

  const [todos, setTodos] = useState(INITIAL_STATE);

  const addTodo = (newTodo) => {
    setTodos(todos => [...todos, {...newTodo, id: uuid()}]);
  }

    const remove = (todoId) => {
      // set boxes to new array only containing boxes that dont match the id of the one we want to remove
      setTodos(todos.filter(t => t.id !== todoId));
  };

  const renderTodos = (todos) => {
    return todos.map((todo) => {
      return <Todo
        key={todo.id}
        description={todo.description}
        id={todo.id} 
        remove={remove}
        />
      });
  } 

  return (
    <div className="TodoList">
      <h1 className="TodoList-title">Todo List</h1>
      <NewTodoForm addTodo={addTodo}/>
      {renderTodos(todos)}
    </div>
  )
}

export default TodoList;