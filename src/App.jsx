import React, { useState } from "react";
// import styles from "./components/todolist.css";
import Todo from "./components/todo";
import "./lux.css";
import "./App.css";

function App() {
  const [newTodo, setNewtodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleNewTodoSubmit = (event) => {
    event.preventDefault();

    if (newTodo.length === 0) {
      return;
    }

    const todoItem = {
      text: newTodo,
      complete: false,
    };

    setTodos([...todos, todoItem]);
    setNewtodo("");
  };

  const handleTodoDelete = (delIdx) => {
    const filterTodos = todos.filter((todo, index) => {
      return index !== delIdx;
    });

    setTodos(filterTodos);
  };

  const handleToggleComplete = (idx) => {
    console.log('******************** FIRED ********************')
    const updatedTodos = todos.map((todo, index) => {
      if (index === idx) {
        todo.complete = !todo.complete;
        // TO avoid mutate the todo directly do this:
        // const updatedTodos = { ...todo, complete: !todo.complete};
        // return updatedTodos;
      }
      return todo;
    });

    setTodos(updatedTodos);
  };

  return (
    <div className="container">
      <div className="row d-flex justify-content-center align-items-center">
        <div className="col">
          <div className="card">
            <div className="card-header">
              <h1 className="text-center">Create a Task</h1>
            </div>
            <div className="card-body d-flex justify-content-center">
              <form
                onSubmit={(event) => {
                  handleNewTodoSubmit(event);
                }}
              >
                <input
                  onChange={(event) => {
                    setNewtodo(event.target.value);
                  }}
                  type="text"
                  value={newTodo}
                />
                <div className="d-flex justify-content-center mt-3">
                  <button className="btn btn-primary">Add</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* <hr /> */}

      {todos.map((todo, index) => {
        return (
          <Todo
            key={index}
            index={index}
            todo={todo}
            handleToggleComplete={handleToggleComplete}
            handleTodoDelete={handleTodoDelete}
          />
        );
      })}
    </div>
  );
}

export default App;
