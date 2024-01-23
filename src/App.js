import { Component } from 'react'
import {  BrowserRouter as Router,  Routes,  Route} from "react-router-dom";


import Navbar from './components/Navbar/Navbar.js'
import Home from './pages/Home/index.js'
import Projects from './pages/Project.js'
import Contact from './pages/Contact.js'

//Note routes is outdated

function App() {
  return (
    <Router>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home /> }/>
          <Route path='/Projects' element={<Projects />}/>
          <Route exact path='/Contact' element={<Contact />}/>
        </Routes>
    </Router>
  );
}

export default App;
