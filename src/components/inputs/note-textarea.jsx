import React from "react";

function NoteTextarea({ id = "", name = "", placeholder = "" }) {
    return (
        <textarea
            name={name}
            id={id}
            cols="30"
            rows="5"
            placeholder={placeholder}
            className="w-full rounded-lg p-3 text-white bg-secondary border-none focus:outline-primary"
        />
    );
}

export default NoteTextarea;
