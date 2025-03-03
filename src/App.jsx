import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import AboutMe from './components/About'
import Experience from './components/Experience'
import TechnicalSkills from './components/TechnicalSkills'
import Education from './components/Education'
import Projects from './components/Projects'
import Hero from './components/Hero'
import Footer from './components/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <AboutMe />
        <TechnicalSkills />
        <Projects />
        <Experience />
        <Education />
        <Footer />
      </div>
    </>
  )
}

export default App
