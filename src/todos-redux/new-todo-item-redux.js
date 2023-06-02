import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { createTodo, setNewTodoTitle } from "./todos-reducer";

function NewTodoItemRedux() {
  const { newTodoTitle } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <li className="list-group-item">
      <button
        onClick={() => dispatch(createTodo())}
        className="float-end btn btn-success"
      >
        Add
      </button>
      <input
        value={newTodoTitle}
        type="text"
        onChange={(event) => {
          dispatch(setNewTodoTitle(event.target.value));
        }}
        className="form-control w-75"
      />
    </li>
  );
}

export default NewTodoItemRedux;
