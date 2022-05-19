import Projects from "./components/Projects";
import {
  BrowserRouter as Router,
  Routes,
  Link,
  Route,
  Switch,
} from "react-router-dom";
import AboutMe from "./components/AboutMe";
import App from "./components/App";

const pageRoutes = () => {
  return (
    <Router>
      <nav>
        <Link to="/aboutme">About Me</Link>
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
      </nav>
      <Routes>
        <Route path="/" component={App} />
        <Route path="/aboutme" component={AboutMe} />
        <Route path="/projects" component={Projects} />
      </Routes>
    </Router>
  );
};

export default pageRoutes;
