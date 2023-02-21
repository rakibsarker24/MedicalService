import React from 'react'
import Footer from '../footer/Footer'
import Navber from '../navber/Navber'
import OurDoctor from '../ourdoctor/OurDoctor'
import SearchAmbulance from '../searchAmbulance/SearchAmbulance'

const Ambulance = () => {
  return (
    <>
        {/* <NavTop/> */}
        <Navber/>
        <SearchAmbulance/>
        <OurDoctor/>
        <Footer/>
    </>
  )
}

export default Ambulance