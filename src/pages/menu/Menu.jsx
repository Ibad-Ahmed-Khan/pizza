import React from "react";
import imgOne from "../../assets/pepperoni.jpg";
import imgTwo from "../../assets/margherita.jpg";
import imgThree from "../../assets/pedrotechspecial.jpg";
import imgFour from "../../assets/vegan.jpg";
import imgFive from "../../assets/pineapple.jpg";
import imgSix from "../../assets/expensive.jpg";
import "./Menu.css";

export const Menu = () => {
  return (
    <div className="menu-parent">
      <div className="menu-top">
        <h1>our menu</h1>
      </div>
      <div className="menu-bottom">
        <div className="menu-card">
          <img src={imgOne} alt="" />
          <h3>pepperoni pizza</h3>
          <p>$15.99</p>
        </div>
        <div className="menu-card">
          <img src={imgTwo} alt="" />
          <h3>margerita pizza</h3>
          <p>$11.99</p>
        </div>
        <div className="menu-card">
          <img src={imgThree} alt="" />
          <h3>prdroTech pizza</h3>
          <p>$215.99</p>
        </div>
        <div className="menu-card">
          <img src={imgFour} alt="" />
          <h3>vegan pizza</h3>
          <p>$17.99</p>
        </div>
        <div className="menu-card">
          <img src={imgFive} alt="" />
          <h3>pineapple pizza</h3>
          <p>$4.99</p>
        </div>
        <div className="menu-card">
          <img src={imgSix} alt="" />
          <h3>tandori pizza</h3>
          <p>$165.99</p>
        </div>
      </div>
    </div>
  );
};
