import React, { useState } from "react";
import CloseImg from "../../assets/svgs/close.svg";

function Modal({ children, component, title = "" }) {
    const [show, setShow] = useState(false);

    const openModalHandler = () => {
        setShow(true);
    };

    const closeModalHandler = () => {
        setShow(false);
    };

    const childData = {
        show,
        openModalHandler,
        closeModalHandler,
    };

    if (!show) return component(childData);

    return (
        <div className="w-screen h-screen z-100 fixed top-0 left-0 bg-black-opacity-7 flex items-center justify-center">
            <div className="bg-white rounded-lg p-5 flex flex-col min-w-[350px] mx-3">
                <div className="flex items-center w-full justify-between">
                    <p className="capitalize text-lg">{title}</p>
                    <button
                        type="button"
                        onClick={closeModalHandler}
                        className="w-8 h-8 rounded-full p-2 hover:bg-tertiary"
                    >
                        <img src={CloseImg} alt="close" />
                    </button>
                </div>
                {children(childData)}
            </div>
        </div>
    );
}

export default Modal;
