import React from 'react'
import '../helpForm/helpform.css'
import { Container,Row,Col,Form ,Button } from 'react-bootstrap'
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
                                <Form.Label>Select Department</Form.Label>
                                <Form.Select defaultValue="Choose...">
                                    <option>Choose...</option>
                                    <option>...</option>
                                </Form.Select>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridState">
                                <Form.Label>Select Doctor</Form.Label>
                                <Form.Select defaultValue="Choose...">
                                    <option>Choose...</option>
                                    <option>...</option>
                                </Form.Select>
                                </Form.Group>
                            </Row>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridState">
                                <Form.Label>State</Form.Label>
                                <Form.Select defaultValue="Choose...">
                                    <option>Bangladesh</option>
                                    <option>India</option>
                                    <option>Pakisthan</option>
                                    <option>Choose...</option>
                                    <option>...</option>
                                </Form.Select>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridCity">
                                <Form.Label>City</Form.Label>
                                <Form.Control />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridZip">
                                <Form.Label>Zip</Form.Label>
                                <Form.Control />
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
                            <Button variant="primary" type="submit">
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