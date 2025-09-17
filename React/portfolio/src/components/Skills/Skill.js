import React from "react";
import "./skill.css";
import UIDesign from "../../assets/ui-design.png";
import WebDesign from "../../assets/website-design.png";
import AppDesign from "../../assets/app-design.png";

const Skill = () => {
  return (
    <section id="skills">
      <span className="skillTitle">What I do ?. </span> <br />
      <span className="skillDesc">
        I am a skilled and passionate UI developer with experience in creating
        visually appealing and user friendly websites , I have strong
        understanding of designing and developement and a keen eye for detail.I
        am proficient in React,Javascript, HTML, and CSS as well as having
        exposure to Azure Cloud.
      </span>
      <div className="skillBars">
        <div className="skillBars">
          <div className="skillBar">
            <img src={UIDesign} alt="" className="skillBarImg" />
            <div className="skillBarText">
              <h2>UI /UX Design</h2>
              <p>Demo text content</p>
            </div>
          </div>

          <div className="skillBar">
            <img src={WebDesign} alt="" className="skillBarImg" />
            <div className="skillBarText">
              <h2>Web Design</h2>
              <p>Demo Content</p>
            </div>
          </div>

          <div className="skillBar">
            <img src={AppDesign} alt="" className="skillBarImg" />
            <div className="skillBarText">
              <h2>App Design</h2>
              <p>Demo Content</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
