import { useState } from 'react';
import '../navber/navber.css'
import {Container, Row,Col,Nav,Navbar,NavDropdown,Offcanvas} from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';
import { MdAccountCircle } from 'react-icons/md';
import { NavLink,Link, useNavigate } from 'react-router-dom';
import { IoIosCall } from 'react-icons/io';
import { MdEmail } from 'react-icons/md';
import { FaFacebookMessenger } from 'react-icons/fa';
import { BsFacebook } from 'react-icons/bs';

const Navber = () => {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


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
                        </div>
                    </Col>
                </Row>
            </Container>

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
                    <Link variant="primary" onClick={handleShow} ><FaShoppingCart className='nicon'/>
                      <Offcanvas show={show} onHide={handleClose}>
                          <Offcanvas.Header closeButton>
                          <Offcanvas.Title>All Cards</Offcanvas.Title>
                          </Offcanvas.Header>
                          <Offcanvas.Body>
                          Some text as placeholder. In real life you can have the elements you
                          have chosen. Like, text, images, lists, etc.
                          </Offcanvas.Body>
                      </Offcanvas>
                    </Link>
                    <div className="numcart">
                      <p>0</p>
                    </div>
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