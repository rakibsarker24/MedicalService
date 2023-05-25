
import React from 'react'
import '../addArtical/addArtical.css'
import { Container,Row,Col,Button,Form,FloatingLabel  } from 'react-bootstrap'

const AddBloodArtical = () => {
  return (
    <section id='addNewArtical'>
            <Container>
                <Row>
                    <Col lg='12'>
                        <div className="title">
                            <h2>Add Blood Artical</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi dolorem omnis iure enim totam voluptatem amet vel reprehenderit quia laudantium?</p>
                        </div>
                    </Col>
                </Row>
                <Row className='justify-content-center'>
                    <Col lg='6' xs='12' sm='12' md='8'>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Artical Title</Form.Label>
                                <Form.Control type="text" placeholder="artical title" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Publisher Name</Form.Label>
                                <Form.Control type="text" placeholder="publisher name" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Image</Form.Label>
                                <Form.Control type="file" placeholder="doctor details" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Publish Date</Form.Label>
                                <Form.Control type="date" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Details</Form.Label>
                                <FloatingLabel controlId="floatingTextarea2" label="Details">
                                  <Form.Control
                                    as="textarea"
                                    placeholder="Leave a comment here"
                                    style={{ height: '100px' }}
                                  />
                                </FloatingLabel>
                            </Form.Group>
                            
                           
                            <Button variant="primary" type="submit">
                                Publish Artical
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </section>
  )
}

export default AddBloodArtical