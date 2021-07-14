import React, { useState } from "react";
import { NavLink as Link } from "react-router-dom";

import { navbarElements } from "./navbarElements";

import NavIcon from "../assets/icons/NavIcon.svg";

import Bars from "../assets/icons/Bars.svg";
import Close from "../assets/icons/CloseIcon.svg";

interface Props {}

const Navbar = (props: Props) => {
  const [state, setState] = useState(false);

  return (
    /* NAVBAR DESKTOP */
    <nav className={state ? "navbarContainer mobile" : "navbarContainer"}>
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
          src={state ? Close : Bars}
          alt="Menu"
          className={state ? "closeIcon" : "menuIcon"}
        />
      </div>
      {/* NAVBAR ITEMS IMPORTED FROM NAVBARELEMENTS.TS */}
      <div className={state ? "navmenu active" : "navmenu"}>
        {navbarElements.map((element, index) => {
          return (
            <>
              <Link
                className={element.className}
                to={element.to}
                key={index}
                onClick={(event: React.MouseEvent<HTMLElement>) => {
                  if (state) {
                    setState(!state);
                  }
                }}
              >
                {element.label}
              </Link>
              <hr className="mobileSeparator"></hr>
            </>
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
