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

export default function NavBar() {
  return (
    <>
      <nav className="navBar">
        <Link to="/aboutme">About Me</Link>
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
      </nav>
    </>
  );
}
