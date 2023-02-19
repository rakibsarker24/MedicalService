import React from 'react'
import Footer from '../footer/Footer'
import NavTop from '../navTop/NavTop'
import Navber from '../navber/Navber'
import NewArticle from '../newArticle/NewArticle'

const Blog = () => {
  return (
    <>
        {/* <NavTop/> */}
        <Navber/>
        <NewArticle/>
        <Footer/>
    </>
  )
}

export default Blog