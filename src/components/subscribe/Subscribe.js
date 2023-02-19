import React from 'react'
import { Container,Row,Col,Button } from 'react-bootstrap'
import '../subscribe/subscribe.css'

const Subscribe = () => {
  return (
    <section id='subscribe'>
        <Container>
            <Row>
                <Col lg='6' md='6'>
                    <div className="item">
                        <h3>Subscribe to the Updates!</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores blanditiis facilis, quos voluptas praesentium pariatur!</p>
                    </div>
                </Col>
                <Col lg='6' md='6'>
                    <div className="input">
                        <div className='search'>
                        <input type="search" placeholder='your email' />
                        <a>Subscribe</a>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Subscribe