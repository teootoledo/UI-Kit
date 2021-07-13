import React from "react";
import { NavLink as Link } from "react-router-dom";

import NavIcon from "../assets/icons/NavIcon.svg";

import Bars from "../assets/icons/Bars.svg";

interface Props {}

const Navbar = (props: Props) => {
  return (
    <nav className="navbarContainer">
      <Link to="/">
        <img src={NavIcon} alt="NavIcon" className="navIcon" />
      </Link>
      <div className="iconWrap">
        <img src={Bars} alt="Menu" className="menuIcon" />
      </div>
      <div className="navmenu">
        <Link className="navlink" to="/">
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
          Registrarse
        </Link>
      </div>
      <nav>
        <Link to="/signin" className="navbtnlink">
          Iniciar sesión
        </Link>
      </nav>
    </nav>
  );
};

export default Navbar;
