import { useState } from "react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function Feedback() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    feedback: "",
  })

  const [data, setData] = useState(null)

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit() {
    setData(form)
    setForm({ name: "", email: "", feedback: "" })
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Feedback Form</CardTitle>
      </CardHeader>

      <CardContent className="space-y-3">
        <Input name="name" placeholder="Name" value={form.name} onChange={handleChange} />
        <Input name="email" placeholder="Email" value={form.email} onChange={handleChange} />
        <Textarea name="feedback" placeholder="Feedback" value={form.feedback} onChange={handleChange} />
        <Button onClick={handleSubmit}>Submit</Button>

        {data && (
          <div>
            <p>Name: {data.name}</p>
            <p>Email: {data.email}</p>
            <p>Feedback: {data.feedback}</p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}