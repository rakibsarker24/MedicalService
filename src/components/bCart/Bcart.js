import React from 'react'
import '../bCart/bCart.css'
import { Container,Row,Col,Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Bcart = () => {
  return (
    <section id='bcard'>
        <Container>
                <Row className=' justify-content-center'>
                    <Col lg='2'>
                        <Link to="/">
                            <Card style={{ width: '100%' }}>
                                <Card.Img variant="top" src="images/bld2.jpg" />
                                <Card.Body>
                                    <Card.Title><label>Benifit for Donate Bloot</label></Card.Title>
                                </Card.Body>
                            </Card>
                        </Link>
                    </Col>
                    <Col lg='2'>
                        <Link to="/">
                            <Card style={{ width: '100%' }}>
                                <Card.Img variant="top" src="images/bld3.jpg" />
                                <Card.Body>
                                    <Card.Title><label>Given Blood for save life</label></Card.Title>
                                </Card.Body>
                            </Card>
                        </Link>
                    </Col>
                    <Col lg='2'>
                        <Link to="/">
                            <Card style={{ width: '100%' }}>
                                <Card.Img variant="top" src="images/bld3.jpg" />
                                <Card.Body>
                                    <Card.Title><label>Given Blood for save life</label></Card.Title>
                                </Card.Body>
                            </Card>
                        </Link>
                    </Col>
                    
                </Row>
        </Container>
    </section>
  )
}

export default Bcart