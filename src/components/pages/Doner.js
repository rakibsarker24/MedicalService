import React from 'react'
import Footer from '../footer/Footer'
import Navber from '../navber/Navber'
import OurDoctor from '../ourdoctor/OurDoctor'
import SearchDoner from './../searchDoner/SearchDoner';


const Doctors = () => {
  return (
    <>
        <Navber/>
        <SearchDoner/>
        <OurDoctor/>
        <Footer/>
    </>
  )
}

export default Doctors