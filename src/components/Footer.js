import React from 'react';
import restaurantFood from "../assets/images/restaurant.jpg";
import "../styles/Footer.css"

function Footer() {
    return (
        <>
            <div className="footer">
                <img src={restaurantFood} alt="restaurant patio" />
                <div className="footer-left-content">
                    <ul>
                        <a href="navigator.html"><li><h3>Doormat Navigator</h3></li></a>
                        <a href="about.html"><li><h3>About</h3></li></a>
                        <a href="socialmedialinks.html"><li><h3>Social Media Links</h3></li></a>
                    </ul>
                </div>
            </div>
        </>
    );
}
export default Footer;