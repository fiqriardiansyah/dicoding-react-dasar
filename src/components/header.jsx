import React from "react";
import SearchInput from "./inputs/search-input";

function Header({ onSearchChange }) {
    return (
        <div className="w-full flex flex-col py-4">
            <h1 className="text-white capitalize font-semibold text-4xl mb-4">
                Private Notes
            </h1>
            <div className="flex flex-col sticky top-4">
                <SearchInput onSearchChange={onSearchChange} />
            </div>
        </div>
    );
}

export default Header;
