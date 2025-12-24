import { useEffect, useState } from "react";
import React from "react";
function Todos() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => {
        setTodos(data.slice(0, 10)); // only first 10 todos
      });
  }, []);

  return (
    <div style={styles.container}>
      {todos.map((todo) => (
        <div key={todo.id} style={styles.card}>
          <h4>{todo.title}</h4>
          <p>
            Status:{" "}
            <strong>
              {todo.completed ? "Completed" : "Not Completed"}
            </strong>
          </p>
        </div>
      ))}
    </div>
  );
}

const styles = {
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
    padding: "20px",
  },
  card: {
    padding: "15px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    backgroundColor: "#f9f9f9",
  },
};

export default Todos;