import React, { useState } from "react";
import NewTodoItem from "./new-todo-item";
import TodoItem from "./todo-item";
function Todos() {
  const [newTodoTitle, setNewTodoTitle] = useState("New Todo 234");
  const [todos, setTodos] = useState([
    { id: 1, title: "Learn React", completed: false },
    { id: 2, title: "Learn JSX", completed: true },
    { id: 3, title: "Learn Hooks", completed: false },
    { id: 4, title: "Learn Router", completed: true },
    { id: 5, title: "Learn Route", completed: false },
    { id: 6, title: "Learn Navigate", completed: false },
    { id: 7, title: "Learn Link", completed: false },
  ]);
  const createTodo = () => {
    const newTodo = {
      id: new Date().getTime(),
      title: newTodoTitle,
      completed: false,
    };
    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
    console.log(todos);
    setNewTodoTitle("");
  };
  const deleteTodo = (todo) => {
    const newTodos = todos.filter((t) => t.id !== todo.id);
    setTodos(newTodos);
  };
  const updateTodo = (newTodo) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === newTodo.id) {
        return newTodo;
      }
      return todo;
    });
    setTodos(newTodos);
  };
  return (
    <div>
      <h1>Todos</h1>
      <ul className="list-group">
        <NewTodoItem
          createTodo={createTodo}
          newTodoTitle={newTodoTitle}
          setNewTodoTitle={setNewTodoTitle}
        />
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            todos={todos}
            updateTodo={updateTodo}
            deleteTodo={deleteTodo}
            setTodos={setTodos}
          />
        ))}
      </ul>
      <pre>{JSON.stringify(todos, null, 2)}</pre>
    </div>
  );
}

export default Todos;
