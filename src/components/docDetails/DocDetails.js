import React, { useEffect, useState } from 'react'
import '../docDetails/docDetails.css'
import { Container,Row,Col, } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { IMAGE_URL, route } from '../../config';

const DocDetails = (props) => {
    const {id} = useParams();
    const [doctor, setDoctor] = useState({});
    useEffect(() => {
      async function fetchDoctor() {
        try {
          const response = await route?.get(`doctors/${id}`);
          console.log(response, "response");
          setDoctor(response?.data);
        } catch (error) {
          console.log(error, "error");
        }
      }
      fetchDoctor();
    }, [id]);
  return (
    <>
        <section id='docdetails'>
            <Container>
                <Row>
                    <Col lg='3'>
                        <div className="docImg">
                            <img src={`${IMAGE_URL}/users/${doctor?.user?.image}`} alt="Doctor" />
                        </div>
                    </Col>
                    <Col lg='4'>
                        <div className="degi">
                           <h3>{doctor?.user?.fullName}</h3>
                           <p><span>Qualifications: </span>{doctor?.description}</p>
                           <p><span>Specialty: </span>{doctor?.appointment}</p>
                           <p><span>Designation: </span>{doctor?.designation} </p>
                           <p><span>Institute: </span>{doctor?.branchName} </p>
                           <p><span>Department Name: </span>{doctor?.department} </p>
                        </div>
                    </Col>
                    <Col lg='5'>
                        <div className="degi">
                            <div className="">
                            <p><span>Appointment: </span>{doctor?.appointment}</p>
                            <p><span>Chamber Time: </span>{doctor?.chamberTime}</p>
                            <p><span>Off Day: </span>{doctor?.offDay}</p>
                            <p><span>Floor Number: </span>{doctor?.floorNumber}</p>
                            <p><span>Room Number:</span> {doctor?.roomNumber} </p>
                            <p><span>Branch Name & Address:</span> {doctor?.branchName}</p>
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