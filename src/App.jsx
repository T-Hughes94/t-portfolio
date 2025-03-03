import { useState } from 'react'
import './App.css'
import Navbar from './Navbar'
import AboutMe from './AboutMe'
import Experience from './Experience'
import TechnicalSkills from './TechnicalSkills'
import Education from './Education'
import Projects from './Projects'
import Hero from './Hero'
import Footer from './Footer'


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
