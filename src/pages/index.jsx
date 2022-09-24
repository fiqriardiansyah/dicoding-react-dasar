import React, { useState, useMemo } from "react";
import Header from "../components/header";
import Notes from "../components/notes";
import Menus from "../components/menus";
import Empty from "../components/empty";
import Modal from "../components/modals/modal";
import FormNote from "../components/form-note";

import utils from "../utils";
import Data from "../data";

function App() {
    const [notes, setNotes] = useState(Data());
    const [menuActive, setMenuActive] = useState(utils.menus[0]);
    const [query, setQuery] = useState();

    const onSearchChange = (q) => {
        setQuery(q);
    };

    const onClickNote = ({ type, id }) => {
        setNotes((prev) => {
            if (type === "state") {
                return [...prev].map((note) => {
                    if (note.id !== id) return note;
                    return {
                        ...note,
                        archived: !note.archived,
                    };
                });
            }
            return [...prev].filter((note) => note.id !== id);
        });
    };

    const newNoteHandler = (note) => {
        setNotes((prev) => [...prev, note]);
    };

    const filteredNotes = useMemo(
        () => utils.filterNotes({ notes, menu: menuActive, query }),
        [menuActive, query, notes],
    );

    const textEmpty = (() => {
        if (query) return `no notes for '${query}'`;
        return `no ${
            menuActive.name === "all" ? "existing" : menuActive.name
        } note, lets make one!`;
    })();

    return (
        <div className="container mx-auto px-4 xl:px-64 md:px-48 w-full relative">
            <Header onSearchChange={onSearchChange} />
            {!query && (
                <Menus menuActive={menuActive} setMenuActive={setMenuActive} />
            )}
            {filteredNotes?.length !== 0 ? (
                <Notes
                    query={query}
                    notes={filteredNotes}
                    onClick={onClickNote}
                />
            ) : (
                <Empty text={textEmpty} />
            )}
            <Modal
                title="Add new note"
                component={(data) => (
                    <button
                        onClick={data.openModalHandler}
                        type="button"
                        className="right-4 md:right-72 w-10 h-10 z-20 bg-tertiary hover:bg-white rounded-full fixed bottom-6 text-2xl font-semibold"
                    >
                        +
                    </button>
                )}
            >
                {(data) => (
                    <FormNote
                        onSubmitHandler={(note) => {
                            data.closeModalHandler();
                            newNoteHandler(note);
                        }}
                    />
                )}
            </Modal>
        </div>
    );
}

export default App;
