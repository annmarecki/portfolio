import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
import "../App.css";
import { AiFillGithub, AiOutlineYoutube } from "react-icons/ai";

const Accordion = ({ title, content, github, youtube, color, img }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div
      className={`card ${isActive ? "active" : ""}`}
      style={{ backgroundColor: color }}
      onClick={() => setIsActive(!isActive)}
    >
      <h1 id="title">{title}</h1>
      <p>{isActive ? "" : "Click to Learn More"}</p>
      {isActive && (
        <div className="projecttext">
          <p>{content}</p>

          <a className="Link" href={github}>
            Github Repository
          </a>

          <div>
            {"  "}
            {youtube ? (
              <ReactPlayer url={youtube} width="400" height="200" />
            ) : (
              ""
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Accordion;
