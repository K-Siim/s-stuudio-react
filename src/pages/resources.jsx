import React from 'react'
import Navbar from '../components/Navbar'
import ResourceHero from '../components/resources/ResourceHero'
import Guides from '../components/resources/Guides'
import Blog from '../components/resources/Blog'
import Newsletter from '../components/Newsletter'

const Resources = () => {
  return (
    <div className="bg-[#000300] min-h-screen">
      <Navbar />
      <div className="pt-16">
        <ResourceHero />
        <Guides />
        <Blog />
        <Newsletter />
      </div>
    </div>
  )
}

export default Resources