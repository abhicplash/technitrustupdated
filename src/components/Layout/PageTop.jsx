import React from "react";
import "./PageTop.css";

const PageTop = ({ title }) => {
  return (
    <div className="PageTop-container">
      <div className="titlewrapper">
        <span className="title">{title}</span>
      </div>
      {/* <span className="para">{para}</span> */}
    </div>
  );
};

export default PageTop;
