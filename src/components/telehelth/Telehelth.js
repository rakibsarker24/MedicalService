import React from 'react'
import '../telehelth/telehelth.css'
import { Container,Row,Col,Accordion ,Button } from 'react-bootstrap'
import { BsPlayCircle } from 'react-icons/bs';
import ReactPlayer from 'react-player';

const Telehelth = () => {


  return (
    <section id='telehelth'>
        <Container>
            <Row>
            <Col lg='6' md='6'>
                    {/* <div className="image">
                        <img src="images/e.jpg" alt="" />
                        <div className="play">
                            <BsPlayCircle className='icon'/>
                        </div>
                    </div> */}
                    <ReactPlayer
                        url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                        width="100%" height="100%" controls/>
                </Col>
                <Col lg='6' md='6'>
                    <div className="tlcontent">
                         <p>Customer Telehelth Solutions</p>
                         <span>The telehelth platform provides solutions to all shorts of problems.</span>
                    </div>
                    <div className="item">
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Improve Health Access</Accordion.Header>
                                <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. 
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Appointment Management</Accordion.Header>
                                <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. 
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header>Dadicated Quality Assurance</Accordion.Header>
                                <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. 
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                </Col>
                
            </Row>
            {/* <Row>
                <Col lg='6'>
                    <ReactPlayer
                        url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                        width="100%" height="100%" controls/>
                </Col>
            </Row> */}
        </Container>
    </section>
  )
}

export default Telehelth