import React, { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const addTodo = () => {
    if (inputValue.trim() === "") {
      return;
    }

    if (todos.includes(inputValue)) {
      alert("This value already exists in the list.");
      return;
    }

    setTodos([...todos, inputValue]);
    setInputValue("");
  };

  const removeTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  return (
    <div className="App">
      <header className="app-header">
        <h1>Todo App</h1>
      </header>
      <div className="todo-container">
        <div className="todo-input">
          <input type="text" value={inputValue} onChange={handleInputChange} />
          <button onClick={addTodo}>Add Todo</button>
        </div>
        <div className="todo-list">
          {todos.map((todo, index) => (
            <div key={index} className="todo-item">
              <span>{todo}</span>
              <button onClick={() => removeTodo(index)}>Remove</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
