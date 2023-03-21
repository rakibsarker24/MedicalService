import React from 'react'
import { Container,Row,Col,Form,Button } from 'react-bootstrap'
import '../searchDoner/searchDoner.css'
import DonerCard from '../donerCard/DonerCard'

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
                    <div className=" text-center mt-4">
                            <Button className='btn btn-primary'>Search Doner</Button>
                    </div>

                </Col>
            </Row>
                    <div className="">
                        <DonerCard/>
                    </div>
        </Container>
    </section>
  )
}

export default SearchDoner