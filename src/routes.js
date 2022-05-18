import Projects from "./Projects";
import { BrowserRouter, Route, Link } from "react-router-dom";
import AboutMe from "./AboutMe";
import App from "./App";

const Routes = () => {
  return (
    <BrowserRouter>
      <Route path="/" component={App} />
      <Route path="/aboutme" component={AboutMe} />
      <Route path="/projects" component={Projects} />
    </BrowserRouter>
  );
};

export default Routes;
