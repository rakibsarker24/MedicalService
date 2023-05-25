import React from 'react'
import Navber from '../navber/Navber'
import NavTop from '../navTop/NavTop'
import HomeTop from '../homeTop/HomeTop'
import Category from '../category/Category'
import WhoWe from '../who-we-are/WhoWe'
import Telehelth from '../telehelth/Telehelth'
import Subscribe from '../subscribe/Subscribe'
import NewArticle from '../newArticle/NewArticle'
import HelpForm from '../helpForm/HelpForm'
import Footer from '../footer/Footer'

const Home = () => {
  return (
    <>
        <Navber/>
        <HomeTop/>
        <Category/>
        <WhoWe/>
        <Telehelth/>
        <Subscribe/>
        <NewArticle/>
        <HelpForm/>
        <Footer/>
    </>
  )
}

export default Home