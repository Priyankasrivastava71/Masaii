import {createContext, useState } from "react";

export const NotesContext = createContext();

export const NotesProvider = ({children}) => {
    const [notes, setNotes] = useState([]);
    const [selected, setSelected] = useState(null);
    const addNote = (note) =>{
        setNotes([...notes, note]);
    };
    return(
        <NotesContext.Provider value={{notes, setNotes, addNote, selected, setSelected}}>
            {children}
        </NotesContext.Provider>
    );
};
