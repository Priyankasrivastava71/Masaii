import TodoContextProvider from "./context/TodoContext";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

function Todos() {
  return (
    <TodoContextProvider>
      <AddTodo />
      <TodoList />
    </TodoContextProvider>
  );
}

export default Todos;