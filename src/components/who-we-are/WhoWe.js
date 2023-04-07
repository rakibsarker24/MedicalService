import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import CountUp from 'react-countup'
import '../who-we-are/whowe.css'

const WhoWe = () => {
  return (
    <>
         <section id='who-we'>
            <Container>
                <Row>
                    <Col lg='6' md='6'>
                        <div className="item">
                            <span>Who We Are?</span>
                            <h2>with us, expect more than just a pharmacy.</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus non, explicabo incidunt quam eum voluptatem quibusdam ut assumenda iste laudantium? sit amet consectetur adipisicing elit. Minus non, explicabo incidunt.</p>
                           
                            <div className="down">
                                    <div className="one">
                                        <h2><CountUp start={0} end={1545} duration={5.75}></CountUp>+</h2>
                                        <span>Happy Customer</span>
                                    </div>
                                
                                    <div className="one">
                                        <h2><CountUp start={0} end={827} duration={5.75}></CountUp>+</h2>
                                        <span>Product Solid</span>
                                    </div>
                               
                                    <div className="one">
                                        <h2><CountUp start={0} end={8} duration={5.75}></CountUp>+</h2>
                                        <span>Years Experience</span>
                                    </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg='6' md='6'>
                        <div className='image'>
                            <img src="images/b.jpg" alt="image" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    </>
  )
}

export default WhoWe