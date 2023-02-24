import React from 'react'
import '../navber/navber.css'
import {Container, Row,Col,Nav,Navbar,NavDropdown} from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';
import { MdAccountCircle } from 'react-icons/md';
import { NavLink,Link } from 'react-router-dom';
import { IoIosCall } from 'react-icons/io';
import { MdEmail } from 'react-icons/md';
import { FaFacebookMessenger } from 'react-icons/fa';
import { BsFacebook } from 'react-icons/bs';

const Navber = () => {
  return (
    <>
        <section id="navber" className='navtop'>
            <Container className='container'>
                <Row>
                    <Col lg='3' xs='5'>
                        <div className="email">
                        <span><MdEmail/></span>
                        <label>madico@gmail.com</label>
                        </div>
                    </Col>
                    <Col lg='3' xs='5'>
                        <div className="email">
                        <span><IoIosCall/></span>
                        <label>+880-8785646582</label>
                        </div>
                    </Col>
                    <Col lg='6' xs='2'>
                        <div className="icon">
                        <span><BsFacebook/></span>
                        <span><FaFacebookMessenger/></span>
                        {/* <span><AiFillTwitterCircle/></span> */}
                        </div>
                    </Col>
                </Row>
            </Container>
        {/* </section> */}

        {/* <section id='menu'> */}
            <Navbar bg="" expand="lg" className='menu'>
              <Container className='container px-0'>
                 <div className="brandlogo">
                    <Link to="/" className='logo'>
                        <img src='images/logo.png' alt='logo'/>
                      </Link>
                 </div>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">

                  <Nav className="justify-content-center center my-0">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/appointment">Appointment</NavLink>
                    <NavLink to="/doctors">Our Doctor</NavLink>
                    <NavDropdown className='mb-0  dropbtn' title="Services" id="basic-nav-dropdown">
                        <NavLink to="/appointment">Appointment</NavLink>
                        <NavLink to="/blood">Blood Bank</NavLink>
                        <NavLink to="/ambulance">Ambulance</NavLink>
                        <NavLink to="/donation">Donation</NavLink>
                        <NavDropdown.Divider />
                    </NavDropdown>
                        <NavLink to="/shop">Shop</NavLink>
                        <NavLink to="/blog">Blog</NavLink>
                        <NavLink to="/about">Contact</NavLink>
                  </Nav>

                <div className='navIcons flex'>
                    <Link to='/addcard'><FaShoppingCart className='nicon'/></Link>
                    <Link to='/login'><MdAccountCircle className='nicon'/></Link>
                </div>
                </Navbar.Collapse>
              </Container>
            </Navbar>
        </section>
    </>
  )
}

export default Navber