import React from "react";
import '../bSlider/sblood.css'
import { Container,Row,Col, } from "react-bootstrap";
import { Link } from "react-router-dom";



const Bslider=()=>{
    return(
        <>
            <section id='bslider'>
                <Container>
                    <Row>
                        <Col lg='7' sm='7' md='7'>
                            <div className="bcontent">
                                <span>Donet Blood to Save Blood</span>
                                <p style={{width:"100%"}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni iusto suscipit odio nisi dignissimos error. ipsum dolor sit amet consectetur adipisicing elit. Magni iusto suscipit odio nisi dignissimos error.</p>
                                <Link to='/pdoner'>Donate Blood</Link>
                            </div>
                        </Col>
                        <Col lg='5' sm='5' md='5'>
                            <div className="bimage">
                                <img src='images/bld1.jpg' alt="image" style={{width:"100%"}}/>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Bslider