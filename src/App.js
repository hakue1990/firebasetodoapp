import React from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  return (
    <>
      <div className="App">
        <h1>Todo App</h1>
        <Form />
        <TodoList />
      </div>
      <p className="byAh">
        Made with <span style={{ color: "red" }}>♥</span> by Adam Hałdaś
      </p>
    </>
  );
}

export default App;
