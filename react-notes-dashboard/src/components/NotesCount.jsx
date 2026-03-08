import { useContext, useMemo } from "react";
import { NotesContext } from "../context/NotesContext";

function NotesCount(){
    const {notes} = useContext(NotesContext);
    const total = useMemo(()=> notes.length, [notes]);
    return( <div className="count"><h3>Total Notes: {total}</h3></div>)
}

export default NotesCount;