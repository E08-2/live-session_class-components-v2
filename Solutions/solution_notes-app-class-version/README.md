# Notes App - Exercise 1

So far we have updated the "Notes" app, so that its `<App />` component is a class-based component.

We have also created three class methods:

- `render()`, to render some JSX to the browser
- `updateCurrentNote()` to manage the `currentNote` property of state when the user types into the input
- `createNote()` to add the current note object to the `notes` property of state (an array) when the user clicks the button

### Your Task

Complete the app by creating a fourth and final method, `deleteNote`, which will allow you to delete a note by clicking its "X" span.

You can check out how this worked in your **functional** component, and try to reproduce the logic in your new class-based component. :-)

**Remember:** You **only** have to update **`App.js`**, your new class-based component! Your `NoteList` child component is already set up to work with your new method, as long as it is passed the correct prop!

### Checklist:

Make sure you:

- Create your method using ES5 syntax
- Use `this.setState` to update your component's state in the way you want
- Pass your method down to the `NoteList` component in a prop called `delete1` (the same as this morning's live coding). Make sure you remember that the `this` keyword is always important in a class-based component!
- Bind the value of **`this`** for your new method in the class constructor.