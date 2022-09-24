import React from "react";
import Note from "./note";

function Notes({ notes, onClick, query }) {
    return (
        <div className="w-full grid gap-4 grid-cols-1 md:grid-cols-2 pb-20">
            {notes?.map((el) => (
                <Note query={query} data={el} key={el.id} onClick={onClick} />
            ))}
        </div>
    );
}

export default Notes;
