import React from 'react'
import '../slider/slider.css'
import { Carousel,Container,Row,Col,Button,Form,Alert } from 'react-bootstrap'


const Slider = () => {
  return (
    <>
        <Carousel fade>
            <Carousel.Item>
                <section id='slider' style={{background:`url(${'images/e.jpg'}) no-repeat center`}}>
                    <Container>
                        <Row>
                            <Col lg='12'>
                                <h2>We Provide Remote Health Care Services</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus non, explicabo incidunt quam eum voluptatem quibusdam ut assumenda iste laudantium?</p>
                                <a href='/'>Get Appointment</a>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </Carousel.Item>
            
            <Carousel.Item>
                <section id='slider' style={{background:`url(${'images/we.jpg'}) no-repeat center`}}>
                    <Container>
                        <Row>
                            <Col lg='12'>
                                <h2>We Provide Remote Health Care Services</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus non, explicabo incidunt quam eum voluptatem quibusdam ut assumenda iste laudantium?</p>
                                <a href='/'>Go to Shop</a>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </Carousel.Item>
            
            <Carousel.Item>
                <section id='slider' style={{background:`url(${'images/e.jpg'}) no-repeat center`}}>
                    <Container>
                        <Row>
                            <Col lg='12'>
                                <h2>We Provide Remote Health Care Services</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus non, explicabo incidunt quam eum voluptatem quibusdam ut assumenda iste laudantium?</p>
                                <a href='/'>Go to Shop</a>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </Carousel.Item>
            
        </Carousel>
    </>
  )
}

export default Slider