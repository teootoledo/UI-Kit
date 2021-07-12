import React from "react";
import { NavLink as Link } from "react-router-dom";

import NavIcon from "../assets/icons/NavIcon.svg";

import Bars from "../assets/icons/Bars.svg";

interface Props {}

const Navbar = (props: Props) => {
  return (
    <nav className="navbarContainer">
      <Link to="/">
        <img src={NavIcon} alt="NavIcon" />
      </Link>
      <img src={Bars} alt="Menu" className="menuIcon" />
      <div className="navmenu">
        <Link className="navlink" to="/home">
          Home
        </Link>
        <Link className="navlink" to="/about">
          Acerca de
        </Link>
        <Link className="navlink" to="/services">
          Servicios
        </Link>
        <Link className="navlink" to="/contact-us">
          Contacto
        </Link>
        <Link className="navlink" to="/sign-up">
          Sign Up
        </Link>
      </div>
      <nav>
        <Link to="/signin">Sign In</Link>
      </nav>
    </nav>
  );
};

export default Navbar;
