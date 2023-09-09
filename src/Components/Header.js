import React from "react";
import "./artic.css";
import logo from "./Images/flight_black_24dp 3.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const Header = () => {
  return (
    <div className="header-container container-fluid">
      <nav className="navbar navbar-expand-sm ">
        <div className="container-fluid navbar-dark d-flex justify-content-between pt-3 px-5">
          <div className=" nav-brand w-25">
            <img src={logo} alt="" />
            <h3>Artic Travels</h3>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse w-75 d-flex-lg justify-content-around "
            id="collapsibleNavbar"
          >
            <ul className="navbar-nav w-25 ">
              <li className="nav-item">
                <a className="nav-link text-white" href=" ">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href=" ">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href=" ">
                  Contact
                </a>
              </li>
            </ul>
            <button>Sign In</button>
          </div>
        </div>
      </nav>

      <section className="hero">
        <h3> Plan the perfect winter trip </h3>
        <p>
          Easily plan your ideal ski trip from home with the <br /> help of
          professionals
        </p>
      </section>
    </div>
  );
};

export default Header;
