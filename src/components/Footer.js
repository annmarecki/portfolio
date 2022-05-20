import React, { useState, useEffect } from "react";
import Popup from "reactjs-popup";
import Contact from "./Contact";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineCopyrightCircle,
} from "react-icons/ai";

export default function Footer() {
  // IoShapesOutline;
  // GiMoebiusTriangle;
  return (
    <div>
      <div className="footer">
        <div className="footer-part">
          <p>
            Designed by Ann Marecki <AiOutlineCopyrightCircle /> 2022
          </p>
        </div>
        <div className="footer-part">
          <Popup
            trigger={<button className="button"> Contact Me </button>}
            modal
            nested
          >
            {(close) => (
              <div className="modal">
                <button className="close" onClick={close}>
                  &times;
                </button>
                <div className="header"> Send Me An Email </div>
                <div className="message">
                  <Contact />
                </div>
              </div>
            )}
          </Popup>
        </div>
        <a href="https://www.linkedin.com/in/annmarecki/">
          {" "}
          <AiFillLinkedin style={{ margin: ".4rem" }} />
        </a>
        <a href="https://www.github.com/annmarecki/">
          {" "}
          <AiFillGithub />{" "}
        </a>
        <div className="footer-part-email">Email: akmarecki@gmail.com</div>
      </div>
    </div>
  );
}
