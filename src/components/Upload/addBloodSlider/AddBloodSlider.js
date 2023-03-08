import React from 'react'
import '../addShopSlider/addShopSlider.css'
import { Container,Row,Col,Button,Form,FloatingLabel } from 'react-bootstrap'


const AddBloodSlider = () => {
  return (
    <section id='addBloodArtical'>
            <Container>
                <Row>
                    <Col lg='12'>
                        <div className="title">
                            <h2>Add Blood Slider</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi dolorem omnis iure enim totam voluptatem amet vel reprehenderit quia laudantium?</p>
                        </div>
                    </Col>
                </Row>
                <Row className='justify-content-center'>
                    <Col lg='6' xs='12' sm='12' md='8'>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Slider Title</Form.Label>
                                <Form.Control type="text" placeholder="slider title" />
                            </Form.Group>
                            
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Slider Image</Form.Label>
                                <Form.Control type="file" placeholder="slider image" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Path (/path)</Form.Label>
                                <Form.Control type="text" placeholder="path" />
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
                                Upload
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </section>
  )
}

export default AddBloodSlider