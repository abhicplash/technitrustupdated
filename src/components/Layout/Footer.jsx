import React from "react";
import "./Footer.css";
import { TbPhoneCall } from "react-icons/tb";
import { BiSolidEnvelope } from "react-icons/bi";
import { IoLocation } from "react-icons/io5";
import { Link } from "react-router-dom";
import logo from "../../Assets/logo/footerlogo.png";
import Copyright from "./Copyright";

const Footer = () => {
  return (
    <div>
      <div className="footer-container">
        <div className="logowrapper">
          <img src={logo} alt="" />
          {/* <h1>LOGO</h1> */}
        </div>
        <hr className="footerhr" />
        <div className="footerDetailswrapper">
          <div className="footerContact">
            <h3>Reach Us</h3>
            <div className="footerdetails">
              <TbPhoneCall />
              <span>+971-87654321</span>
            </div>
            <div className="footerdetails">
              <BiSolidEnvelope />
              <span>info@demo.com</span>
            </div>
            <div className="footerdetails">
              <IoLocation />
              <span>Dubai,UAE</span>
            </div>
          </div>
          <div className="list">
            <h3>Links</h3>
            <Link to={"/"}>Home</Link>
            <Link to={"/about"}>About</Link>
            <Link to={"/services"}>Services</Link>
            <Link to={"/contact"}>Contact us</Link>
          </div>

          <div className="list">
            <h3>Legal</h3>
            <span>Privacy Policy</span>
            <span>Terms & services</span>
            <span>Terms of use</span>
          </div>
          <div className="list">
            <h3>Working Hours</h3>
            <span>
              Lorem ipsum dolor sit amet,
              <br /> consectetur adipiscing elit.
            </span>
            <a
              href="tel:+971542791548"
              target="_blank"
              title="Call"
              rel="noreferrer"
            >
              <button class="button"> Call Us</button>
            </a>
            {/* <button className="footerBtn">
            <ImPhone />
            Call Us
          </button> */}
          </div>
        </div>
      </div>
      <Copyright />
    </div>
  );
};

export default Footer;
