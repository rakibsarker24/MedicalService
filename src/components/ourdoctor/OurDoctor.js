import React from 'react'
import '../ourdoctor/ourdoctor.css'
import { Container,Row,Col,Card } from 'react-bootstrap'
import { AiOutlineShareAlt } from 'react-icons/ai';
import { AiOutlineHeart } from 'react-icons/ai';
import { BiRightArrowAlt } from 'react-icons/bi';
import {NavLink} from 'react-router-dom'

const OurDoctor = () => {
  return (
    <section id='ourdoctor'>
        <Container>
            <Row>
                 <Col lg='12'>
                       <div className="title">
                       <h2>Popular Doctors</h2>
                       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi dolorem omnis iure enim totam voluptatem amet vel reprehenderit quia laudantium?</p>
                       </div>
                </Col>
            </Row>
            <Row>
                    <Col lg='3' className='mb-4' sm='6'>
                        <Card style={{ width: '100%' }}>
                            <Card.Img variant="top" src="images/d1.jpg" />
                            <Card.Body>
                                <div className="btitle">
                                    <a>Dr. Md Pias Uddin</a>
                                </div>
                                <span>MBBS, FCPS (Psych),Professor & Ex. Chairman, Psychiatry & Psychotherapy</span>
                                <p>

                                <NavLink to="/doctorDetails">Read more<BiRightArrowAlt/></NavLink>
                                </p>
                                {/* <div className="bicon">
                                    <span><AiOutlineShareAlt/></span>
                                    <span><AiOutlineHeart/></span>
                                </div> */}
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg='3' className='mb-4' sm='6'>
                        <Card style={{ width: '100%' }}>
                            <Card.Img variant="top" src="images/d1.jpg" />
                            <Card.Body>
                                <div className="btitle">
                                    <a>Dr. Md Pias Uddin</a>
                                </div>
                                <span>MBBS, FCPS (Psych),Professor & Ex. Chairman, Psychiatry & Psychotherapy</span>
                                <p>

                                <NavLink to="/doctorDetails">Read more<BiRightArrowAlt/></NavLink>
                                </p>
                                {/* <div className="bicon">
                                    <span><AiOutlineShareAlt/></span>
                                    <span><AiOutlineHeart/></span>
                                </div> */}
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg='3' className='mb-4' sm='6'>
                        <Card style={{ width: '100%' }}>
                            <Card.Img variant="top" src="images/d1.jpg" />
                            <Card.Body>
                                <div className="btitle">
                                    <a>Dr. Md Pias Uddin</a>
                                </div>
                                <span>MBBS, FCPS (Psych),Professor & Ex. Chairman, Psychiatry & Psychotherapy</span>
                                <p>

                                <NavLink to="/doctorDetails">Read more<BiRightArrowAlt/></NavLink>
                                </p>
                                {/* <div className="bicon">
                                    <span><AiOutlineShareAlt/></span>
                                    <span><AiOutlineHeart/></span>
                                </div> */}
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg='3' className='mb-4' sm='6'>
                        <Card style={{ width: '100%' }}>
                            <Card.Img variant="top" src="images/d1.jpg" />
                            <Card.Body>
                                <div className="btitle">
                                    <a>Dr. Md Pias Uddin</a>
                                </div>
                                <span>MBBS, FCPS (Psych),Professor & Ex. Chairman, Psychiatry & Psychotherapy</span>
                                <p>

                                <NavLink to="/doctorDetails">Read more<BiRightArrowAlt/></NavLink>
                                </p>
                                {/* <div className="bicon">
                                    <span><AiOutlineShareAlt/></span>
                                    <span><AiOutlineHeart/></span>
                                </div> */}
                            </Card.Body>
                        </Card>
                    </Col>

            </Row>
        </Container>
    </section>
  )
}

export default OurDoctor