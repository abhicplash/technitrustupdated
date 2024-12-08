import React from "react";
import "./HomeBanner.css";
import { Link } from "react-router-dom";

const HomeBanner = () => {
  return (
    <div className="HomeBanner-container">
      <div className="bannerWrapper">
        <div className="textwrapper">
          <span className="textmain">Trusted care for everyone</span>
          <div className="btnwrapper">
            <Link to={"/about"}>
              <button class="button">Explore </button>
            </Link>{" "}
            <Link to={"/contact"}>
              <button class="button">Reach us</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
