import { useState } from "react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"

export default function Todo() {
  const [task, setTask] = useState("")
  const [todos, setTodos] = useState([])

  function addTodo() {
    if (!task) return
    setTodos([...todos, { text: task, done: false }])
    setTask("")
  }

  function toggleTodo(index) {
    const updated = [...todos]
    updated[index].done = !updated[index].done
    setTodos(updated)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Todo List</CardTitle>
      </CardHeader>

      <CardContent className="space-y-3">
        <div className="flex gap-2">
          <Input value={task} onChange={(e) => setTask(e.target.value)} placeholder="Add todo" />
          <Button onClick={addTodo}>Add</Button>
        </div>

        {todos.map((todo, index) => (
          <div key={index} className="flex items-center gap-2">
            <Checkbox checked={todo.done} onCheckedChange={() => toggleTodo(index)} />
            <span className={todo.done ? "line-through" : ""}>{todo.text}</span>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}