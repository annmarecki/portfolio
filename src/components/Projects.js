import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { projectData } from "../projectData";
import Accordian from "./Accordian";
import { AiOutlineYoutube } from "react-icons/ai";

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
          projects.map(
            ({ title, content, github, youtube, status, color, img }) => (
              <Accordian
                title={title}
                content={content}
                github={github}
                youtube={youtube}
                status={status}
                color={color}
                img={img}
              />
            )
          )
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
}
