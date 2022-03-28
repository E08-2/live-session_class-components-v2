import React from "react";

const Button = props => {
    return (
        <button onClick={props.getNumber}>Generate Random Number</button>
    );
}

export default Button;