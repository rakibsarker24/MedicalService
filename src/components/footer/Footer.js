import React from 'react'
import '../footer/footer.css'
import { Container,Row,Col,Card,Button } from 'react-bootstrap'
import { FaFacebookF } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import { IoLogoYoutube } from 'react-icons/io';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { IoIosCall } from 'react-icons/io';
import { HiOutlineMailOpen } from 'react-icons/hi';
import { BiTimeFive } from 'react-icons/bi';
import { BiLocationPlus } from 'react-icons/bi';
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <section id='footer'>
        <Container className='fullfooter'>
            <Row>
                <Col lg='3' sm='6' md='6' className='mb-3'>
                    <div className="left">
                        <div className="logo">
                            <img src="images/logo.png" alt="logo" />
                        </div>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora nemo totam a. Quam, porro odio!</p>
                        <div className="ficon">
                            <span><FaFacebookF/></span>
                            <span><FaLinkedinIn/></span>
                            <span><AiFillInstagram/></span>
                            <span><IoLogoYoutube/></span>
                        </div>
                    </div>
                </Col>
                <Col lg='3' sm='6' md='6' className='mb-3'>
                    <div className="header">
                        <h3>Category</h3>
                    </div>
                    <ul>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/about">Leadership</Link></li>
                        <li><Link to="/about">Career</Link></li>
                        <li><Link to="/about">Partner</Link></li>
                        {/* <li><a href="">Legal Notice</a></li> */}
                        <li><Link to="/blog">News & Articel</Link></li>
                    </ul>
                </Col>
                <Col lg='3' sm='6' md='6'>
                    <div className="header">
                        <h3>Support</h3>
                    </div>
                    <ul>
                        <li><Link to="/appointment">Apiontment</Link></li>
                        <li><Link to="/about">Consultations</Link></li>
                        <li><Link to="/blood">Blood Donation</Link></li>
                        <li><Link to="/ambulance">Ambulance</Link></li>
                        <li><Link to="/about">Diagnostic Tests</Link></li>
                        <li><Link to="/component">Madical Equpments</Link></li>
                    </ul>
                </Col>
                <Col lg='3' sm='6' md='6'>
                    <div className="header">
                        <h3>Head Office</h3>
                    </div>
                    <div className="contact">
                        <div className="con">
                            <span><IoIosCall/></span>
                            <label>+68(21)2022-2012</label>
                        </div>
                        <div className="con">
                            <span><HiOutlineMailOpen/></span>
                            <label>crosspoint@email.com</label>
                        </div>
                        <div className="con">
                            <span><BiTimeFive/></span>
                            <label>Monday 7Am-10pm Saterday</label>
                        </div>
                        <div className="con">
                            <span><BiLocationPlus className='loca'/>Jln Cempaka Walgi no-22, Jakarata, Indonesia</span>
                        </div>
                    </div>
                </Col>
            </Row>
            {/* <Row>
                <Col lg='12'>
                    <div className='fterbtm'>
                    <hr></hr>
                        <p>Design & Development by Md Rakib Sarker</p>
                    </div>
                </Col>
            </Row> */}
        </Container>
    </section>
  )
}

export default Footer