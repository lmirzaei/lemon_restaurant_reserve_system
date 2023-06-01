import React from 'react';
import HeaderNav from './HeaderNav';
import "../styles/Header.css";
import Logo from "../assets/lemon_icon.png"

function Header() {
    return (
        <>
        <header className="header">
            <div className="logo">
                <img className="logo-img" src={Logo} alt="Little Lemon logo"/>
            </div>
            <HeaderNav/>
        </header>
        </>
    );
}

export default Header;