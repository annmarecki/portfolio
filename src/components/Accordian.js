import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { AiFillGithub, AiOutlineYoutube } from "react-icons/ai";

const Accordion = ({ title, content, github, youtube, status, color, img }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div
      className={`card ${isActive ? "active" : ""}`}
      style={{ backgroundColor: color }}
    >
      <h1>{title}</h1>
      <div className="image">
        <img className="project-img" src={img}></img>
      </div>
      {isActive && (
        <div className="projecttext">
          <p>{content}</p>

          <a className="Link" href={github}>
            Github Repository
          </a>
          {youtube ? (
            <a className="Link" href={youtube}>
              Youtube Video
            </a>
          ) : (
            ""
          )}
        </div>
      )}
      <div className="accordianSymbol">
        <p onClick={() => setIsActive(!isActive)}>
          {isActive ? "Minimize" : "Learn More"}
        </p>
      </div>
    </div>
  );
};

export default Accordion;
