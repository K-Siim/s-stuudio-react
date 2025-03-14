import React from 'react'
import Navbar from '../components/Navbar'
import Values from '../components/about/Values'
import Team from '../components/about/Team'
import Stats from '../components/about/Stats'

const About = () => {
  return (
    <div className="bg-[#000300]">
      <Navbar />
      <Values />
      <Team />
      <Stats />
    </div>
  )
}

export default About