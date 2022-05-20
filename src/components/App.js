import React, { useState, useEffect } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import Projects from "./Projects";
import PageRoutes from "../routes";
import Home from "./Home";
import Footer from "./Footer";

export default function App() {
  // IoShapesOutline;
  // GiMoebiusTriangle;
  return (
    <>
      <PageRoutes />
      <Footer />
    </>
  );
}
