import React from 'react'
import '../donerCard/donerCard.css'
import { Container,Row,Col,Card } from 'react-bootstrap'
import { BsStarFill } from 'react-icons/bs';
import { BsStarHalf } from 'react-icons/bs';
import { BiRightArrowAlt } from 'react-icons/bi';
import {NavLink} from 'react-router-dom'

const DonerCard = () => {
  return (
    <section id='popularAmbulance'>
        <Container>
           
            <Row>
                    <Col lg='3' className='mb-4' sm='6'>
                        <Card style={{ width: '100%' }}>
                            <Card.Img variant="top" src="images/am1.jpg" />
                            <Card.Body>
                                <div className="btitle">
                                    <a>Santo Dotto</a>
                                    <h6>Blood Group: <span>"O+"</span></h6>
                                    <h6>Last Donet Date: <span>15 May 2022</span></h6>
                                </div>
                                 <p>Age: 25 Years</p>
                                 <p>Gender: Male</p>
                                <p>Call: <span>0123 4586041</span></p>
                                <p>email: rakibs@gmail.com</p>
                                <p>Address: Dhaka Division</p>
                                <p>

                                {/* <NavLink to="/doctorDetails">Read more<BiRightArrowAlt/></NavLink> */}
                                </p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg='3' className='mb-4' sm='6'>
                        <Card style={{ width: '100%' }}>
                            <Card.Img variant="top" src="images/am1.jpg" />
                            <Card.Body>
                                <div className="btitle">
                                    <a>Santo Dotto</a>
                                    <h6>Blood Group: <span>"O+"</span></h6>
                                    <h6>Last Donet Date: <span>15 May 2022</span></h6>
                                </div>
                                 <p>Age: 25 Years</p>
                                 <p>Gender: Male</p>
                                <p>Call: <span>0123 4586041</span></p>
                                <p>email: rakibs@gmail.com</p>
                                <p>Address: Dhaka Division</p>
                                <p>

                                {/* <NavLink to="/doctorDetails">Read more<BiRightArrowAlt/></NavLink> */}
                                </p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg='3' className='mb-4' sm='6'>
                        <Card style={{ width: '100%' }}>
                            <Card.Img variant="top" src="images/am1.jpg" />
                            <Card.Body>
                                <div className="btitle">
                                    <a>Santo Dotto</a>
                                    <h6>Blood Group: <span>"O+"</span></h6>
                                    <h6>Last Donet Date: <span>15 May 2022</span></h6>
                                </div>
                                 <p>Age: 25 Years</p>
                                 <p>Gender: Male</p>
                                <p>Call: <span>0123 4586041</span></p>
                                <p>email: rakibs@gmail.com</p>
                                <p>Address: Dhaka Division</p>
                                <p>

                                {/* <NavLink to="/doctorDetails">Read more<BiRightArrowAlt/></NavLink> */}
                                </p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg='3' className='mb-4' sm='6'>
                        <Card style={{ width: '100%' }}>
                            <Card.Img variant="top" src="images/am1.jpg" />
                            <Card.Body>
                                <div className="btitle">
                                    <a>Santo Dotto</a>
                                    <h6>Blood Group: <span>"O+"</span></h6>
                                    <h6>Last Donet Date: <span>15 May 2022</span></h6>
                                </div>
                                 <p>Age: 25 Years</p>
                                 <p>Gender: Male</p>
                                <p>Call: <span>0123 4586041</span></p>
                                <p>email: rakibs@gmail.com</p>
                                <p>Address: Dhaka Division</p>
                                <p>

                                {/* <NavLink to="/doctorDetails">Read more<BiRightArrowAlt/></NavLink> */}
                                </p>
                            </Card.Body>
                        </Card>
                    </Col>
                    
            </Row>
        </Container>
    </section>
  )
}

export default DonerCard