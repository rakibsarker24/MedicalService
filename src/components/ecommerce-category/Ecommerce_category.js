import React from 'react'
import { Container,Row,Col,Card,Button } from 'react-bootstrap'
import '../ecommerce-category/ecommerce_category.css'
import { Link } from 'react-router-dom'


const Ecommerce_category = () => {
  return (
    <section id='e_category'>
            <Container>
                {/* <Row>
                    <Col lg='12'>
                       <div className="title">
                       <h2>Choice Catagory</h2>
                       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi dolorem omnis iure enim totam voluptatem amet vel reprehenderit quia laudantium?</p>
                       </div>
                    </Col>
                </Row> */}
                <Row>
                    <Col lg='3' xs='6' md='3' sm='3'>
                        <Link to='/tablet'>
                            <div className="card-content">
                            <img src="images/Pharmacy.png" alt="Pharmacy" />
                                    {/* <span><FaNotesMedical/></span> */}
                                    <h3>Tablet </h3>
                             </div>
                        </Link>
                    </Col>
                    <Col lg='3' xs='6' md='3' sm='3'>
                        <Link to='/sirap'>
                            <div className="card-content">
                            <img src="images/Medicine.png" alt="Medicine" />
                                    {/* <span><RiVideoChatFill/></span> */}
                                    <h3>Sirap </h3>
                             </div>
                        </Link>
                    </Col>
                    <Col lg='3' xs='6' md='3' sm='3'>
                        <Link to='/crime'>
                            <div className="card-content">
                            <img src="images/ointment.png" alt="Nutritions" />
                                    {/* <span><FaAmbulance/></span> */}
                                    <h3>Creme </h3>
                             </div>
                        </Link>
                    </Col>
                    <Col lg='3' xs='6' md='3' sm='3'>
                        <Link to='/injections'>
                            <div className="card-content">
                            <img src="images/injection.png" alt="" />
                                    {/* <span><FaDonate/></span> */}
                                    <h3>Injections</h3>
                             </div>
                        </Link>
                    </Col>
                    <Col lg='3' xs='6' md='3' sm='3'>
                        <Link to='/drope'>
                            <div className="card-content">
                            <img src="images/eye-drops.png" alt="Hand Gloves" />
                                    <h3>Drops </h3>
                             </div>
                        </Link>
                    </Col>
                    <Col lg='3' xs='6' md='3' sm='3'>
                        <Link to='/component'>
                            <div className="card-content">
                            <img src="images/Medkits.png" alt="" />
                                    <h3>Medical Components</h3> 
                             </div>
                        </Link>
                    </Col>
                    
                    <Col lg='3' xs='6' md='3' sm='3'>
                        <Link to='/equipment'>
                            <div className="card-content">
                            <img src="images/Safety Guard.png" alt="" />
                                    {/* <span><MdAddShoppingCart/></span> */}
                                    <h3>Safety Equipment</h3>
                             </div>
                        </Link>
                    </Col>
                    <Col lg='3' xs='6' md='3' sm='3'>
                        <Link to='/babyCare'>
                            <div className="card-content">
                                <img src="images/baby.png" alt="" />
                                    {/* <span><FaQuestion/></span> */}
                                    <h3>Baby Care</h3>
                             </div>
                        </Link>
                    </Col>
                </Row>
            </Container>
        </section>
  )
}

export default Ecommerce_category