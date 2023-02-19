import React from 'react'
import '../docDetails/docDetails.css'
import { Container,Row,Col, } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const DocDetails = () => {
  return (
    <>
        <section id='docdetails'>
            <Container>
                <Row>
                    <Col lg='3'>
                        <div className="docImg">
                            <img src="images/d1.jpg" alt="Doctor" />
                        </div>
                    </Col>
                    <Col lg='4'>
                        <div className="degi">
                           <h3>Dr. Md. Mawla Ali Sheikh</h3>
                           <p><span>Qualifications: </span>MBBS, DGO, MCPS</p>
                           <p><span>Specialty: </span>Language Spoken</p>
                           <p><span>Designation: </span>Consultant </p>
                           <p><span>Institute: </span>Ibn Sina Specialized Hospital, Dhanmondi </p>
                           <p><span>Department Name: </span>Gastroenterology </p>
                        </div>
                    </Col>
                    <Col lg='5'>
                        <div className="degi">
                            <div className="">
                            <p><span>Appointment: </span>+88 09610009616 (Hot Line), 02 8091332-6, 02 8035905</p>
                            <p><span>Chamber Time: </span>Morning: 11.00 AM to 1.00PM & Evening: 7.00 PM to 9.00PM</p>
                            <p><span>Off Day: </span>Friday & Govt. Holiday </p>
                            <p><span>Floor Number: </span>2nd Floor(Hospital Bhaban) </p>
                            <p><span>Room Number:</span> 309 </p>
                            <p><span>Branch Name & Address:</span> Ibn Sina Medical College Hospital, Kallyanpur
1/1, Mirpur Road, Kallyanpur, Dhaka-1216 </p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    </>
  )
}

export default DocDetails