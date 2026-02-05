const supabase = require("../config/supabase");

exports.createTodo = async (req, res) => {
  const { title } = req.body;

  const { error } = await supabase.from("todos").insert([
    {
      title,
      completed: false,
      userId: req.user.userId,
    },
  ]);

  if (error) {
    return res.status(400).json({ error: error.message });
  }

  res.status(201).json({ message: "Todo created" });
};

exports.getTodos = async (req, res) => {
  const { data, error } = await supabase
    .from("todos")
    .select("*")
    .eq("userId", req.user.userId);

  if (error) {
    return res.status(400).json({ error: error.message });
  }

  res.json(data);
};

exports.updateTodo = async (req, res) => {
  const { id } = req.params;

  const { data: todo } = await supabase
    .from("todos")
    .select("*")
    .eq("id", id)
    .single();

  if (!todo || todo.userId !== req.user.userId) {
    return res.status(403).json({ message: "Unauthorized" });
  }

  await supabase.from("todos").update(req.body).eq("id", id);

  res.json({ message: "Todo updated" });
};

exports.deleteTodo = async (req, res) => {
  const { id } = req.params;

  const { data: todo } = await supabase
    .from("todos")
    .select("*")
    .eq("id", id)
    .single();

  if (!todo || todo.userId !== req.user.userId) {
    return res.status(403).json({ message: "Unauthorized" });
  }

  await supabase.from("todos").delete().eq("id", id);

  res.json({ message: "Todo deleted" });
};