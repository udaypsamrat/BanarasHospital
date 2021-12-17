import React, { useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo">
          <h3>
            {" "}
            <i class="far fa-hospital"></i>Banaras Hospital
          </h3>
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" exact className="nav-links" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/service" className="nav-links" onClick={closeMobileMenu}>
              Service
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/doctors" className="nav-links" onClick={closeMobileMenu}>
              Doctors
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/contact-us"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              ContactUs
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
