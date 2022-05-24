import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { AiFillGithub, AiOutlineYoutube } from "react-icons/ai";

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div>{title}</div>
        <div>{isActive ? "-" : "Learn More"}</div>
      </div>
      {isActive && <div className="accordion-content">{content}</div>}
    </div>
  );
};
