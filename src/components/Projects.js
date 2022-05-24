import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { projectData } from "../projectData";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(projectData);
  }, []);

  return (
    <div className="projectsPage">
      <h1 className="projectPageTitle">Projects</h1>
      <div className="projects">
        {projects ? (
          projects.map((project, index) => {
            return (
              <div key={index} className="card">
                <h1>{project.title}</h1>
                <div className="image">
                  {/* <img className="project-img" src={require(project.img)}></img> */}
                </div>
                <div>
                  <h1 className="text-project"></h1>
                  <p>{project.content}</p>
                </div>
              </div>
            );
          })
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
}
