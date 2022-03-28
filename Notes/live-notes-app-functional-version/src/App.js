import React, { useState } from "react";
import Button from "./components/Button";
import NoteList from "./components/NoteList";
import "./App.css";

const App = () => {
    // State variables
    // Current ID
    const [currentId, setCurrentId] = useState(0);
    // A list of already created notes
    const [notes, setNotes] = useState([]);
    // The note the user is currently creating in the input
    const [currentNote, setCurrentNote] = useState({ id: currentId, text: ""});

    // A function to update the current note the user is making
    const updateCurrentNote = event => {
        setCurrentNote({ id: currentId, text: event.target.value })
    }

    // A function to add a note to the list of notes:
    // 1. Add the currentNote to the notes array
    // 2. Update currentId by 1
    // 3. Reset the currentNote, ready for the user to create a new note
    const createNote = () => {
        // 1.
        setNotes([...notes, currentNote]);
        // 2
        setCurrentId(currentId + 1);
        // 3
        setCurrentNote({ id: currentId, text: ""});
    }

    // A function to delete a note when its "X" span is clicked
    const deleteNote = deletedId => {
        // Take the "notes" array
        // Update its value to include all note objects EXCEPT the one we clicked on
        setNotes(notes.filter(obj => obj.id !== deletedId));
    }

    // * Extra - Using the "id" prop
    
    // * 1. When creating a list (with .map) that you want to change, don't use an index as a key!
    // React recommends you do not use indexes as a key when mapping, as this could lead to unpredictable behaviour
    // Adding an item to a list, or removing an item, or reordering a list, could cause issues with the component state if you have used indexes as your keys

    // * 2. Using an id prop instead of index to select an element
    // Usually, when the app loads, we would receive data from a database, where each item would have its own unique id. 
    // Alternatively, you can set an "id" property for each item when it is created.
    // The id of an item will be fixed, and not change based on its position in the array.
    // So if you want to, e.g. delete an item, or target it in some way, you should use its id, passed as a prop, instead of its index.

    return (
        <>
            <h1>My Notes</h1>
            <input onChange={updateCurrentNote} value={currentNote.text} />

            <Button update={createNote} />

            <NoteList data={notes} delete1={deleteNote} />
        </>
    );
}

export default App;