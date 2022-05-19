import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.css";

export default function AboutMe() {
  return (
    <div className="homepage">
      <img className="headshot" src={require("../images/ania.png")}></img>
      <img
        className="headshot"
        src={require("../images/rooseveltIsland.jpeg")}
      ></img>
      <h1>Who Am I?</h1>
      <h3>
        Hello World! My name is Ann Marecki but you can call me Ania. I am a
        full stack developer based out of New York City and I'm bringing the
        creativity of my artistic pastimes and the customer focused precision
        from my previous career to the tech industry!
      </h3>
      <h1>What do I stand for?</h1>
      <h1>What skills do I have?</h1>
      <h2>Front-End</h2>
      <h3>Javasdcipt • React • React Native • Redux • HTML5 • CSS</h3>
      <h2>Back-End</h2>
      <h3>Node.js • Express • PostgreSQL • Firebase • Sequelize</h3>
      <h2>Other</h2>
      <h3>Curiousity • Ingenuity • Work Ethic • Teamwork • Leadership</h3>
    </div>
  );
}
