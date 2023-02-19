import React from 'react'
import { Container,Row,Col,Button } from 'react-bootstrap'
import './hometop.css'
import { NavLink } from 'react-router-dom'

const HomeTop = () => {
  return (
    <>
      <section id="hometop">
        <Container className='container'>
            <Row>
                <Col lg='6' sm='7' md='7'>
                    <div className="htcontent">
                        <h1>We Provide Remote Health Care Services</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus non, explicabo incidunt quam eum voluptatem quibusdam ut assumenda iste laudantium?</p>
                        <NavLink to='/appointment' className='bone'>Get Start</NavLink>
                        <NavLink to='/shop' className='btwo'>Go To Shop</NavLink>
                    </div>
                </Col>
                <Col lg='6' sm='5' md='5'>
                  <div className="image">
                    <img src='images/h1.png' alt='home top'/>
                    <img className='e2' src='images/e2.png' alt='home top'/>
                  </div>
                </Col>
            </Row>
        </Container>
      </section>
    </>
  )
}

export default HomeTop