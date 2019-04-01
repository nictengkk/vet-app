import React from "react";
import { Link, NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4 justify-content-between">
      <div>
        <Link className="navbar-brand" to="/">
          <i className="fas fa-paw"> Find Your Nearest Vet </i>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
      </div>
      {/* <div className="collapse navbar-collapse" id="navbarNavAltMarkup"> */}
      <div className="navbar-nav">
        <NavLink className="nav-item nav-link" to="/clinics">
          <i class="fas fa-clinic-medical"> Clinics </i>
        </NavLink>
        <NavLink className="nav-item nav-link" to="/login">
          <i class="fas fa-sign-in-alt"> Login </i>
        </NavLink>
        <NavLink className="nav-item nav-link" to="/signup">
          <i class="fas fa-user-plus"> Signup </i>
        </NavLink>
      </div>
      {/* </div> */}
    </nav>
  );
}

export default NavBar;
