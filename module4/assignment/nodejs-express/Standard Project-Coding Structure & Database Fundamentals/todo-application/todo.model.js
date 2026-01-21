let todos = [];

export const getTodos = () => {
  return todos;
};

export const addTodo = (todo) => {
  todos.push(todo);
  return todo;
};