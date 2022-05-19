import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import PageRoutes from "./routes";
import Projects from "./components/Projects";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <PageRoutes />
    <App />
  </React.StrictMode>
);
