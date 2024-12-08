import React from "react";
import "./AboutGoals.css";
import { GoGoal } from "react-icons/go";
import { GoalsList } from "../../utils/GoalsList";

const AboutGoals = () => {
  return (
    <div className="AboutGoalsContainer">
      <span className="ourvaluesHead">Our Goals</span>
      <span className="goalParaIntroMain">
        At Techni Trust Technical Services, we aim to consistently enhance our
        offerings and strengthen our position as a trusted name in the industry.
      </span>
      <br />
      <div className="goalsCardList">
        <div className="goalCard">
            <GoGoal className="goalMainIcon"/><br />
          <span className="ParaOnGoal">Our key goals include:</span>
        </div>
        {GoalsList.map((goals) => (
          <div className="goalCard">
            <span className="goalIcon">{goals.icon}</span>
            <span className="goalHead">{goals.goals}</span>
            <span className="goalPara">{goals.desc}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutGoals;
