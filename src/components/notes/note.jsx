import React, { useState } from "react";
import utils from "../../utils";
import Action from "./action";

function Note({
    data: { id, title, body, createdAt, archived },
    onClick,
    query,
}) {
    const [showMenu, setShowMenu] = useState(false);

    const openMenuHandler = () => {
        setShowMenu(true);
    };

    return (
        <div className="w-full flex flex-col rounded-xl bg-base p-3 relative">
            <p
                className="text-white text-lg font-medium"
                dangerouslySetInnerHTML={{
                    __html: utils.highlight({
                        text: query,
                        sentence: title,
                    }),
                }}
            />
            <span className="text-slate-500 text-xs">
                {utils.showFormattedDate(createdAt)}
            </span>
            <p
                className="text-slate-500 font-light my-3"
                dangerouslySetInnerHTML={{
                    __html: utils.highlight({
                        text: query,
                        sentence: body,
                    }),
                }}
            />
            <p
                className={`${
                    archived
                        ? "text-slate-400 outline-slate-400"
                        : "text-yellow-200 outline-yellow-200"
                } text-xs  w-fit outline outline-2 capitalize px-4 py-1 rounded-full mt-5`}
            >
                {archived ? "archived" : "active"}
            </p>
            <Action
                openMenuHandler={openMenuHandler}
                showMenu={showMenu}
                setShowMenu={setShowMenu}
                onClick={onClick}
                note={{ id, archived }}
            />
        </div>
    );
}

export default Note;
