import React, { useState, useEffect } from "react";
import "./App.css";
import { Link } from "react-router-dom";
import Projects from "./Projects";

export default function App() {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const HomeContent = () => (
    <>
      <div className="content-heading">
        <img className="headshot" src={require("./ania.png")}></img>
        <div className="cta">
          <p>Hi! I'm</p>
          <h1 className="text">Ann Marecki</h1>
          <p>Full stack developer based in New York City</p>
        </div>
      </div>
    </>
  );

  // IoShapesOutline;
  // GiMoebiusTriangle;
  return (
    <section className="Parallax">
      <div
        className="Parallax__background"
        style={{ transform: `translateY(-${offsetY * 0.5}px)` }}
      />
      <div className="content">
        {HomeContent()}
        <Projects />
      </div>
    </section>
  );
}
