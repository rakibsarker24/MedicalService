import React from 'react'
import '../addDoctor/addDoctor.css'
import { Container,Row,Col,Button,Form,FloatingLabel } from 'react-bootstrap'

const AddDoctor = () => {
  return (
    <section id='adddoctor'>
            <Container>
                <Row>
                    <Col lg='12'>
                        <div className="title">
                            <h2>Add Doctor</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi dolorem omnis iure enim totam voluptatem amet vel reprehenderit quia laudantium?</p>
                        </div>
                    </Col>
                </Row>
                <Row className='justify-content-center'>
                    <Col lg='6' xs='12' sm='12' md='8'>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Doctor Name</Form.Label>
                                <Form.Control type="text" placeholder="doctor name" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Doctor Image</Form.Label>
                                <Form.Control type="file" placeholder="doctor details" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Doctor Designation</Form.Label>
                                <Form.Control type="text" placeholder="doctor designation" />
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


                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Appointment</Form.Label>
                                <Form.Control type="text" placeholder="apointment" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Chamber Time</Form.Label>
                                <Form.Control type="text" placeholder="chamber time" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Off Day</Form.Label>
                                <Form.Control type="text" placeholder="off day" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Floor Number</Form.Label>
                                <Form.Control type="text" placeholder="floor number" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Room Number</Form.Label>
                                <Form.Control type="text" placeholder="room number" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Branch Name & Address</Form.Label>
                                <Form.Control type="text" placeholder="branch Name & address" />
                            </Form.Group>

                            <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>Department</Form.Label>
                            <Form.Select defaultValue="Choose...">
                                <option>Choose...</option>
                                <option>Medicine</option>
                                <option>Surgery</option>
                                <option>Gynaecology</option>
                                <option>Obstetrics</option>
                                <option>Paediatrics</option>
                                <option>Eye </option>
                                <option>Neurology</option>
                                <option>orthopaedics</option>
                                <option>Psychiatry</option>
                                <option>Cardiology</option>
                            </Form.Select>
                            </Form.Group>

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
                                Add Doctor
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </section>
  )
}

export default AddDoctor