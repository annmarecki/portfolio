import Projects from "./Projects";
import {
  BrowserRouter as Router,
  Routes,
  Link,
  Route,
  Switch,
} from "react-router-dom";
import AboutMe from "./AboutMe";
import Home from "./Home";
import { useState } from "react";
import { MdClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";

export default function NavBar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };
  const closeMenu = () => {
    setNavbarOpen(false);
  };
  return (
    <>
      <nav className="navBar">
        <button onClick={handleToggle}>
          {navbarOpen ? (
            <MdClose
              style={{ color: "white", width: "40px", height: "40px" }}
            />
          ) : (
            <FiMenu style={{ color: "white", width: "40px", height: "40px" }} />
          )}
        </button>
        <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
          <Link to="/" onClick={() => closeMenu()}>
            Home
          </Link>
          <Link to="/projects" onClick={() => closeMenu()}>
            Projects
          </Link>
          <Link to="/aboutme" onClick={() => closeMenu()}>
            About Me
          </Link>
          {/* <Link to="/contact" onClick={() => closeMenu()}>
            Contact Me
          </Link> */}
        </ul>
      </nav>
    </>
  );
}
