import React from "react";
import Button from "./components/Button";
import NoteList from "./components/NoteList";
import "./App.css";

// * Let's now make <App /> into a class-based component. But why might we do this...?

// Before 2019 (v. 16.8), only class-based React components could have "state".
// Back then, there was a distinction between class-based and functional components:
// ? Class-based: "stateful" components ("container" or "smart" components)
// ? Functional: "stateless" components ("presentational" or "dumb" components)

// * In this schema, a "stateful" component has state; a "stateless" component doesn't!
// A stateful component could keep track of, and let us change, the data our app needs to know about.
// A stateless component would simply render what it was told to!

// * Since 2019, with the addition of React hooks, functional components have become a more popular way of creating components...
// ... But you will probably encounter class-based components if you work with React. So let's look at them!

// ======================================================================

// * Let's make a class-based version of <App />

// 1. Change the ES6 function into a JS CLASS, which extends React.Component
class App extends React.Component {
    // 2. In the constructor function of the new class, call super()
    // Doing so, will allow you to use the "this" keyword in the constructor
    constructor() {
        super();

        // 6. Make sure that our methods know that "this" should refer to the current component (in this case, "App")
        // * To do this, we must BIND the value of "this" for every method which use the "this" keyword in their logic
        this.updateCurrentNote = this.updateCurrentNote.bind(this);
        this.createNote = this.createNote.bind(this);
        this.deleteNote = this.deleteNote.bind(this);

        // 3. Still in the constructor, create "this.state" and assign an OBJECT as its value
        // This is our state - we can access it at any time using, e.g. "this.state.notes".
        // * We can also update the state at any time by using "this.setState()". More about this later!
        this.state = {
            currentId: 0,
            notes: [],
            currentNote: { id: 0, text: "" }
        };
    }

    // * Methods start here ============================

    // 5A. A method of the class component to update the current note as the user types into the input
    updateCurrentNote(event) {
        // Update the "state" object using "this.setState()"
        this.setState({
            currentNote: {
                id: this.state.currentId,
                text: event.target.value
            }
        })
    }

    // 5B. A method of the class component to add a new note when the user clicks the button
    createNote() {
        // 1. Create a "newId" variable to update the current value of "currentId" in this.state by 1
        let newId = this.state.currentId + 1;
        
        // Use this.setState to update the properties in this.state to the most up-to-date versions
        this.setState({
            // 1. Add the new note to the "notes" array
            notes: [...this.state.notes, this.state.currentNote],
            // 2. Update the currentId property by 1
            currentId: newId,
            // 3. Reset the currentNote property, ready for the user to start creating a new note
            currentNote: { 
                id: newId,
                text: ""
            }
        })
    }

    // ! 5C. Create a new method of the class component to delete a note here
    // ? Your code goes here!
    deleteNote(deletedId) {
        this.setState({
            notes: this.state.notes.filter(obj => obj.id !== deletedId)
        })
    }
    
    
    // 4. Create a render() method
    // This will return the JSX which we want to render when we initialize our component 
    render() {
        return (
            <>
                <h1>My Notes</h1>
                <input onChange={this.updateCurrentNote} value={this.state.currentNote.text} />

                <Button update={this.createNote} />

                <NoteList data={this.state.notes} delete1={this.deleteNote} />
            </>
        )
    }


}


// ! The old functional version of <App />...

// const App = () => {
//     // State variables
//     // Current ID
//     const [currentId, setCurrentId] = useState(0);
//     // A list of already created notes
//     const [notes, setNotes] = useState([]);
//     // The note the user is currently creating in the input
//     const [currentNote, setCurrentNote] = useState({ id: currentId, text: ""});

//     // A function to update the current note the user is making
// const updateCurrentNote = event => {
//     setCurrentNote({ id: currentId, text: event.target.value })
// }

//     // A function to add a note to the list of notes:
//     // 1. Add the currentNote to the notes array
//     // 2. Update currentId by 1
//     // 3. Reset the currentNote, ready for the user to create a new note
//     const createNote = () => {
//         // 1.
//         setNotes([...notes, currentNote]);
//         // 2
//         setCurrentId(currentId + 1);
//         // 3
//         setCurrentNote({ id: currentId, text: ""});
//     }

//     // A function to delete a note when its "X" span is clicked
//     const deleteNote = deletedId => {
//         // Take the "notes" array
//         // Update its value to include all note objects EXCEPT the one we clicked on
//         setNotes(notes.filter(obj => obj.id !== deletedId));
//     }

//     return (
//         <>
//             <h1>My Notes</h1>
//             <input onChange={updateCurrentNote} value={currentNote.text} />

//             <Button update={createNote} />

//             <NoteList data={notes} delete1={deleteNote} />
//         </>
//     );
// }

export default App;