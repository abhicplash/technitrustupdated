import React from "react";
import "./HomeBanner.css";
import { Link } from "react-router-dom";
import ttlogo from "../../Assets/logo/logo.png";

const HomeBanner = () => {
  return (
    <div className="HomeBanner-container">
      <div className="bannerWrapper">
        <div className="textwrapper">
          <img src={ttlogo} alt="" className="logoImgbanner" />
          <span className="textmain">Trusted care for everyone</span>
          <div className="btnwrapper">
            <Link to={"/about"}>
              <button class="button">Know more </button>
            </Link>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
