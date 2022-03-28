import React from "react";
import RandomNumber from "./RandomNumber";

const RandomNumberList = props => {
    return (
        <div>
            {
                props.data.map((num, index) => {
                    return <RandomNumber key={index} number={num} />
                })
            }
        </div>
    );
}

export default RandomNumberList;