import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-scroll";
import logo from "../../logo.png";

function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <nav className="nav-wrapper">
      <div className="nav-content">
        <img src={logo} alt="Logo" className="logo" />

        <button className="menu-btn" onClick={toggleMenu}>
          <span
            className="material-symbols-outlined"
            style={{ fontSize: "29px" }}
          >
            {openMenu ? "x" : "☰"}
          </span>
        </button>

        <ul className={`nav-links ${openMenu ? "open" : ""}`}>
          <li>
            <Link
              activeClass="active"
              to="hero"
              smooth
              spy
              offset={-80}
              className="menu-item"
              onClick={toggleMenu}
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              activeClass="active"
              to="competence"
              smooth
              spy
              offset={-120}
              className="menu-item"
              onClick={toggleMenu}
            >
              Competence
            </Link>
          </li>

          <li>
            <Link
              activeClass="active"
              to="work-exp"
              smooth
              spy
              offset={-130}
              className="menu-item"
              onClick={toggleMenu}
            >
              Experience
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
