import React from 'react'
import Navbar from '../components/Navbar'
import Mission from '../components/company/Mission'
import Timeline from '../components/company/Timeline'
import Culture from '../components/company/Culture'

const Company = () => {
  return (
    <div className="bg-[#000300]">
      <Navbar />
      <Mission />
      <Timeline />
      <Culture />
    </div>
  )
}

export default Company