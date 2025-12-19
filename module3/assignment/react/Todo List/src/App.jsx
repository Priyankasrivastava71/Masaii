import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



import TodoList from "./TodoList";

function App() {
  const [showTodos, setShowTodos] = useState(true);

  return (
    <div>
      <h1>Todo App</h1>

      <button onClick={() => setShowTodos(false)}>
        Unmount Todos
      </button>

      {showTodos && <TodoList />}
    </div>
  );
}

export default App;
