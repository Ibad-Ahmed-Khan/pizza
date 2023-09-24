import React from "react";
import aboutLeftImg from "../../assets/makingpizza.jpeg";
import "./About.css";

export const About = () => {
  return (
    <div className="about-parent">
      <div className="about-top"></div>
      <div className="about-bottom">
        <div className="about-bottom-left">
          <img src={aboutLeftImg} alt="" />
        </div>
        <div className="about-bottom-right">
          <h1>about us</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            unde adipisci nostrum consectetur velit minima nemo officia rerum
            iure natus recusandae inventore dolore quia accusantium facere
            sequi, quam ut? Minus magni eum ducimus ipsum culpa illo. Cum, id
            ipsam. Deleniti saepe autem dolore commodi.
          </p>
        </div>
      </div>
    </div>
  );
};
