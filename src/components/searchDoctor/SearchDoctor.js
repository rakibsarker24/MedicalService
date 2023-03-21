import React from 'react'
import { Container,Row,Col,Form,Button } from 'react-bootstrap'
import '../searchDoctor/searchDoctor.css'

const SearchDoctor = () => {
  return (
    <section id='searchDoctor'>
        <Container>
            <Row>
                <Col lg='12'>
                    <div className="title">
                        <h2>Search Doctor</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi dolorem omnis iure enim totam voluptatem amet vel reprehenderit quia laudantium?</p>
                    </div>
                </Col>
            </Row>
            <Row className='justify-content-center'>
                <Col lg='8'>
                    <div className="">
                        {/* <label htmlFor="">Select your Division</label> */}
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

                        <div className=" text-center mt-4">
                            <Button className='btn btn-primary'>Search Doctor</Button>
                        </div>

                        </Row>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default SearchDoctor