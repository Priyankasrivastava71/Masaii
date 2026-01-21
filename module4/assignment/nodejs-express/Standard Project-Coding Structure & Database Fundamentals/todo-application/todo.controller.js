import { getTodos, addTodo } from "./todo.model.js";

export const getAllTodos = (req, res) => {
  try {
    res.status(200).json(getTodos());
  } catch (error) {
    res.status(500).json({ message: "Error getting todos" });
  }
};

export const createTodo = (req, res) => {
  try {
    const { title } = req.body;

    if (!title) {
      return res.status(400).json({ message: "Title is required" });
    }

    const newTodo = {
      id: Date.now(),
      title
    };

    res.status(201).json(addTodo(newTodo));
  } catch (error) {
    res.status(500).json({ message: "Error creating todo" });
  }
};