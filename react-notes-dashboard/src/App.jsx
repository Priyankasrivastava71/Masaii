import { useEffect, useContext } from "react";
import AddNote from "./components/AddNote";
import NotesList from "./components/NotesList";
import NotesCount from "./components/NotesCount";
import { NotesProvider, NotesContext } from "./context/NotesContext";

function Dashboard() {

  const { notes, setNotes } = useContext(NotesContext);

  useEffect(() => {
    const storedNotes = localStorage.getItem("notes");

    if (storedNotes && storedNotes !== "undefined") {
      setNotes(JSON.parse(storedNotes));
    } else {
      setNotes([]);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Notes Dashboard</h2>
      <AddNote />
      <NotesList />
      <NotesCount />
    </div>
  );
}

function App() {
  return (
    <NotesProvider>
      <Dashboard />
    </NotesProvider>
  );
}

export default App;