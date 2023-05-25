import React from 'react'
import '../videoCall/videoCall.css'
import { Container,Row,Col,Form ,Button } from 'react-bootstrap'
import { TbVideoOff } from 'react-icons/tb';




const VideoCall = () => {
  return (
    <section id='videoCall'>
        <Container>
                <Row>
                    <Col lg='12'>
                        <div className="title">
                            <h2>Start Video Call</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi dolorem omnis iure enim totam voluptatem amet vel reprehenderit quia laudantium?</p>
                        </div>
                    </Col>
                </Row>
            <Row>
                <Col lg='6' sm='6' md='6' xs='6' className='mb-3'>
                    <div className="image">
                        <img src="images/e.jpg" alt="images" style={{width:"100%"}} />
                    </div>
                </Col>
                <Col lg='6' sm='6' md='6' xs='6'>
                    <div className="call">
                        <div className="icon">
                            <TbVideoOff className='vicon'/>
                            <span style={{color:"white"}}>Click to Start Video Call</span>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}
export default VideoCall