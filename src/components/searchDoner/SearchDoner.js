import React from 'react'
import { Container,Row,Col,Form } from 'react-bootstrap'
import '../searchDoner/searchDoner.css'

const SearchDoner = () => {
  return (
    <section id='searchDoner'>
        <Container>
            <Row>
                <Col lg='12'>
                    <div className="title">
                        <h2>Search Doner</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi dolorem omnis iure enim totam voluptatem amet vel reprehenderit quia laudantium?</p>
                    </div>
                </Col>
            </Row>
            <Row className='justify-content-center'>
                <Col lg='6'>
                    <div className="">
                        {/* <label htmlFor="">Select your Division</label> */}
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
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default SearchDoner