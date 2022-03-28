# React Class-Based Components 2

## Instructions

Take this "Random Number Generator" project from last week, and reformat the `<App />` component into a **class-based component**!

**Note:** You can use my live coding from this morning, using the "Notes" app, as a guide in case you want to make sure you have remembered how to do something correctly. :-)

## Steps:

1. Change the ES6 function into a JS **class** which extends React.Component
2. In the constructor function of the new class, call **super()**. 
    >- Doing so will allow you to use the "this" keyword in the constructor. 
    >- (You can also add "props" as an argument if you will need to use props from a parent component inside your constructor).
3. Next, still in the constructor, create **this.state** and assign an **object** as its value, e.g.:

    ```js
    this.state = {
        myProperty: "hello"
    }
    ```
    >- This is our **state** - we can access its properties using, e.g., "this.state.myProperty"
    >- We can also update the state any time by calling: 
    
    ```js
    this.setState({
        // Update properties here...
    }). 
    ```
    >- In this way you can update any relevant state properties. This will also cause the UI to re-render to show the user the most up-to-date information.
4. Create a **render() method**.
    >- This will return the JSX which we want to render when we initialize our component, e.g. `<App />`
5. Change all other ES6 component functions to class **methods**. 
    >- These can be accessed elsewhere in your component using the "this" keyword, e.g. "this.myMethod()".
6. Check your **props** are using the **"this"** keyword to pass values to child components (e.g. `this.state.propertyName`) or methods (e.g. `this.myMethod`)
    >- Otherwise they won't work!
7. Make sure you **BIND** the value of **"this"** in the class constructor (at the top of your class) for ALL methods which use "this" in their logic:
    >- E.g. Any methods which use "this.state..." or "this.setState({...})"
    >- Doing this means your methods know "this" means your **overall component**. Otherwise they won't be able to find "state" or the "setState" method!