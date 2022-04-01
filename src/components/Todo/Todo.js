import React, { useState } from "react";

const Todo = () => {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo) {
      const todoItem = { id: new Date().getTime().toString(), todo };
      setTodoList((allList) => {
        return [...todoList, todoItem];
      });
      setTodo("");
    }
  };

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  return (
    <main className="container">
      <h1>Hello World!</h1>
      <form>
        <label htmlFor="todo">Write your todo:</label>
        <input
          type="text"
          name="todo"
          id="todo"
          value={todo}
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>submit</button>
        <div>
          {todoList.map((item, id) => {
            const { todo } = item;
            return <p key={id}>{todo}</p>;
          })}
        </div>
      </form>
    </main>
  );
};

export default Todo;
