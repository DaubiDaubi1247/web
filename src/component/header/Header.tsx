import React from 'react';
import {NavLink} from "react-router-dom";
import {NavPath} from "../../common/navPath/NavPath";
import logo from "../../img/logo/logo1.png"

const Header = () => {
    return (
        <header className=" h-[100px] pl-[10px] pr-[10px] header">
            <nav className="flex justify-between items-center">
                <NavLink to={NavPath.HOME}>
                    <img src={logo} className="w-[100px] h-[100px]" alt="withcer_logo"/>
                </NavLink>
                <NavLink to={NavPath.CREATE_MONSTER_CLASS}>
                    Создать класс
                </NavLink>
            </nav>
            <hr/>
        </header>
    );
};

export default Header;