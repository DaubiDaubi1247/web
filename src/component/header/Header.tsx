import React from 'react';
import {NavLink} from "react-router-dom";
import {HeaderNavPath} from "../../common/navPath/header/HeaderNavPath";
import logo from "../../img/logo/logo1.png"

const Header = () => {
    return (
        <header className=" h-[100px] bg-black pl-[10px] pr-[10px]">
            <nav className="flex justify-between items-center">
                <NavLink to={HeaderNavPath.HOME}>
                    <img src={logo} className="w-[100px] h-[100px]" alt="withcer_logo"/>
                </NavLink>
            </nav>
        </header>
    );
};

export default Header;