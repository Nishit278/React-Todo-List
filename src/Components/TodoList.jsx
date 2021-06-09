import React, { useState } from "react";
import TodoForm from "./TodoForm";
import Todos from "./Todos";

function TodoList(props) {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    if (!todo.text) {
      return;
    }
    const newTodos = [todo, ...todos];
    setTodos(newTodos);
    console.log(...todos);
  };
  const handleDelete = id =>{
    const newTodos = [...todos];
    const todos3 = newTodos.filter(t => t.id !== id)
    setTodos(todos3);  
  }
  return (
    <div>
      <h1>My Todo List</h1>
      <TodoForm onSubmit={addTodo} />
      <ul className="list-group">
        <Todos todos={todos} onDelete={handleDelete}/>
      </ul>
    </div>
  );
}

export default TodoList;
