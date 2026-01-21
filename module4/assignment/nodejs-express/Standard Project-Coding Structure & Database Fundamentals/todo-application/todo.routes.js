import express from "express";
import { getAllTodos, createTodo } from "./todo.controller.js";

const router = express.Router();

router.get("/", getAllTodos);
router.post("/", createTodo);

export default router;