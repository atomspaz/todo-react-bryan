import React from "react";

const Todo = () => {
  return (
    <main className="container">
      <h1>Hello World!</h1>
      <form>
        <label htmlFor="todo">Write your todo:</label>
        <input type="text" name="todo" id="todo" />
        <button>submit</button>
      </form>
    </main>
  );
};

export default Todo;
