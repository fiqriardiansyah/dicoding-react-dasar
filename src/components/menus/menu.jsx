import React from "react";

function Menu({ children, isActive, onClick }) {
    return (
        <button
            onClick={onClick}
            type="button"
            className={`px-4 py-1 rounded-full mr-2 text-white capitalize bg-secondary hover:bg-primary hover:outline-1 hover:outline-white hover:outline ${
                isActive ? "outline-1 outline-white outline" : ""
            }`}
        >
            {children}
        </button>
    );
}

export default Menu;
