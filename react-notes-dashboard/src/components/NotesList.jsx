import { useContext } from "react";
import { NotesContext } from "../context/NotesContext";

function NotesList(){
    const { notes, selected, setSelected } = useContext(NotesContext);
    return(
        <ul className="notes-list">
            {notes.map((note, index)=>(
                <li key={index}
                onClick={()=> setSelected(index)}
                style={{
                    cursor: "pointer",
                    background: selected === index ? "yellow" : "white",
                    padding: "5px"
                }}>
                    {note}
                </li>
            ))}
        </ul>
    );
}

export default NotesList;