import React from "react";
import { Link } from "react-router-dom";

import "./Home.css";

export const Home = () => {
  return (
    <div className="home-parent">
      <div className="home-block">
        <h1>pedro pizza</h1>
        <h2>pizza to fit any taste</h2>
        <div className="btn-block">
          <Link to="/menu">
            <button className="btn">order</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
