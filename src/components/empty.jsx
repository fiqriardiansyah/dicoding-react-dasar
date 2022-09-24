import React from "react";
import EmptyImg from "../assets/svgs/empty-vector.svg";

function Empty({ text = "note empty, lets make one!" }) {
    return (
        <div className="w-full flex flex-col items-center justify-center opacity-80 h-60vh">
            <img src={EmptyImg} alt="empty" className="w-[300px]" />
            <p className="text-white capitalize text-2xl font-light mt-4">
                {text}
            </p>
        </div>
    );
}

export default Empty;
