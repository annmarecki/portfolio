import Projects from "./components/Projects";
import {
  BrowserRouter as Router,
  Routes,
  Link,
  Route,
  Switch,
} from "react-router-dom";
import AboutMe from "./components/AboutMe";
import Home from "./components/Home";
import NavBar from "./components/NavBar";

const PageRoutes = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/aboutme" element={<AboutMe />} exact />
        <Route path="/projects" element={<Projects />} exact />
      </Routes>
    </Router>
  );
};

export default PageRoutes;
