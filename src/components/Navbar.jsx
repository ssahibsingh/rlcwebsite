import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg py-3 bg-light shadow-sm">
        <div className="container">
          <NavLink className="navbar-brand" to="/">RLC</NavLink>
          <button className="navbar-toggler collapsed d-flex d-lg-none flex-column justify-content-around" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="toggler-icon top-bar"></span>
            <span class="toggler-icon middle-bar"></span>
            <span class="toggler-icon bottom-bar"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto my-2 text-center">
              <li className="nav-item">
                <NavLink className="nav-link mx-1" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link mx-1" to="/about">About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link mx-1" to="/events">Events</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link mx-1" to="/literature">Literature</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link mx-1" to="/team">Team</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link mx-1" to="/contact">Contact</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;