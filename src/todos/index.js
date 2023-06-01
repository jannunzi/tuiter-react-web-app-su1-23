import React, { useState } from "react";
function Todos() {
  const [newTodoTitle, setNewTodoTitle] = useState("New Todo 234");
  //   let idCounter = 100;
  const [todos, setTodos] = useState([
    { id: 1, title: "Learn React", completed: false },
    { id: 2, title: "Learn JSX", completed: true },
    { id: 3, title: "Learn Hooks", completed: false },
    { id: 4, title: "Learn Router", completed: true },
    { id: 5, title: "Learn Route", completed: false },
    { id: 6, title: "Learn Navigate", completed: false },
    { id: 7, title: "Learn Link", completed: false },
  ]);
  //   const todos = state[0];
  //   const setTodos = state[1];
  const createTodo = () => {
    // alert("Create Todo");
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
    // alert("Delete Todo " + todo.title);
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
        <li className="list-group-item">
          <button onClick={createTodo} className="float-end btn btn-success">
            Add
          </button>
          <input
            value={newTodoTitle}
            type="text"
            onChange={(event) => {
              setNewTodoTitle(event.target.value);
            }}
            className="form-control w-75"
          />
        </li>
        {todos.map((todo, ndx) => (
          <li key={todo.id} className="list-group-item">
            <input
              onClick={(event) => {
                updateTodo({ ...todo, completed: !todo.completed });
              }}
              type="checkbox"
              checked={todo.completed}
              className="me-2 float-start"
            />
            <button
              onClick={() => deleteTodo(todo)}
              className="btn btn-danger float-end"
            >
              Delete
            </button>
            {!todo.editing && (
              <button
                onClick={() => {
                  updateTodo({ ...todo, editing: true });
                }}
                className="float-end btn btn-warning"
              >
                Edit
              </button>
            )}
            {todo.editing && (
              <button
                onClick={() => {
                  updateTodo({ ...todo, editing: false });
                }}
                className="float-end btn btn-warning"
              >
                Save
              </button>
            )}
            {todo.editing ? (
              <input
                className="float-start form-control w-50"
                value={todo.title}
                onChange={(event) => {
                  console.log(event.target.value);
                  const newTodo = { ...todo, title: event.target.value };
                  //   todos[ndx] = newTodo;
                  const newTodos = todos.map((t) =>
                    t.id === newTodo.id ? newTodo : todo
                  );
                  setTodos(newTodos);
                }}
              />
            ) : (
              <span>{todo.title}</span>
            )}
          </li>
        ))}
      </ul>
      <pre>{JSON.stringify(todos, null, 2)}</pre>
    </div>
  );
}

export default Todos;
