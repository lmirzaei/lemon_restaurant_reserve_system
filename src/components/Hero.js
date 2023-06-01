import restaurantFood from "../assets/images/restaurantFood.jpg";
import {NavLink} from "react-router-dom";
import "../styles/Hero.css"

const Hero = () => {
  return (
    <>
      <div className="hero-section">
        <div className="hero-left-content">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <NavLink to="/reservations">
            <button className="btn">Reserve a Table</button>
          </NavLink>
        </div>


        <div className="image-box">
          <img src={restaurantFood} alt="restaurantFood" />
        </div>
      </div>
    </>
  );
};

export default Hero;
