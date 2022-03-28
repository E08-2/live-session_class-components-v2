import React from "react";

const Note = props => {
    const deleteItem = () => {
        props.delete2(props.id);
    }
    
    return (
        <div className="note">
            {props.content}
            <span className="delete" onClick={deleteItem}>X</span>
        </div>
    );
}

export default Note;