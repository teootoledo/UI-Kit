import React, { useState } from "react";
import { NavLink as Link } from "react-router-dom";

import NavIcon from "../assets/icons/NavIcon.svg";

import Bars from "../assets/icons/Bars.svg";
import Close from "../assets/icons/CloseIcon.svg";

interface Props {}

const Navbar = (props: Props) => {
  const [state, setState] = useState(true);

  return (
    <nav className="navbarContainer">
      <Link to="/">
        <img src={NavIcon} alt="NavIcon" className="navIcon" />
      </Link>
      <div
        className="iconWrap"
        onClick={(event: React.MouseEvent<HTMLElement>) => {
          setState(!state);
        }}
      >
        <img
          src={state ? Bars : Close}
          alt="Menu"
          className={state ? "menuIcon" : "closeIcon"}
        />
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
/* 
export const MobileIcon = () => {
  const [state, setState] = useState(true);

  if (state) {
    return (
      <img
        src={Bars}
        alt="Menu"
        className="menuIcon"
        onClick={(event: React.MouseEvent<HTMLElement>) => {
          setState(!state);
        }}
      />
    );
  } else {
    return (
      <img
        src={Close}
        alt="Close"
        className="menuIcon"
        onClick={(event: React.MouseEvent<HTMLElement>) => {
          setState(!state);
        }}
      />
    );
  }
};
 */
