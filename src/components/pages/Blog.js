import React from 'react'
import Footer from '../footer/Footer'
import NavTop from '../navTop/NavTop'
import Navber from '../navber/Navber'
import NewArticle from '../newArticle/NewArticle'
import OldArtical from '../oldArtical/OldArtical'

const Blog = () => {
  return (
    <>
        {/* <NavTop/> */}
        <Navber/>
        <NewArticle/>
        <OldArtical/>
        <Footer/>
    </>
  )
}

export default Blog