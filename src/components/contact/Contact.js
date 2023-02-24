import React from 'react'
import '../contact/contact.css'
import { Container,Row,Col,Form ,Button,InputGroup} from 'react-bootstrap'




const Contact = () => {
  return (
    <section id='contact'>
        <Container>
            <Row className='justify-content-center'>
                <Col lg='5'>
                    <div className="">
                        <h2>Contact <span>Us</span></h2>
                    </div>
                    <div className="itemform">
                        <Form>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Your Name</Form.Label>
                                <Form.Control type="text" placeholder="full name" />
                                </Form.Group>
                                
                                <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                                </Form.Group>
                            </Row>
                            
                            <Row>
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Message*</Form.Label>
                                    <Form.Control className='ctextarea' as="textarea" aria-label="With textarea" placeholder='type here' />
                                </Form.Group>
                               
                            </Row>

                            <Button variant="primary" type="submit">
                                Send Message
                            </Button>
                        </Form>
                    </div>
                </Col>

                <Col lg='5'>
                    <div className="ccontent">
                        <h4>Get in Touch</h4>
                        <p>Popular started its journey in June 1983 and within few days due to its accuracy of the reports and quality of the service, Popular became an unparallel symbol of reliability and trust from the end of respective doctors and the people of our country. To get any service and support from us, please contact us.</p>
                    </div>
                </Col>

            </Row>
        </Container>
    </section>
  )
}

export default Contact