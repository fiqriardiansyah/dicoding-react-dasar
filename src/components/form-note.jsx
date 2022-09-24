import React from "react";

import NoteInput from "./inputs/note-input";
import NoteTextarea from "./inputs/note-textarea";

function FormNote({ onSubmitHandler }) {
    const onSubmit = (e) => {
        e.preventDefault();
        const title = e.target.elements.title.value;
        const body = e.target.elements.body.value;

        if (!title.trim()) return;

        const data = {
            id: new Date().getTime(),
            title: title.trim(),
            body: body.trim(),
            createdAt: new Date(),
            archived: false,
        };

        onSubmitHandler(data);
    };

    return (
        <form action="" onSubmit={onSubmit} className="w-full xl:w-40vw mt-3">
            <NoteInput name="title" placeholder="Note title" />
            <div className="h-4" />
            <NoteTextarea name="body" placeholder="body" />
            <button
                type="submit"
                className="outline-1 outline outline-primary px-5 py-2 rounded-md hover:bg-secondary hover:text-white focus:bg-secondary focus:text-white capitalize"
            >
                create
            </button>
        </form>
    );
}

export default FormNote;
