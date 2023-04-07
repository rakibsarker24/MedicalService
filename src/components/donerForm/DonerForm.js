import React from 'react'
import '../donerForm/donerForm.css'
import { Container,Row,Col,Form ,Button } from 'react-bootstrap'
import { TbPlayerPlay } from 'react-icons/tb';
import DonerForm from './DonerForm';




const Donerform = () => {
  return (
    <section id='donerform'>
        <Container>
            <Row>
                <Col lg='6'>
                    <div className="image">
                        <img src="images/bd1.jpg" alt="images" style={{width:"100%"}}/>
                    </div>
                </Col>
                <Col lg='6'>
                    <div className="items">
                        <p>Make A Blood Donar</p>
                        <h2>Donate Blood to Save lives</h2>
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
                                <Form.Label>Blood Group</Form.Label>
                                <Form.Select defaultValue="Choose...">
                                    <option>Choose...</option>
                                    <option>A+</option>
                                    <option>A-</option>
                                    <option>AB-</option>
                                    <option>AB+</option>
                                    <option>B+</option>
                                    <option>B-</option>
                                    <option>O+</option>
                                    <option>O-</option>
                                </Form.Select>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridState">
                                <Form.Group controlId="dob">
                                    <Form.Label>Last Donate Date</Form.Label>
                                    <Form.Control type="date" name="dob" placeholder="Date of Birth" />
                                </Form.Group>
                                </Form.Group>
                                
                            </Row>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridState">
                                <Form.Label>Division</Form.Label>
                                <Form.Select defaultValue="Choose...">
                                    <option>Choose...</option>
                                    <option>Dhaka</option>
                                    <option>Rajshahi</option>
                                    <option>Rangpur</option>
                                    <option>...</option>
                                </Form.Select>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridCity">
                                <Form.Label>District</Form.Label>
                                <Form.Select defaultValue="Choose...">
                                    <option>Choose...</option>
                                    <option>Dhaka</option>
                                    <option>Rajshahi</option>
                                    <option>Rangpur</option>
                                    <option>...</option>
                                </Form.Select>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridZip">
                                <Form.Label>Upazila</Form.Label>
                                <Form.Select defaultValue="Choose...">
                                    <option>Choose...</option>
                                    <option>Dhaka</option>
                                    <option>Rajshahi</option>
                                    <option>Rangpur</option>
                                    <option>...</option>
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
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Donerform