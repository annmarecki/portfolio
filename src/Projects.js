import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";

const ProjectTitle = () => <h1 className="projectTitle">Projects</h1>;

const Project = () => {
  const [flip, setFlip] = useState(false);
  const [flip1, setFlip1] = useState(false);
  const [flip2, setFlip2] = useState(false);

  return (
    <>
      <div className="content">
        <div className={`card-left ${flip ? "flip" : ""}`}>
          <div className="front" onClick={() => setFlip(!flip)}>
            <img
              className="project-img"
              src={require("./thyme_logo.png")}
            ></img>
          </div>
          <div className="back" onClick={() => setFlip(!flip)}>
            <h1 className="text-project">The Thymely Cook</h1>
            <p>
              Do you struggle with what to choose for dinner every night? Or
              maybe, you’re the type of person that forgets what they even have
              in their fridge? These are two big issues our team strived to
              streamline with our app, The Thymely Cook. The Thymely Cook is an
              Android and iOS mobile app that allows users to scan their
              groceries into a virtual fridge and then to search for recipes
              based on those ingredients. With The Thymely Cook, you’ll never
              struggle with indecisiveness or food waste again.
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className={`card-right ${flip1 ? "flip1" : ""}`}>
          <div className="front" onClick={() => setFlip1(!flip1)}>
            <img
              className="project-img"
              src={require("./thyme_logo.png")}
            ></img>
          </div>
          <div className="back" onClick={() => setFlip1(!flip1)}>
            <h1 className="text-project">The Thymely Cook</h1>
            <p>
              Do you struggle with what to choose for dinner every night? Or
              maybe, you’re the type of person that forgets what they even have
              in their fridge? These are two big issues our team strived to
              streamline with our app, The Thymely Cook. The Thymely Cook is an
              Android and iOS mobile app that allows users to scan their
              groceries into a virtual fridge and then to search for recipes
              based on those ingredients. With The Thymely Cook, you’ll never
              struggle with indecisiveness or food waste again.
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className={`card-left ${flip2 ? "flip2" : ""}`}>
          <div className="front" onClick={() => setFlip2(!flip2)}>
            <img
              className="project-img"
              src={require("./thyme_logo.png")}
            ></img>
          </div>
          <div className="back" onClick={() => setFlip2(!flip2)}>
            <h1 className="text-project">The Thymely Cook</h1>
            <p>
              Do you struggle with what to choose for dinner every night? Or
              maybe, you’re the type of person that forgets what they even have
              in their fridge? These are two big issues our team strived to
              streamline with our app, The Thymely Cook. The Thymely Cook is an
              Android and iOS mobile app that allows users to scan their
              groceries into a virtual fridge and then to search for recipes
              based on those ingredients. With The Thymely Cook, you’ll never
              struggle with indecisiveness or food waste again.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default function Projects() {
  return (
    <div>
      <div className="content">{ProjectTitle()}</div>
      <div className="content">{Project()}</div>;
    </div>
  );
}
