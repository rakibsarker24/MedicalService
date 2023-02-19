import React from 'react'
import Slider from '../slider/Slider'
import Ecommerce_category from '../ecommerce-category/Ecommerce_category'
import Footer from '../footer/Footer'
import PopularPro from '../popularPro/PopularPro'
import NavTop from '../navTop/NavTop'
import Navber from '../navber/Navber'

const Shop = () => {
  return (
    <>
        {/* <NavTop/> */}
        <Navber/>
        <Slider/>
        <Ecommerce_category/>
        <PopularPro/>
        <Footer/>
    </>
  )
}

export default Shop