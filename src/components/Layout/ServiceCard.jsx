import React from "react";
import "./ServiceCard.css";

const ServiceCard = ({serviceName,image}) => {
  return (
    <div className="ServiceCard-wrapper">
      <img src={image} alt="service" />
      <div className="namewrapper">
        <span className="servicename">{serviceName}</span>
      </div>
    </div>
  );
};

export default ServiceCard;
