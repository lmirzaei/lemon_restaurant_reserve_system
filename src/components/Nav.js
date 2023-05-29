import React, {useState} from 'react';
import {NavLink} from "react-router-dom";

function Nav() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    return (
        <nav>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="#">About</NavLink></li>
                <li><NavLink to="#">Menu</NavLink></li>
                <li><NavLink to="/reservations">Reservations</NavLink></li>
                <li><NavLink to="#">Order Online</NavLink></li>
                <li><NavLink to="#">Login</NavLink></li>
            </ul>
        </nav>
    );
}

export default Nav;