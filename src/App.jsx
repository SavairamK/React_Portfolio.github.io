import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './components/Navbar/NavigationBar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import MySkills from './components/Skills/MySkills'
import Work from './components/Work/Work';
import Project from './components/Projects/Project';
import Contact from './components/Contact/Contact';

const App = () => {
  return (
    <>
      <NavigationBar />
      <Hero/>
      <About/>
      <MySkills/>
      <Work/>
      <Project/>
      <Contact/>
    </>
  )
}

export default App
