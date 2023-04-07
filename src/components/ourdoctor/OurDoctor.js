import React, { useEffect, useState } from "react";
import "../ourdoctor/ourdoctor.css";
import { Container, Row, Col, Card } from "react-bootstrap";
import { AiOutlineShareAlt } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { BiRightArrowAlt } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import { IMAGE_URL, route } from "../../config";

const OurDoctor = ({ items }) => {
  return (
    <section id="ourdoctor">
      <Container>
        <Row>
          <Col lg="12">
            <div className="title">
              <h2>Popular Doctors</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                dolorem omnis iure enim totam voluptatem amet vel reprehenderit
                quia laudantium?
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          {items &&
            items?.map((doctor) => (
              <Col lg="3" className="mb-4" sm="6">
                <Card style={{ width: "100%" }}>
                  <Card.Img
                    variant="top"
                    src={`${IMAGE_URL}/doctors/${doctor?.image}`}
                  />
                  <Card.Body>
                    <div className="btitle">
                      <a>{doctor?.name}</a>
                    </div>
                    <p>{doctor?.designation}</p>
                    <p>
                      <NavLink to={`/doctorDetails/${doctor?.id}`}>
                        Read more
                        <BiRightArrowAlt />
                      </NavLink>
                    </p>
                    {/* <div className="bicon">
                         <span><AiOutlineShareAlt/></span>
                         <span><AiOutlineHeart/></span>
                     </div> */}
                  </Card.Body>
                </Card>
              </Col>
            ))}
        </Row>
      </Container>
    </section>
  );
};

export default OurDoctor;
