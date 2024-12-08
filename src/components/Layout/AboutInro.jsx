import React from "react";
import "./AboutInro.css";
import intoimg from "../../Assets/about/about.png";
import { Link } from "react-router-dom";

const AboutInro = () => {
  return (
    <div className="aboutwrapper">
      <div className="AboutInroContainer">
        <div className="aboutdetailswrapper">
          <span className="headAbout">TechniTrust</span>
          <h2>Trusted Care for Every Space!</h2>
          <p className="aboutpara">
            Techni Trust Technical Services is your reliable partner for
            technical and maintenance needs in the UAE. Our experienced team is
            dedicated to providing innovative and high-quality solutions to
            ensure your spaces operate at their best.
          </p>
          {/* <button className="aboutIntobtn"> explore more</button> */}
          <Link  to={"/services"}>
            <button class="button">Explore More</button>
          </Link>
        </div>
        <img src={intoimg} alt="aboutus" />
      </div>
    </div>
  );
};

export default AboutInro;
