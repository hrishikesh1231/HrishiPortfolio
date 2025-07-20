import React from 'react'
import Hero from './Hero'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'
import './Hero.css'
const Home = () => {
  return (
    <div>
      <Hero/>
      <About/>
      <Projects/>
      {/* <Contact/> */}
    </div>
  )
}

export default Home
