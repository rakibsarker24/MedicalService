import React from 'react'
import Footer from '../footer/Footer'
import NavTop from '../navTop/NavTop'
import Navber from '../navber/Navber'
import OurDoctor from '../ourdoctor/OurDoctor'
import SearchDoctor from './../searchDoctor/SearchDoctor';

const Doctors = () => {
  return (
    <>
        {/* <NavTop/> */}
        <Navber/>
        <SearchDoctor/>
        <OurDoctor/>
        <Footer/>
    </>
  )
}

export default Doctors