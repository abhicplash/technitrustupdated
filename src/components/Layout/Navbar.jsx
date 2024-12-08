import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { HiBars3 } from "react-icons/hi2";
import logo from "../../Assets/logo/logo.png";
import footerLogo from "../../Assets/logo/footerlogo.png";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import SideIcons from "./SideIcons";

const Navbar = () => {
  const [view, setView] = useState(false);
  return (
    <div className="navbar-wrapper">
      <div className="navbar-container">
        <Link to={"/"} className="logoLink">
          <img src={logo} alt="logo" className="logoImg" />
          {/* <h1 className="trans">Techni</h1> */}
        </Link>
        {view ? (
          <ul className="list">
            <li>
              <Link to={"/"}>home</Link>
            </li>
            <li>
              <Link to={"/about"}>About us</Link>
            </li>
            <li>
              <Link to={"/services"}>Services</Link>
            </li>
            <li>
              <Link to={"/contact"}>Contact us</Link>
            </li>
            <img src={footerLogo} alt="technitrust" className="navLogo" />
            <div className="navLinks">
              <FaFacebookSquare className="navIcon" />
              <FaInstagram className="navIcon" />
              <RiTwitterXLine className="navIcon" />
              <FaLinkedin className="navIcon" />
            </div>
          </ul>
        ) : null}
        <ul className="listLargerScreen">
          <li>
            <Link to={"/"}>home</Link>
          </li>
          <li>
            <Link to={"/about"}>About us</Link>
          </li>
          <li>
            <Link to={"/services"}>Services</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact us</Link>
          </li>
        </ul>
        <HiBars3
          className="navicon"
          onClick={() => {
            setView(!view);
          }}
        />
      </div>
      <SideIcons />
    </div>
  );
};

export default Navbar;
