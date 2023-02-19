import React from 'react'
import { Container,Row,Col,Card,Button } from 'react-bootstrap'
import '../ecommerce-category/ecommerce_category.css'


const Ecommerce_category = () => {
  return (
    <section id='e_category'>
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
                    <Col lg='3' xs='6' md='3' sm='3'>
                        <a href='#'>
                            <div className="card-content">
                            <img src="images/Pharmacy.png" alt="Pharmacy" />
                                    {/* <span><FaNotesMedical/></span> */}
                                    <h3>Pharmacy</h3>
                             </div>
                        </a>
                    </Col>
                    <Col lg='3' xs='6' md='3' sm='3'>
                        <a href='#'>
                            <div className="card-content">
                            <img src="images/Medicine.png" alt="Medicine" />
                                    {/* <span><RiVideoChatFill/></span> */}
                                    <h3>Medicine</h3>
                             </div>
                        </a>
                    </Col>
                    <Col lg='3' xs='6' md='3' sm='3'>
                        <a href='#'>
                            <div className="card-content">
                            <img src="images/Nutritions.png" alt="Nutritions" />
                                    {/* <span><FaAmbulance/></span> */}
                                    <h3>Nutritions</h3>
                             </div>
                        </a>
                    </Col>
                    <Col lg='3' xs='6' md='3' sm='3'>
                        <a href='#'>
                            <div className="card-content">
                            <img src="images/Hand Gloves.png" alt="Hand Gloves" />
                                    {/* <span><BiDonateBlood/></span> */}
                                    <h3>Hand Gloves</h3>
                             </div>
                        </a>
                    </Col>
                    <Col lg='3' xs='6' md='3' sm='3'>
                        <a href='#'>
                            <div className="card-content">
                            <img src="images/Medkits.png" alt="" />
                                    {/* <span><FaClinicMedical/></span> */}
                                    <h3>Medkits</h3> 
                             </div>
                        </a>
                    </Col>
                    <Col lg='3' xs='6' md='3' sm='3'>
                        <a href='#'>
                            <div className="card-content">
                            <img src="images/Surgical Mask.png" alt="" />
                                    {/* <span><FaDonate/></span> */}
                                    <h3>Surgical Mask</h3>
                             </div>
                        </a>
                    </Col>
                    <Col lg='3' xs='6' md='3' sm='3'>
                        <a href='#'>
                            <div className="card-content">
                            <img src="images/Safety Guard.png" alt="" />
                                    {/* <span><MdAddShoppingCart/></span> */}
                                    <h3>Safety Guard</h3>
                             </div>
                        </a>
                    </Col>
                    <Col lg='3' xs='6' md='3' sm='3'>
                        <a href='#'>
                            <div className="card-content">
                                <img src="images/Equipments.png" alt="" />
                                    {/* <span><FaQuestion/></span> */}
                                    <h3>Equipments</h3>
                             </div>
                        </a>
                    </Col>
                </Row>
            </Container>
        </section>
  )
}

export default Ecommerce_category