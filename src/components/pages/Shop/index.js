import React from 'react'
import Slider from '../../slider/Slider'
import Ecommerce_category from '../../ecommerce-category/Ecommerce_category'
import Footer from '../../footer/Footer'
import PopularPro from '../../popularPro/PopularPro'
import Navber from '../../navber/Navber'
import SearchBox from '../../searchBox/SearchBox'

const Shop = () => {
  return (
    <>
        {/* <NavTop/> */}
        <Navber/>
        <Slider/>
        <SearchBox/>
        <Ecommerce_category/>
        <PopularPro/>
        <Footer/>
    </>
  )
}

export default Shop