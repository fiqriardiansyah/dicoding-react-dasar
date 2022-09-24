import React, { forwardRef, useRef } from "react";
import EllipsisImg from "../../assets/svgs/ellipsis.svg";

import useOnClickOutside from "../../hooks/useOnClickOutside";

function Action({
    openMenuHandler,
    showMenu,
    setShowMenu,
    onClick,
    note: { id, archived },
}) {
    const menuRef = useRef();

    useOnClickOutside(menuRef, () => {
        setShowMenu(false);
    });

    return (
        <>
            <button
                onClick={openMenuHandler}
                type="button"
                className="w-8 h-8 flex items-center justify-center bg-secondary hover:bg-tertiary rounded-full absolute bottom-4 right-4"
            >
                <img src={EllipsisImg} alt="menu" className="w-1" />
            </button>

            {showMenu && (
                <div
                    ref={menuRef}
                    className="absolute bg-white rounded flex flex-col bottom-4 right-4 z-10"
                >
                    <button
                        onClick={() => onClick({ type: "delete", id })}
                        type="button"
                        className="px-5 py-2 bg-slate-200 rounded hover:text-red-400"
                    >
                        delete
                    </button>
                    <button
                        onClick={() => onClick({ type: "state", id })}
                        type="button"
                        className="px-5 py-2 bg-slate-200 rounded "
                    >
                        {archived ? "activate" : "archive"}
                    </button>
                </div>
            )}
        </>
    );
}

export default Action;
