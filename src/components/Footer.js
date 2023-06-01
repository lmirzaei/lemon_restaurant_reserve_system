import React from 'react';
import restaurantFood from "../assets/images/restaurant.jpg";
import "../styles/Footer.css"

function Footer() {
    return (
        <>
            <div className="footer">

                    <img src={restaurantFood} alt="restaurant patio" />


                <div className="left-content">
                    <ul>
                        <a href="navigator.html"><li>Doormat Navigator</li></a>
                        <a href="about.html"><li>About</li></a>
                        <a href="socialmedialinks.html"><li>Social Media Links</li></a>
                    </ul>
                </div>
            </div>
        </>
    );
}
export default Footer;