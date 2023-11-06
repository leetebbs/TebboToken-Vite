import React, { useState } from "react";
import logo from "../assets/logo.png";
import "../styles/navbar.css";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  function dropdown() {
    const dropdown = document.querySelector(".dropdown");
    if (dropdown.style.display === "none") {
      dropdown.style.display = "block";
    } else {
      dropdown.style.display = "none";
    }
  }

  return (
    <>
      <div>
        <nav>
          <img className="logo" src={logo} alt="TebboToken" />
          <i onClick={dropdown} className="fa-solid fa-bars"></i>
          <div className="menu">
            <p className="price">1 TEBBO = {props.price} USD</p>
            <ul>
              <li>
                <Link className="link" to="/">
                  Home
                </Link>
                {/* <a href="#">Home</a> */}
              </li>
              <li>
                <Link className="link" to="/about">
                  About
                </Link>
              </li>
              <li>
                <Link className="link" to="/contact">
                  Contact
                </Link>
              </li>
              <li>
                <a
                  className="link"
                  href="https://pancakeswap.finance/swap?inputCurrency=0x55d398326f99059fF775485246999027B3197955&outputCurrency=0x84713F25CBFF2fb71CEB4d8657dA6436ea7685a2&chain=bsc"
                  target="_blank"
                  rel="noreferrer"
                >
                  Buy
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <div>
          <ul className="dropdown">
            <li>
              <Link className="link" to="/">
                Home
              </Link>
              {/* <a href="#">Home</a> */}
            </li>
            <li>
              <Link className="link" to="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="link" to="/contact">
                Contact
              </Link>
            </li>
            <li>
              <a
                className="link"
                href="https://pancakeswap.finance/swap?inputCurrency=0x55d398326f99059fF775485246999027B3197955&outputCurrency=0x84713F25CBFF2fb71CEB4d8657dA6436ea7685a2&chain=bsc"
                target="_blank"
                rel="noreferrer"
              >
                Buy
              </a>
            </li>
          </ul>
        </div>
        {/* <Outlet /> */}
      </div>
    </>
  );
};

export default Navbar;
