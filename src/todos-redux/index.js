import React from "react";
import store from "./store";
import { Provider } from "react-redux";
import TodoList from "./todo-list";

function TodosRedux() {
  return (
    <Provider store={store}>
      <h1>Todos Redux</h1>
      <TodoList />
    </Provider>
  );
}

export default TodosRedux;
