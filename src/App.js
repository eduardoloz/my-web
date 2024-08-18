import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/Nav"; // Ensure the import path is correct
import Home from "./pages/Home"; // Ensure the import path is correct
import Projects from "./pages/Projects"; // Ensure the import path is correct
import ProjectDetails from "./pages/ProjectDetails"; // Ensure the import path is correct
import About from "./pages/About"; // Ensure the import path is correct

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/project/:id" element={<ProjectDetails />} />
        <Route path="/education" element={<Home />} />
        <Route path="/experience" element={<Home />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
