import React from "react";
import "../donerCard/donerCard.css";
import { Container, Row, Col, Card } from "react-bootstrap";
import { BsStarFill } from "react-icons/bs";
import { BsStarHalf } from "react-icons/bs";
import { BiRightArrowAlt } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import { IMAGE_URL } from "../../config";
import moment from "moment";
import { getAddress } from "../../utils";

const DonerCard = ({ items }) => {
  return (
    <section id="popularAmbulance">
      <Container>
        <Row>
          {items &&
            items?.map((item) => (
              <Col lg="3" className="mb-4" sm="6">
                <Card style={{ width: "100%" }}>
                    {item?.image && (
                  <Card.Img variant="top" src={`${IMAGE_URL}/blood_donors/${item?.image}`} />

                    )}
                  <Card.Body>
                    <div className="btitle">
                      <a>{item?.fullName}</a>
                      <h6>
                        Blood Group: <span>"{item?.bloodGroup}"</span>
                      </h6>
                      <h6>
                        Last Donet Date: <span>{moment(item?.lastDonateDate).format('d MMM, Y')}</span>
                      </h6>
                    </div>
                    <p>Age: {item?.age}</p>
                    <p>Gender: {item?.gender}</p>
                    <p>
                      Call: <span>{item?.contactNumber}</span>
                    </p>
                    <p>email: {item?.email}</p>
                    <p>Address: {getAddress(item?.division, item?.district, item?.upazila)}</p>
                    <p>
                      {/* <NavLink to="/doctorDetails">Read more<BiRightArrowAlt/></NavLink> */}
                    </p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
        </Row>
      </Container>
    </section>
  );
};

export default DonerCard;
