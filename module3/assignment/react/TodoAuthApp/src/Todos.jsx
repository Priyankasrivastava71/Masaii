import { useEffect, useState } from "react";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { signOut } from "firebase/auth";
import { auth, db } from "./firebase";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");

  const fetchTodos = async () => {
    const snapshot = await getDocs(
      collection(db, "todos", auth.currentUser.uid, "items")
    );
    setTodos(snapshot.docs.map((d) => ({ id: d.id, ...d.data() })));
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const addTodo = async () => {
    if (!title) return;
    await addDoc(
      collection(db, "todos", auth.currentUser.uid, "items"),
      { title }
    );
    setTitle("");
    fetchTodos();
  };

  const deleteTodo = async (id) => {
    await deleteDoc(
      doc(db, "todos", auth.currentUser.uid, "items", id)
    );
    fetchTodos();
  };

  return (
    <div>
      <h2>Todo App</h2>
      <button onClick={() => signOut(auth)}>Logout</button>

      <div>
        <input
          placeholder="New todo"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button onClick={addTodo}>Add</button>
      </div>

      {todos.map((todo) => (
        <div key={todo.id}>
          {todo.title}
          <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default Todos;