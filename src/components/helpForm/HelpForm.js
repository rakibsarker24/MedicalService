import React from 'react'
import '../helpForm/helpform.css'
import { Container,Row,Col,Form ,Button,FloatingLabel } from 'react-bootstrap'
import { TbPlayerPlay } from 'react-icons/tb';




const HelpForm = () => {
  return (
    <section id='helpForm'>
        <Container>
            <Row>
                <Col lg='6'>
                    <div className="image">
                        <img src="images/re.jpg" alt="images" />
                    </div>
                </Col>
                <Col lg='6'>
                    <div className="items">
                        <p>Make in Appointment</p>
                        <h2>Contact us for any medical help and fill out an appointment form.</h2>
                    </div>
                    <div className="itemform">
                        <Form>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Full Name</Form.Label>
                                <Form.Control type="text" placeholder="full name" />
                                </Form.Group>
                                
                                <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                                </Form.Group>
                            </Row>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label> Age</Form.Label>
                                <Form.Control type="text" placeholder="age" />
                                </Form.Group>
                                
                                <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Phone Number</Form.Label>
                                <Form.Control type="text" placeholder='phone number' />
                                </Form.Group>
                            </Row>

                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridState">
                                <Form.Label>Division</Form.Label>
                                <Form.Select defaultValue="Choose...">
                                    <option>Choose...</option>
                                    <option>...</option>
                                    <option>Dhaka</option>
                                    <option>Rangpur</option>
                                    <option>Chattogram</option>
                                </Form.Select>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridCity">
                                <Form.Label>District</Form.Label>
                                <Form.Select defaultValue="Choose...">
                                    <option>Choose...</option>
                                    <option>Dhaka</option>
                                    <option>Gazipur</option>
                                    <option>Rangpur</option>
                                    <option>Gaibandha</option>
                                </Form.Select>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridZip">
                                <Form.Label>Upazila</Form.Label>
                                <Form.Select defaultValue="Choose...">
                                    <option>Choose...</option>
                                    <option>Fulchari </option>
                                    <option>Erendabari</option>
                                    <option>Sadullapur</option>
                                    <option>Kamrjani</option>
                                    <option>Kholahati</option>
                                    <option>Kuptola</option>
                                </Form.Select>
                                </Form.Group>
                            </Row>

                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridState">
                                <Form.Label>Select Department</Form.Label>
                                <Form.Select defaultValue="Choose...">
                                    <option>Choose...</option>
                                    <option>Dermatologists</option>
                                    <option>Endocrinologists</option>
                                    <option>Anesthesiologists</option>
                                    <option>Cardiologists</option>
                                    <option>Rectal Surgeons</option>
                                </Form.Select>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridState">
                                <Form.Label>Select Doctor</Form.Label>
                                <Form.Select defaultValue="Choose...">
                                    <option>Choose...</option>
                                    <option>Dr. Amir Hosen</option>
                                    <option>Dr. Bethi Khatun</option>
                                    <option>Dr. Sajjad Hosen</option>
                                    <option>Dr. Sujon Mia</option>
                                </Form.Select>
                                </Form.Group>
                            </Row>
                            
                            <fieldset>
                                <Form.Group as={Row} className="mb-3">
                                <Form.Label as="legend" column sm={2}>
                                    Gender
                                </Form.Label>
                                <Col sm={10}>
                                    <Form.Check
                                    type="radio"
                                    label="Male"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios1"
                                    />
                                    <Form.Check
                                    type="radio"
                                    label="Female"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios2"
                                    />
                                    <Form.Check
                                    type="radio"
                                    label="Others"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios3"
                                    />
                                </Col>
                                </Form.Group>
                            </fieldset>

                            <FloatingLabel controlId="floatingTextarea2" label="Comments">
                                <Form.Control
                                as="textarea"
                                placeholder="Leave a comment here"
                                style={{ height: '100px' }}
                                />
                            </FloatingLabel>

                            <Button className='mt-3' variant="primary" type="submit">
                                Create Appointment
                            </Button>
                        </Form>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default HelpForm