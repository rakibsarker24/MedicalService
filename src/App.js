import React from 'react'
import Registration from './components/registration/Registration'
import Loing from './components/login/Login'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Home from './components/pages/Home'
import Appointment from './components/pages/Appointment'
import Doctors from './components/pages/Doctors'
import Shop from './components/pages/Shop'
import AboutUs from './components/pages/AboutUs'
import Blog from './components/pages/Blog'
import Pblood from './components/pages/Pblood'
import PaddtoCard from './components/pages/PaddtoCard'
import Navber from './components/navber/Navber'
import PdoctorDetails from './components/pages/PdoctorDetails'
import Pagination from './components/pagination/Pagination';
import ProductCard from './components/productCard/ProductCard'

const App = () => {
  return (
    <BrowserRouter>
        {/* <Navber/> */}
        <Routes>
           <Route path='/' element={ <Home/>}></Route>
           <Route path='/registration' element={ <Registration/>}></Route>
           <Route path='/login' element={ <Loing/>}></Route>
           <Route path='/appointment' element={ <Appointment/>}></Route>
           <Route path='/doctors' element={ <Doctors/>}></Route>
           <Route path='/shop' element={ <Shop/>}></Route>
           <Route path='/about' element={ <AboutUs/>}></Route>
           <Route path='/blog' element={ <Blog/>}></Route>
           <Route path='/blood' element={ <Pblood/>}></Route>
           <Route path='/addcard' element={ <PaddtoCard/>}></Route>
           <Route path='/doctorDetails' element={ <PdoctorDetails/>}></Route>
           <Route path='/page' element={ <Pagination/>}></Route>
           <Route path='/product' element={ <ProductCard/>}></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App