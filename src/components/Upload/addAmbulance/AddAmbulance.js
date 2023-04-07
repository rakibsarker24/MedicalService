import React from 'react'
import '../addAmbulance/addAmbulance.css'
import { Container,Row,Col,Button,Form,FloatingLabel  } from 'react-bootstrap'
const AddAmbulance = () => {
  return (
    <section id='addambulance'>
            <Container>
                <Row>
                    <Col lg='12'>
                        <div className="title">
                            <h2>Add AddAmbulance</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi dolorem omnis iure enim totam voluptatem amet vel reprehenderit quia laudantium?</p>
                        </div>
                    </Col>
                </Row>
                <Row className='justify-content-center'>
                    <Col lg='6' xs='12' sm='12' md='8'>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Ambulance Owner Name</Form.Label>
                                <Form.Control type="text" placeholder="owner name" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Ambulance Owner Image</Form.Label>
                                <Form.Control type="file" placeholder="doctor details" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Contact Number</Form.Label>
                                <Form.Control type="text" placeholder="contact number" />
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

                            
                            <Row className="mb-3">
                              <Form.Group as={Col} controlId="formGridState">
                              <Form.Label>Division</Form.Label>
                              <Form.Select defaultValue="Choose...">
                                  <option>Choose...</option>
                                  <option>Barishal</option>
                                  <option>Chattogram</option>
                                  <option>Dhaka</option>
                                  <option>Rajshahi</option>
                                  <option>Rangpur</option>
                                  <option>Mymensingh </option>
                                  <option>Sylhet</option>
                              </Form.Select>
                              </Form.Group>

                              <Form.Group as={Col} controlId="formGridState">
                              <Form.Label>District</Form.Label>
                              <Form.Select defaultValue="Choose...">
                                  <option>Choose...</option>
                                  <option>Barishal</option>
                                  <option>Chattogram</option>
                                  <option>Dhaka</option>
                                  <option>Rajshahi</option>
                                  <option>Rangpur</option>
                                  <option>Mymensingh </option>
                                  <option>Sylhet</option>
                              </Form.Select>
                              </Form.Group>

                              <Form.Group as={Col} controlId="formGridState">
                              <Form.Label>Upazila</Form.Label>
                              <Form.Select defaultValue="Choose...">
                                  <option>Choose...</option>
                                  <option>Barishal</option>
                                  <option>Chattogram</option>
                                  <option>Dhaka</option>
                                  <option>Rajshahi</option>
                                  <option>Rangpur</option>
                                  <option>Mymensingh </option>
                                  <option>Sylhet</option>
                              </Form.Select>
                              </Form.Group>
                        </Row>

                            
                            <Button variant="primary" type="submit">
                                Add AddAmbulance
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </section>
  )
}

export default AddAmbulance