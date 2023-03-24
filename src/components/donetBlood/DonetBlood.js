import React, { useState } from "react";
import "../donetBlood/donetBlood.css";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { authUser, route } from "../../config";
import divisions from "../../_data/bd-divisions.json";
import districts from "../../_data/bd-districts.json";
import upazilas from "../../_data/bd-upazilas.json";

const initialInputs = {};

const DonetBlood = () => {
  const [inputs, setInputs] = useState(initialInputs);
  const handelChange = (name, value) => {
    setInputs((prevState) => ({ ...prevState, [name]: value }));
  };

  const handelSubmit = async (e) => {
    e.preventDefault();
    console.log(inputs, "inputs");
    if (!Object.keys(inputs)?.length) {
      return;
    }
    try {
      const response = await route?.post("blooddonors", {
        ...inputs,
        userId: authUser()?.id,
      });
      setInputs(initialInputs);
      console.log(response, "response");
    } catch (error) {
      console.log(error, "error");
    }
  };
  return (
    <section id="donerForm">
      <Container>
        <Row>
          <Col lg="6">
            <div className="image">
              <img src="images/bd1.jpg" alt="images" />
            </div>
          </Col>
          <Col lg="6">
            <div className="items">
              <p>Fillup Doner Form</p>
              <h2>
                Contact us for any medical help and fill out an appointment
                form.
              </h2>
            </div>
            <div className="itemform">
              <Form
                onSubmit={handelSubmit}
                method="post"
                enctype="multipart/form-data"
              >
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="full name"
                      name="fullName"
                      onChange={({ target }) =>
                        handelChange(target?.name, target?.value)
                      }
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      name="email"
                      onChange={({ target }) =>
                        handelChange(target?.name, target?.value)
                      }
                    />
                  </Form.Group>
                </Row>
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label> Age</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="age"
                      name="age"
                      onChange={({ target }) =>
                        handelChange(target?.name, target?.value)
                      }
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="phone number"
                      name="contactNumber"
                      onChange={({ target }) =>
                        handelChange(target?.name, target?.value)
                      }
                    />
                  </Form.Group>
                </Row>

                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>Blood Group</Form.Label>
                    <Form.Select
                      defaultValue="Choose..."
                      name="bloodGroup"
                      onChange={({ target }) =>
                        handelChange(target?.name, target?.value)
                      }
                    >
                      <option>Choose...</option>
                      <option value="A+">A+</option>
                      <option value="A-">A-</option>
                      <option value="B-">B-</option>
                      <option value="B+">B+</option>
                      <option value="AB">AB-</option>
                      <option value="AB">AB+</option>
                      <option value="O+">O+</option>
                      <option value="O-">O-</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridState">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>
                        {" "}
                        Last Blood Donetion Date <span>( if you donet )</span>
                      </Form.Label>
                      <Form.Control
                        type="date"
                        name="lastDonateDate"
                        onChange={({ target }) =>
                          handelChange(target?.name, target?.value)
                        }
                      />
                    </Form.Group>
                  </Form.Group>
                </Row>

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
                            <option value={district?.id}>
                              {district?.name}
                            </option>
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
                            (upazila) =>
                              upazila?.district_id === inputs?.district
                          )
                          .map((upazila) => (
                            <option value={upazila?.id}>{upazila?.name}</option>
                          ))}
                    </Form.Select>
                  </Form.Group>
                </Row>

                <fieldset>
                  <Form.Group as={Row} className="mb-3">
                    <Form.Label as="legend" column sm={2}>
                      Gender
                    </Form.Label>
                    <Col sm={10}>
                      <Form.Check
                        type="radio"
                        label="Male"
                        name="gender"
                        onChange={({ target }) =>
                          handelChange(target?.name, target?.value)
                        }
                        id="formHorizontalRadios1"
                      />
                      <Form.Check
                        type="radio"
                        label="Female"
                        name="gender"
                        onChange={({ target }) =>
                          handelChange(target?.name, target?.value)
                        }
                        id="formHorizontalRadios2"
                      />
                      <Form.Check
                        type="radio"
                        label="Others"
                        name="gender"
                        onChange={({ target }) =>
                          handelChange(target?.name, target?.value)
                        }
                        id="formHorizontalRadios3"
                      />
                    </Col>
                  </Form.Group>
                </fieldset>

                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default DonetBlood;
