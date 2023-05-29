import restaurantChefs from "../assets/images/mario_and_adrian.jpg";
import restaurant from "../assets/images/restaurant.jpg";
import '../styles/About.css';
import React from "react";

const About = () => {
  return (
    <div className="about">
      <div className="box1">
        <h4>Lemon Restaurant</h4>
        <h5>Seattle, WA</h5>
        <p>
          Lorem ipsum dolor sit amet. Est dolor odit hic voluptatem quod sed modi
          facilis ea quasi tempora. Eos voluptas error qui laborum laboriosam et.
        </p>
        <p>
          Qui minima temporibus est galisum obcaecati ea consequatur soluta. Est dolorem
          galisum sit quibusdam cumque est exercitationem voluptatem quo ratione
          consequatur et aperiam assumenda qui dolor voluptas et asperiores alias.
          33 consequatur libero id omnis maiores qui corporis facere.
        </p>
      </div>

      <div className="box2">
        <img id="chefs" src={restaurantChefs} alt="two owners" />
        <img id="restaurant" src={restaurant} alt="restaurant place" />
      </div>

    </div>
  );
};

export default About;
