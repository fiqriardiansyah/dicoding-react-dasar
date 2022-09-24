import React from "react";

import utils from "../../utils";
import Menu from "./menu";

function Menus({ menuActive, setMenuActive }) {
    const onClick = (id) => {
        setMenuActive(utils.menus.find((el) => el.id === id));
    };

    return (
        <div className="w-full flex items-center flex-wrap my-3">
            {utils.menus.map((el) => (
                <Menu
                    onClick={() => onClick(el.id)}
                    key={el.id}
                    isActive={el.id === menuActive.id}
                >
                    {el.name}
                </Menu>
            ))}
        </div>
    );
}

export default Menus;
