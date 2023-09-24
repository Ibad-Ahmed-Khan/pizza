import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Logo from "../../assets/pizzaLogo.png";
import MenuIcon from "@mui/icons-material/Menu";

export const Navbar = () => {
  const [hamburgerToggle, setHamburgerToggle] = useState("");

  return (
    <div className="nav-block">
      <button
        className="nav-btn"
        onClick={() => setHamburgerToggle(!hamburgerToggle)}
      >
        <MenuIcon className="menu" fontSize="large" />
      </button>
      <div className="nav-parent">
        <img
          className="logo"
          src={Logo}
          alt=""
          style={{
            transform: hamburgerToggle ? "translateX(-150%)" : "translateX(0%)",
          }}
        />
        <ul
          className="hiddenLinks"
          style={{
            transform: hamburgerToggle
              ? "translate(-50%, -50%) translateX(0%)"
              : "translate(-50%, -50%) translateX(-150%)",
          }}
        >
          <Link to="/">home</Link>
          <Link to="/menu">menu</Link>
          <Link to="/aboutus">aboutUs</Link>
          <Link to="/contact">contact</Link>
        </ul>
        <ul className="navigation">
          <Link to="/">home</Link>
          <Link to="/menu">menu</Link>
          <Link to="/aboutus">aboutUs</Link>
          <Link to="/contact">contact</Link>
        </ul>
      </div>
    </div>
  );
};
