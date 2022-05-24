import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { AiFillGithub, AiOutlineYoutube } from "react-icons/ai";

const Accordion = ({ title, content, github, youtube, status }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div
      className={`card ${isActive ? "active" : ""}`}
      onClick={() => setIsActive(!isActive)}
    >
      <h1>{title}</h1>
      {/* <div className="image">
         {/* <img className="project-img" src={require(project.img)}></img>
       </div> */}
      {isActive && (
        <div className="projecttext">
          <p>{content}</p>
        </div>
      )}
      <p className="accordianSymbol">{isActive ? "" : "Click to Learn More"}</p>
    </div>
  );
};

export default Accordion;
