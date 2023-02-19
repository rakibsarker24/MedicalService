import React from 'react'
import '../bCart/bCart.css'
import { Container,Row,Col,Card } from 'react-bootstrap'

const Bcart = () => {
  return (
    <section id='bcard'>
        <Container>
                <Row className=' justify-content-center'>
                    <Col lg='3'>
                        <a href="">
                            <Card style={{ width: '100%' }}>
                                <Card.Img variant="top" src="images/Pharmacy.png" />
                                <Card.Body>
                                    <Card.Title><label>Given Blood for save life</label></Card.Title>
                                </Card.Body>
                            </Card>
                        </a>
                    </Col>
                    <Col lg='3'>
                        <a href="">
                            <Card style={{ width: '100%' }}>
                                <Card.Img variant="top" src="images/Pharmacy.png" />
                                <Card.Body>
                                    <Card.Title><label>Given Blood for save life</label></Card.Title>
                                </Card.Body>
                            </Card>
                        </a>
                    </Col>
                    <Col lg='3'>
                        <a href="">
                            <Card style={{ width: '100%' }}>
                                <Card.Img variant="top" src="images/Pharmacy.png" />
                                <Card.Body>
                                    <Card.Title><label>Given Blood for save life</label></Card.Title>
                                </Card.Body>
                            </Card>
                        </a>
                    </Col>
                    
                </Row>
        </Container>
    </section>
  )
}

export default Bcart