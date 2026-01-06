import Feedback from "./Feedback"
import ImageChange from "./ImageChange"
import Todo from "./Todo"

export default function App() {
  return (
    <div className="p-6 space-y-6">
      <Feedback />
      <ImageChange />
      <Todo />
    </div>
  )
}