import React from "react";
import RandomNumberList from "./components/RandomNumberList";
import Button from "./components/Button";
import "./App.css"

// README: Step 1
class App extends React.Component {
    constructor() {
        // README: Step 2
        super();

        // README: Step 7
        this.getNewRandomNumber = this.getNewRandomNumber.bind(this);

        // README: Step 3
        this.state = {
            randomNumbers: []
        }
    }

    // README: Step 5
    getNewRandomNumber() {
        let randomNum = Math.floor(Math.random() * 99) + 1;

        this.setState({
            randomNumbers: [...this.state.randomNumbers, randomNum]
        })
    }

    // README: Step 4
    render() {
        return (
            <div>
                <h1>Random Number Generator</h1>

                {/* 2B. When the button is clicked, call the "getNewRandomNumber" function (line 14) */}
                {/* README: Step 6A */}
                <Button getNumber={this.getNewRandomNumber} />

                {/* 3. Now that "randomNumbers" has been updated, the new array will be passed to the <RandomNumberList /> component as a prop... */}
                {/* Now let's go to "RandomNumberList.js"... */}
                {/* README: Step 6B */}
                <RandomNumberList data={this.state.randomNumbers} />
            </div>
        )
    }
}

export default App;

// =====================================

// ! The previous functional version of the App component:

// const App = () => {
//     // 1. Create a state variable to keep track of an array of random numbers by using a hook
//     //    At the same time, create a function we can use to update this variable if something changes
//     const [randomNumbers, setRandomNumbers ] = useState([]);
    
//     // 2. Create a function, which generates a new random number
//     //    When a new random number is generated, add it to the end of the "randomNumbers" array
//     // * Now, randomNumbers has been updated, which will trigger a re-render of the UI so the user can see what changed!

//     const getNewRandomNumber = () => {
//         let randomNum = Math.floor(Math.random() * 99) + 1;

//         setRandomNumbers([...randomNumbers, randomNum]);
//     }

//     return (
//         <div>
//             <h1>Random Number Generator</h1>

//             {/* 2B. When the button is clicked, call the "getNewRandomNumber" function (line 14) */}
//             <Button getNumber={getNewRandomNumber} />

//             {/* 3. Now that "randomNumbers" has been updated, the new array will be passed to the <RandomNumberList /> component as a prop... */}
//             {/* Now let's go to "RandomNumberList.js"... */}
//             <RandomNumberList data={randomNumbers} />
//         </div>
//     );
// }