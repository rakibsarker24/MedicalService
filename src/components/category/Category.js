import React from 'react'
import { Container,Row,Col,Card,Button } from 'react-bootstrap'
import '../category/category.css'
import { FaNotesMedical } from 'react-icons/fa';
import { FaAmbulance } from 'react-icons/fa';
import { BiDonateBlood } from 'react-icons/bi';
import { FaQuestion } from 'react-icons/fa';
import { RiVideoChatFill } from 'react-icons/ri';
import { FaClinicMedical } from 'react-icons/fa';
import { MdAddShoppingCart } from 'react-icons/md';
import { FaDonate } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';


const Category = () => {
  return (
    <section id='category'>
            <Container>
                <Row>
                    <Col lg='12'>
                        <div className="title">
                            <h2>Choice Catagory</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi dolorem omnis iure enim totam voluptatem amet vel reprehenderit quia laudantium?</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg='3' sm='6' md='4'>
                        <NavLink to='/appointment'>
                            <div className="card-content">
                                    <span><FaNotesMedical/></span>
                                    <h3>Appointment</h3>
                                    <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p> 
                             </div>
                        </NavLink>
                    </Col>
                    <Col lg='3' sm='6' md='4'>
                        <NavLink to='/'>
                            <div className="card-content">
                                    <span><RiVideoChatFill/></span>
                                    <h3>Consultations</h3>
                                    <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p> 
                             </div>
                        </NavLink>
                    </Col>
                    <Col lg='3' sm='6' md='4'>
                        <NavLink to='/'>
                            <div className="card-content">
                                    <span><FaAmbulance/></span>
                                    <h3>Ambulance</h3>
                                    <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p> 
                             </div>
                        </NavLink>
                    </Col>
                    <Col lg='3' sm='6' md='4'>
                        <NavLink to='/blood' >
                            <div className="card-content">
                                    <span><BiDonateBlood/></span>
                                    <h3>Blood Donation</h3>
                                    <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p> 
                             </div>
                        </NavLink>
                    </Col>
                    <Col lg='3' sm='6' md='4'>
                        <NavLink to='/'>
                            <div className="card-content">
                                    <span><FaClinicMedical/></span>
                                    <h3>Diagnostic Tests</h3>
                                    <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p> 
                             </div>
                        </NavLink>
                    </Col>
                    <Col lg='3' sm='6' md='4'>
                        <NavLink to='/'>
                            <div className="card-content">
                                    <span><FaDonate/></span>
                                    <h3>Donation</h3>
                                    <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p> 
                             </div>
                        </NavLink>
                    </Col>
                    <Col lg='3' sm='6' md='4'>
                        <NavLink to='/shop'>
                            <div className="card-content">
                                    <span><MdAddShoppingCart/></span>
                                    <h3>Madical Equpments</h3>
                                    <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p> 
                             </div>
                        </NavLink>
                    </Col>
                    <Col lg='3' sm='6' md='4'>
                        <NavLink to='/'>
                            <div className="card-content">
                                    <span><FaQuestion/></span>
                                    <h3>Have Any FAQ</h3>
                                    <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p> 
                             </div>
                        </NavLink>
                    </Col>
                </Row>
            </Container>
        </section>
  )
}

export default Category