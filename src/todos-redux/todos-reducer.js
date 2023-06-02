import { createSlice } from "@reduxjs/toolkit";

const todos = [
  { id: 1, title: "Learn React", completed: false },
  { id: 2, title: "Learn JSX", completed: true },
  { id: 3, title: "Learn Hooks", completed: false },
  { id: 4, title: "Learn Router", completed: true },
  { id: 5, title: "Learn Route", completed: false },
  { id: 6, title: "Learn Navigate", completed: false },
  { id: 7, title: "Learn Link", completed: false },
];

const initialState = {
  todos: todos,
  loading: false,
  error: null,
  newTodoTitle: "",
};

const todosSlice = createSlice({
  name: "todos",
  initialState: initialState,
  reducers: {
    createTodo: (state, action) => {
      const newTodo = {
        id: new Date().getTime(),
        title: state.newTodoTitle,
        completed: false,
      };
      const newTodos = [...state.todos, newTodo];
      state.todos = newTodos;
      state.newTodoTitle = "";
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((t) => t.id !== action.payload.id);
    },
    updateTodo: (state, action) => {
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return action.payload;
        }
        return todo;
      });
    },
    setTodos: (state, action) => {
      state.todos = action.payload;
    },
    setNewTodoTitle: (state, action) => {
      state.newTodoTitle = action.payload;
    },
  },
});

export default todosSlice.reducer;
export const { setNewTodoTitle, createTodo, deleteTodo, updateTodo, setTodos } =
  todosSlice.actions;
