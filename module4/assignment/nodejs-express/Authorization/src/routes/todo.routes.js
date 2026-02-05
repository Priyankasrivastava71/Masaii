const express = require("express");
const authMiddleware = require("../middleware/auth.middleware");
const {
  createTodo,
  getTodos,
  updateTodo,
  deleteTodo,
} = require("../controllers/todo.controller");

const router = express.Router();

router.use(authMiddleware);

router.post("/todos", createTodo);
router.get("/todos", getTodos);
router.put("/todos/:id", updateTodo);
router.delete("/todos/:id", deleteTodo);

module.exports = router;