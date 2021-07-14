import React, { useState } from "react";
import { NavLink as Link } from "react-router-dom";

import { navbarElements } from "./navbarElements";

import NavIcon from "../assets/icons/NavIcon.svg";

import Bars from "../assets/icons/Bars.svg";
import Close from "../assets/icons/CloseIcon.svg";

interface Props {}

const Navbar = (props: Props) => {
  const [state, setState] = useState(true);

  return (
    /* NAVBAR DESKTOP */
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
      {/* NAVBAR ITEMS IMPORTED FROM NAVBARELEMENTS.TS */}
      <div className={state ? "navmenu active" : "navmenu"}>
        {navbarElements.map((element, index) => {
          return (
            <Link className={element.className} to={element.to} key={index}>
              {element.label}
            </Link>
          );
        })}
      </div>

      {/* MOBILE MENU */}
      <nav></nav>

      {/* ONLY APPEARS IN DESKTOP */}
      <nav>
        <Link to="/signin" className="navbtnlink">
          Iniciar sesión
        </Link>
      </nav>
    </nav>
  );
};

export default Navbar;
