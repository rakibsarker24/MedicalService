import React from 'react'
import '../donetBlood/donetBlood.css'
import { Container,Row,Col,Form ,Button } from 'react-bootstrap'

const DonetBlood = () => {
  return (
    <section id='donerForm'>
        <Container>
            <Row>
                <Col lg='6'>
                    <div className="image">
                        <img src="images/bd1.jpg" alt="images" />
                    </div>
                </Col>
                <Col lg='6'>
                    <div className="items">
                        <p>Fillup Doner Form</p>
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
                                <Form.Label>Blood Group</Form.Label>
                                <Form.Select defaultValue="Choose...">
                                     <option>Choose...</option>
                                  <option>A+</option>
                                  <option>A-</option>
                                  <option>B-</option>
                                  <option>B+</option>
                                  <option>AB-</option>
                                  <option>AB+</option>
                                  <option>O+</option>
                                  <option>O-</option>
                                </Form.Select>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridState">
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label> Last Blood Donetion Date <span>( if you donet )</span></Form.Label>
                                    <Form.Control type="date" />
                                </Form.Group>
                                </Form.Group>
                            </Row>

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

export default DonetBlood