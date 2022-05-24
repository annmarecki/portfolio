import React, { useState, useEffect } from "react";
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
          <p>
            I am a full stack developer based out of New York City and I'm
            bringing the creativity of my artistic pastimes and the customer
            focused precision from my previous career to the tech industry.
          </p>
          <h1>Front-End</h1>
          <p>Javascript • React • React Native • Redux • HTML5 • CSS</p>
          <h1>Back-End</h1>
          <p>Node.js • Express • PostgreSQL • Firebase • Sequelize</p>
          <h1>Other</h1>
          <p>Curiousity • Ingenuity • Work Ethic • Teamwork • Leadership</p>
        </div>
      </div>
      <div className="aboutmephotodiv">
        <img
          className="aboutmephoto"
          src={require("../images/rooseveltIsland.jpeg")}
        ></img>{" "}
      </div>
    </div>
  );
}
