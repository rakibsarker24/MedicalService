import React, { useState } from "react";
import { Container, Row, Col, Button, Form, Card } from "react-bootstrap";
import "../searchAmbulance/searchAmbulance.css";
import divisions from "../../_data/bd-divisions.json";
import districts from "../../_data/bd-districts.json";
import upazilas from "../../_data/bd-upazilas.json";
import { getAddress } from "../../utils";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import { IMAGE_URL } from "../../config";

const initialState = {
  division: "",
  district: "",
  upazila: "",
};

const SearchAmbulance = ({ handelSearch, items }) => {
  const [inputs, setInputs] = useState(initialState);
  const handelChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setInputs((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <section id="searchAmbulance">
      <Container>
        <Row>
          <Col lg="12">
            <div className="title">
              <h2>Search Ambulance</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                dolorem omnis iure enim totam voluptatem amet vel reprehenderit
                quia laudantium?
              </p>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col lg="6">
            <div className="">
              {/* <label htmlFor="">Select your Division</label> */}
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label>Division</Form.Label>
                  <Form.Select
                    defaultValue=""
                    name="division"
                    onChange={handelChange}
                  >
                    <option>Choose...</option>
                    {divisions &&
                      divisions?.map((division) => (
                        <option value={division?.id}>{division?.name}</option>
                      ))}
                  </Form.Select>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label>District</Form.Label>
                  <Form.Select
                    defaultValue=""
                    name="district"
                    onChange={handelChange}
                  >
                    <option>Choose...</option>
                    {districts &&
                      districts
                        ?.filter(
                          (district) =>
                            district?.division_id === inputs?.division
                        )
                        .map((district) => (
                          <option value={district?.id}>{district?.name}</option>
                        ))}
                  </Form.Select>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label>Upazila</Form.Label>
                  <Form.Select
                    defaultValue=""
                    name="upazila"
                    onChange={handelChange}
                  >
                    <option>Choose...</option>
                    {upazilas &&
                      upazilas
                        ?.filter(
                          (upazila) => upazila?.district_id === inputs?.district
                        )
                        .map((upazila) => (
                          <option value={upazila?.id}>{upazila?.name}</option>
                        ))}
                  </Form.Select>
                </Form.Group>
              </Row>
            </div>
            <div className=" text-center mt-4">
              <Button
                onClick={() => handelSearch(inputs)}
                className="btn btn-primary"
              >
                Search Ambulance
              </Button>
            </div>
          </Col>
        </Row>

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

export default SearchAmbulance;
