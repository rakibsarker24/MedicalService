import React from 'react'
import Footer from '../footer/Footer'
import NavTop from '../navTop/NavTop'
import Navber from '../navber/Navber'
import OurDoctor from '../ourdoctor/OurDoctor'

const Doctors = () => {
  return (
    <>
        {/* <NavTop/> */}
        <Navber/>
        <OurDoctor/>
        <Footer/>
    </>
  )
}

export default Doctors