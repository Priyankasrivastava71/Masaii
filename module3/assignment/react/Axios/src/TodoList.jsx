import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getTodos } from "./todoService";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getTodos().then((data) => setTodos(data));
  }, []);

  return (
    <div>
      <h2>Todo List</h2>

      <ul>
        {todos.slice(0, 20).map((todo) => (
          <li key={todo.id}>
            <Link to={`/todo/${todo.id}`}>
              {todo.title} — {todo.completed ? "✅" : "❌"}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;