import React, { useState, useEffect } from "react";
import "../App.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="content">
        <div className="content-heading">
          <img className="headshot" src={require("../images/ania.png")}></img>
          <div className="cta">
            <p>Hi! I'm</p>
            <h1 className="text">Ann Marecki</h1>
            <p>Full stack developer based in New York City</p>
          </div>
        </div>
      </div>
    </>
  );
}

// IoShapesOutline;
// GiMoebiusTriangle;
