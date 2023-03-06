import React from 'react';
import Nav from './Nav';
import "../styles/App.css";

function Header() {
    return (
        <React.Fragment>
            <h1> This is a the Header web page section</h1>
            <img src="./assests/lemon_icon.png" alt="Little Lemon logo" />
            <Nav></Nav>
        </React.Fragment>
    );
}
export default Header;