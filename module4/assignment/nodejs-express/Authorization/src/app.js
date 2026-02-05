const express = require("express");
const authRoutes = require("./routes/auth.routes");
const todoRoutes = require("./routes/todo.routes");

const app = express();

app.use(express.json());

app.use("/auth", authRoutes);
app.use("/", todoRoutes);

module.exports = app;