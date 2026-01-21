import express from "express";
import todoRoutes from "./todo.routes.js";

const app = express();
app.use(express.json());

app.use("/todos", todoRoutes);

app.listen(3000, () => {
  console.log("Server started");
});