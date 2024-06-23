import NavBar from "./components/Nav.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" />
          <Route path="/projects" />
          <Route path="/education" />
          <Route path="/experience" />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
