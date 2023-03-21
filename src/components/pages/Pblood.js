import React from 'react'
import Bcart from '../bCart/Bcart'
import NavTop from '../navTop/NavTop'
import Navber from '../navber/Navber'
import Footer from '../footer/Footer'
import Bslider from '../bSlider/Bslider'
import SearchDoner from '../searchDoner/SearchDoner'

const Pblood = () => {
  return (
    <>
        {/* <NavTop/> */}
        <Navber/>
        <Bslider/>
        <SearchDoner/>
        {/* <Bcart/> */}
        <Footer/>
    </>
  )
}

export default Pblood