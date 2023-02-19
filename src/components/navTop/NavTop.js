import React from 'react'
import '../navTop/navtop.css'
import { IoIosCall } from 'react-icons/io';
import { MdEmail } from 'react-icons/md';
import { FaFacebookMessenger } from 'react-icons/fa';
import { BsFacebook } from 'react-icons/bs';
import {Container, Row,Col,} from 'react-bootstrap';

const NavTop = () => {
  return (
    <>
        <section id="nabtop">
            <Container className='container'>
                <Row>
                    <Col lg='3' xs='5'>
                        <div className="email">
                        <span><MdEmail/></span>
                        <label>madico@gmail.com</label>
                        </div>
                    </Col>
                    <Col lg='3' xs='5'>
                        <div className="email">
                        <span><IoIosCall/></span>
                        <label>+880-8785646582</label>
                        </div>
                    </Col>
                    <Col lg='6' xs='2'>
                        <div className="icon">
                        <span><BsFacebook/></span>
                        <span><FaFacebookMessenger/></span>
                        {/* <span><AiFillTwitterCircle/></span> */}
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    </>
  )
}

export default NavTop