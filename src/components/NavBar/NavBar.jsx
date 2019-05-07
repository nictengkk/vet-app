import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-2 justify-content-between">
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
      <div className="navbar-nav">
        <Link className="nav-item nav-link" to="/admin">
          <i className="fas fa-clinic-medical"> Admin </i>
        </Link>
        <Link className="nav-item nav-link" to="/login">
          <i className="fas fa-sign-in-alt"> Login </i>
        </Link>
        <Link className="nav-item nav-link" to="/signup">
          <i className="fas fa-user-plus"> Signup </i>
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
