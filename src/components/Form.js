import React, { useState } from "react";
import firebase from "../util/firebase";

export default function Form() {
  const [title, setTitle] = useState("");

  const handleOnChange = (e) => {
    setTitle(e.target.value);
  };
  const createTodo = () => {
    const todoRef = firebase.database().ref("Todo");
    const todo = {
      title,
      complete: false,
    };
    if (title.length == 0) {
      alert("wpisz coś");
    } else {
      todoRef.push(todo);
      setTitle("");
    }
  };
  return (
    <div>
      <input type="text" onChange={handleOnChange} value={title} />
      <button onClick={createTodo}>Add Todo</button>
    </div>
  );
}
