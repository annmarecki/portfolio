import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./App.css";

const ProjectTitle = () => <h1 className="projectTitle">Projects</h1>;

const Project = () => (
  <>
    <div className="project-card-left">
      <img className="project-img" src={require("./thyme_logo.png")}></img>
      <div className="info">
        <h1 className="text-project">The Thymely Cook</h1>
        <p>
          Do you struggle with what to choose for dinner every night? Or maybe,
          you’re the type of person that forgets what they even have in their
          fridge? These are two big issues our team strived to streamline with
          our app, The Thymely Cook. The Thymely Cook is an Android and iOS
          mobile app that allows users to scan their groceries into a virtual
          fridge and then to search for recipes based on those ingredients. With
          The Thymely Cook, you’ll never struggle with indecisiveness or food
          waste again.
        </p>
      </div>
    </div>
    <div className="project-card-right">
      <img className="project-img" src={require("./thyme_logo.png")}></img>
      <div className="info">
        <h1 className="text-project">The Thymely Cook</h1>
        <p>
          Do you struggle with what to choose for dinner every night? Or maybe,
          you’re the type of person that forgets what they even have in their
          fridge? These are two big issues our team strived to streamline with
          our app, The Thymely Cook. The Thymely Cook is an Android and iOS
          mobile app that allows users to scan their groceries into a virtual
          fridge and then to search for recipes based on those ingredients. With
          The Thymely Cook, you’ll never struggle with indecisiveness or food
          waste again.
        </p>
      </div>
    </div>
    <div className="project-card-left">
      <img className="project-img" src={require("./thyme_logo.png")}></img>
      <div className="info">
        <h1 className="text-project">The Thymely Cook</h1>
        <p>
          Do you struggle with what to choose for dinner every night? Or maybe,
          you’re the type of person that forgets what they even have in their
          fridge? These are two big issues our team strived to streamline with
          our app, The Thymely Cook. The Thymely Cook is an Android and iOS
          mobile app that allows users to scan their groceries into a virtual
          fridge and then to search for recipes based on those ingredients. With
          The Thymely Cook, you’ll never struggle with indecisiveness or food
          waste again.
        </p>
      </div>
    </div>
  </>
);

export default function Projects() {
  return (
    <div>
      <div className="content">{ProjectTitle()}</div>
      <div className="content">{Project()}</div>;
    </div>
  );
}
