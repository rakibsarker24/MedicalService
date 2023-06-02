import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import "../searchDoctor/searchDoctor.css";

import divisions from "../../_data/bd-divisions.json";
import districts from "../../_data/bd-districts.json";
import upazilas from "../../_data/bd-upazilas.json";
import hospitals from "../../_data/hospitals.json";
import { IMAGE_URL } from "../../config";
import { NavLink } from "react-router-dom";
import { BiRightArrowAlt } from "react-icons/bi";

const initialState = {
  hospital: "",
  division: "",
  district: "",
  upazila: "",
  department: "",
};
const SearchDoctor = ({ handelSearch, items }) => {
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
    <section id="searchDoctor">
      <Container>
        <Row>
          <Col lg="12">
            <div className="title">
              <h2>Search Doctor</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                dolorem omnis iure enim totam voluptatem amet vel reprehenderit
                quia laudantium?
              </p>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col lg="8">
            <div className="">
              {/* <label htmlFor="">Select your Division</label> */}
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label>Hospital</Form.Label>
                  <Form.Select
                    defaultValue=""
                    name="division"
                    onChange={handelChange}
                  >
                    <option>Choose...</option>
                    {hospitals &&
                      hospitals?.map((hospital) => (
                        <option value={hospital?.id}>{hospital?.name}</option>
                      ))}
                  </Form.Select>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label>Department</Form.Label>
                  <Form.Select
                    defaultValue=""
                    name="department"
                    onChange={handelChange}
                  >
                    <option>Choose...</option>
                    <option value="Medicine">Medicine</option>
                    <option value="Surgery">Surgery</option>
                    <option value="Gynaecology">Gynaecology</option>
                    <option value="Obstetrics">Obstetrics</option>
                    <option value="Paediatrics">Paediatrics</option>
                    <option value="Eye">Eye </option>
                    <option value="Neurology">Neurology</option>
                    <option value="orthopaedics">orthopaedics</option>
                    <option value="Psychiatry">Psychiatry</option>
                    <option value="Cardiology">Cardiology</option>
                  </Form.Select>
                </Form.Group>

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

                <div className=" text-center mt-4">
                  <Button
                    onClick={() => handelSearch(inputs)}
                    className="btn btn-primary"
                  >
                    Search Doctor
                  </Button>
                </div>
              </Row>
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
                    src={`${IMAGE_URL}/users/${doctor?.user?.image}`}
                  />
                  <Card.Body>
                    <div className="btitle">
                      <NavLink
                        to={`/doctorDetails/${doctor?.id}`}
                        className="text-capitalize"
                      >
                        {doctor?.user?.fullName}
                      </NavLink>
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

export default SearchDoctor;
