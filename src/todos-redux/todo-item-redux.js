import React from "react";
import { useDispatch } from "react-redux";
import { updateTodo, deleteTodo, setTodos } from "./todos-reducer";

function TodoItemRedux({ todo, todos }) {
  const dispatch = useDispatch();
  return (
    <li key={todo.id} className="list-group-item">
      <input
        onClick={(event) => {
          dispatch(updateTodo({ ...todo, completed: !todo.completed }));
        }}
        type="checkbox"
        checked={todo.completed}
        className="me-2 float-start"
      />
      <button
        onClick={() => dispatch(deleteTodo(todo))}
        className="btn btn-danger float-end"
      >
        Delete
      </button>
      {!todo.editing && (
        <button
          onClick={() => {
            dispatch(updateTodo({ ...todo, editing: true }));
          }}
          className="float-end btn btn-warning"
        >
          Edit
        </button>
      )}
      {todo.editing && (
        <button
          onClick={() => {
            dispatch(updateTodo({ ...todo, editing: false }));
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
            const newTodos = todos.map((t) =>
              t.id === newTodo.id ? newTodo : t
            );
            dispatch(setTodos(newTodos));
          }}
        />
      ) : (
        <span>{todo.title}</span>
      )}
    </li>
  );
}

export default TodoItemRedux;
