import { Component } from 'react'
import Navbar from './components/Navbar/Navbar.js'
import Home from './pages/Home/index.js'
import Projects from './pages/projects.js'
import Contact from './pages/contact.js'

function App() {
  let Component
  switch(window.location.pathname){
    case "/":
      Component = Home
      break
    case "/contact":
      Component = Contact
      break
    case '/projects':
      Component = Projects
      break
  }
  return (
    <>
      <Navbar />
      <Component />
    </>
  );
}

export default App;
