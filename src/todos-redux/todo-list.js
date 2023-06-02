import { useSelector, useDispatch } from "react-redux";
import NewTodoItemRedux from "./new-todo-item-redux";
import TodoItemRedux from "./todo-item-redux";
import { updateTodo, setTodos, deleteTodo } from "./todos-reducer";

function TodoList() {
  const { newTodoTitle, todos, loading, error } = useSelector(
    (state) => state.todos
  );
  const dispatch = useDispatch();
  return (
    <div>
      <ul className="list-group">
        <NewTodoItemRedux />
        {todos.map((todo) => (
          <TodoItemRedux todo={todo} todos={todos} key={todo.id} />
        ))}
      </ul>
      <pre>
        <code>{JSON.stringify(todos, null, 2)}</code>
      </pre>
    </div>
  );
}

export default TodoList;
