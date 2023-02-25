import React from 'react'
import Footer from '../footer/Footer'
import Navber from '../navber/Navber'
import OurDoctor from '../ourdoctor/OurDoctor'
import SearchAmbulance from '../searchAmbulance/SearchAmbulance'
import PopularAmbulance from '../popularAmbulance/PopularAmbulance'

const Ambulance = () => {
  return (
    <>
        {/* <NavTop/> */}
        <Navber/>
        <SearchAmbulance/>
        <PopularAmbulance/>
        <Footer/>
    </>
  )
}

export default Ambulance