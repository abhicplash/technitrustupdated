import React from "react";
import "./HomeWork.css";
import { workProcess } from "../../utils/WorkProcess";

const HomeWork = () => {
  return (
    <div className="HomeWork-container">
      <span className="homeserviceHead">our work process</span>
      <span className="processIntro">
        At Techni Trust Technical Services, we follow a simple, efficient, and
        transparent <br /> process to ensure the best outcomes for every project:
      </span>
      <div className="homeworkwrapper">
        {/* <img src={image} alt="process" className="processImg" /> */}
        <div className="processCardWrapper">
          <div className="processList">
            {workProcess.map((process) => (
              <div key={process.id} className="processCard">
                <h1>{process.id}</h1>
                <span className="processHead">{process.name}</span>
                <span className="processDesc">{process.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeWork;
