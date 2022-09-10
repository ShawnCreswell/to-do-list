const Todo = (props) => {
  const {index, todo, handleToggleComplete, handleTodoDelete} = props;
  const todoClasses = ["bold", "italic"];

  if (props.todo.complete) {
    todoClasses.push("line-through");
  }

  return (
    <div className="card ">
      <div className="d-flex">
        <input
          className="me-2 ms-2"
          onChange={(event) => {
            handleToggleComplete(index);
          }}
          checked={todo.complete}
          type="checkbox"
        />
        <span className={todoClasses.join(" ")}>
          <h3>{todo.text}</h3>
        </span>
        <div className="ms-auto">
          <button
            className="btn btn-danger"
            onClick={(event) => {
              handleTodoDelete(index);
            }}
            style={{ marginLeft: "10px" }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};
export default Todo;
