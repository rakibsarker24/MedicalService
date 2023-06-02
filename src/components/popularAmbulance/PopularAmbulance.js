import React from "react";
import "../popularAmbulance/popularAmbulance.css";
import { Container, Row, Col, Card } from "react-bootstrap";
import { BsStarFill } from "react-icons/bs";
import { BsStarHalf } from "react-icons/bs";
import { IMAGE_URL } from "../../config";
import { getAddress } from "../../utils";

const PopularAmbulance = ({ items }) => {
  return (
    <section id="popularAmbulance">
      <Container>
        <Row>
          <Col lg="12">
            <div className="title">
              <h2>Popular Ambulance</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                dolorem omnis iure enim totam voluptatem amet vel reprehenderit
                quia laudantium?
              </p>
            </div>
          </Col>
        </Row>
        {/* <Row>
                    <Col lg='3' className='mb-4' sm='6'>
                        <Card style={{ width: '100%' }}>
                            <Card.Img variant="top" src="images/am1.jpg" />
                            <Card.Body>
                                <div className="btitle">
                                    <a>Santo Dotto</a>
                                </div>
                                <span>West Kafrul,Dhaka-1207</span>
                                <div className="amicon">
                                    <BsStarFill/>
                                    <BsStarFill/>
                                    <BsStarFill/>
                                    <BsStarFill/>
                                    <BsStarHalf/>
                                </div>
                                <p>Call: 0123 4586041</p>
                                <p>Service Area: Dhaka Division</p>
                                <p>

                                <NavLink to="/doctorDetails">Read more<BiRightArrowAlt/></NavLink>
                                </p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg='3' className='mb-4' sm='6'>
                        <Card style={{ width: '100%' }}>
                            <Card.Img variant="top" src="images/am2.jpg" />
                            <Card.Body>
                                <div className="btitle">
                                    <a>Mominur Rahman</a>
                                </div>
                                <span>West Kafrul,Dhaka-1207</span>
                                <div className="amicon">
                                    <BsStarFill/>
                                    <BsStarFill/>
                                    <BsStarFill/>
                                    <BsStarFill/>
                                    <BsStarHalf/>
                                </div>
                                <p>Call: 0123 4586041</p>
                                <p>Service Area: Dhaka Division</p>
                                <p>

                                <NavLink to="/doctorDetails">Read more<BiRightArrowAlt/></NavLink>
                                </p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg='3' className='mb-4' sm='6'>
                        <Card style={{ width: '100%' }}>
                            <Card.Img variant="top" src="images/am3.jpg" />
                            <Card.Body>
                                <div className="btitle">
                                    <a>Junnur Hashan</a>
                                </div>
                                <span>West Kafrul,Dhaka-1207</span>
                                <div className="amicon">
                                    <BsStarFill/>
                                    <BsStarFill/>
                                    <BsStarFill/>
                                    <BsStarFill/>
                                    <BsStarHalf/>
                                </div>
                                <p>Call: 0123 4586041</p>
                                <p>Service Area: Dhaka Division</p>
                                <p>

                                <NavLink to="/doctorDetails">Read more<BiRightArrowAlt/></NavLink>
                                </p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg='3' className='mb-4' sm='6'>
                        <Card style={{ width: '100%' }}>
                            <Card.Img variant="top" src="images/am4.jpg" />
                            <Card.Body>
                                <div className="btitle">
                                    <a>Mst Joti Begum</a>
                                </div>
                                <span>West Kafrul,Dhaka-1207</span>
                                <div className="amicon">
                                    <BsStarFill/>
                                    <BsStarFill/>
                                    <BsStarFill/>
                                    <BsStarFill/>
                                    <BsStarHalf/>
                                </div>
                                <p>Call: 0123 4586041</p>
                                <p>Service Area: Dhaka Division</p>
                                <p>

                                <NavLink to="/doctorDetails">Read more<BiRightArrowAlt/></NavLink>
                                </p>
                            </Card.Body>
                        </Card>
                    </Col>

            </Row> */}

        <Row>
          {items && items?.length > 0 ? (
            <>
              {items?.map((ambulance) => (
                <Col lg="3" className="mb-4" sm="6">
                  <Card style={{ width: "100%" }}>
                    <Card.Img
                      variant="top"
                      src={`${IMAGE_URL}/ambulances/${ambulance?.image}`}
                    />
                    <Card.Body>
                      <div className="btitle">
                        <a>{ambulance?.fullName}</a>
                      </div>
                      <span>{ambulance?.currentLocation}</span>
                      <div className="amicon">
                        <BsStarFill />
                        <BsStarFill />
                        <BsStarFill />
                        <BsStarFill />
                        <BsStarHalf />
                      </div>
                      <p>Call: {ambulance?.contactNumber}</p>
                      <p>
                        Service Area:{" "}
                        {getAddress(
                          ambulance?.division,
                          ambulance?.district,
                          ambulance?.upazila
                        )}
                      </p>
                      <p>
                        {/* <NavLink to="/doctorDetails">Read more<BiRightArrowAlt/></NavLink> */}
                      </p>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </>
          ) : (
            <h1>No ambulance found!</h1>
          )}
        </Row>
      </Container>
    </section>
  );
};

export default PopularAmbulance;
