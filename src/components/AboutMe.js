import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.css";

export default function AboutMe() {
  return (
    <div className="aboutme">
      <div className="aboutmecontent">
        <div className="contentborder">
          <p className="aboutmep">
            Hello World! My name is Ann but you can call me
          </p>
          <h1 className="name">Ania</h1>
          <h3>
            I am a full stack developer based out of New York City and I'm
            bringing the creativity of my artistic pastimes and the customer
            focused precision from my previous career to the tech industry.
          </h3>
          <h2>Front-End</h2>
          <p>Javascript • React • React Native • Redux • HTML5 • CSS</p>
          <h2>Back-End</h2>
          <p>Node.js • Express • PostgreSQL • Firebase • Sequelize</p>
          <h2>Other</h2>
          <p>Curiousity • Ingenuity • Work Ethic • Teamwork • Leadership</p>
        </div>
      </div>
      <div>
        <img
          className="aboutmephoto"
          src={require("../images/rooseveltIsland.jpeg")}
        ></img>{" "}
      </div>
    </div>
  );
}
