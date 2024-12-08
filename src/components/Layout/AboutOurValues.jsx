import React from "react";
import "./AboutOurValues.css";
import vision from "../../Assets/about/vision.png";
import mission from "../../Assets/about/mission.png";
import { valuesList } from "../../utils/ValuesList";

const AboutOurValues = () => {
  return (
    <div className="AboutOurValuesContainer">
      <div className="visionCard">
        <img src={vision} alt="" className="visionImg" />
        <div className="visionDetails">
          <span className="visionHead">Our Mission</span>
          <span className="visionPara">
            To deliver trusted services that enhance the functionality, safety,
            and visual appeal of every space we serve.
          </span>
        </div>
      </div>
      <div className="visionCard">
        <div className="visionDetails">
          <span className="visionHead">Our Vision</span>
          <span className="visionPara">
            To become the preferred choice for technical and maintenance
            services in the UAE by consistently exceeding client expectations.
          </span>
        </div>
        <img src={mission} alt="" className="visionImg" />
      </div>
      <div className="ourValuesWrapper">
        <span className="ourvaluesHead">Our Values</span>
        <div className="VcardContainer">
          {valuesList.map((values, index) => (
            <div className="vCard" key={index}>
              <span className="valueCardIcon">{values.Icon}</span>
              <span className="valueCardName">{values.values}</span>
              <span className="valueCardDesc">{values.desc}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutOurValues;
