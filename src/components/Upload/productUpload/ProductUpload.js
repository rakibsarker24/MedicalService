import React from 'react'
import '../productUpload/productUpload.css'
import { Container,Row,Col,Button,Form,FloatingLabel } from 'react-bootstrap'

const ProductUpload = () => {
  return (
    <>
        <section id='proUpload'>
            <Container>
                <Row>
                    <Col lg='12'>
                        <div className="title">
                            <h2>Product Upload</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi dolorem omnis iure enim totam voluptatem amet vel reprehenderit quia laudantium?</p>
                        </div>
                    </Col>
                </Row>
                <Row className='justify-content-center'>
                    <Col lg='6' xs='12' sm='12' md='8'>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Product Name</Form.Label>
                                <Form.Control type="text" placeholder="product name" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>Product Category</Form.Label>
                            <Form.Select defaultValue="Choose...">
                                <option>Choose...</option>
                                <option>tablet</option>
                                <option>sirap</option>
                                <option>crime</option>
                                <option>injection</option>
                                <option>drop</option>
                                <option>medical_component </option>
                                <option>safty_equipment</option>
                                <option>baby_care</option>
                            </Form.Select>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Product Image</Form.Label>
                                <Form.Control type="file" placeholder="product details" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Product Details</Form.Label>
                                <FloatingLabel controlId="floatingTextarea2" label="Details">
                                  <Form.Control
                                    as="textarea"
                                    placeholder="Leave a comment here"
                                    style={{ height: '100px' }}
                                  />
                                </FloatingLabel>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Price</Form.Label>
                                <Form.Control type="text" placeholder="price" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Discount Price</Form.Label>
                                <Form.Control type="text" placeholder="discount price" />
                            </Form.Group>

                            
                            <Button variant="primary" type="submit">
                                Upload
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </section>
    </>
  )
}

export default ProductUpload