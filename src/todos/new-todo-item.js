function NewTodoItem({ newTodoTitle, setNewTodoTitle, createTodo }) {
  return (
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
  );
}

export default NewTodoItem;
