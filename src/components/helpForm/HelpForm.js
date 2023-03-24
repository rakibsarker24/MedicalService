import React, { useEffect, useState } from "react";
import "../helpForm/helpform.css";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  FloatingLabel,
} from "react-bootstrap";
import { TbPlayerPlay } from "react-icons/tb";
import { route } from "../../config";
import divisions from "../../_data/bd-divisions.json";
import districts from "../../_data/bd-districts.json";
import upazilas from "../../_data/bd-upazilas.json";

const initialInputs = {};

const HelpForm = () => {
  const [inputs, setInputs] = useState(initialInputs);
  const [doctors, setDoctors] = useState([]);
  const handelChange = (name, value) => {
    setInputs((prevState) => ({ ...prevState, [name]: value }));
  };

  useEffect(() => {
    async function fetchDoctor() {
      try {
        const response = await route?.get("doctors?page=1");
        console.log(response, "response");
        setDoctors(response?.data?.rows);
      } catch (error) {
        console.log(error, "error");
      }
    }
    fetchDoctor();
  }, []);
  const handelSubmit = async (e) => {
    e.preventDefault();
    console.log(inputs, "inputs");
    if (!Object.keys(inputs)?.length) {
      return;
    }
    try {
      const response = await route?.post("appointments", inputs);
      setInputs(initialInputs);
      console.log(response, "response");
    } catch (error) {
      console.log(error, "error");
    }
  };
  return (
    <section id="helpForm">
      <Container>
        <Row>
          <Col lg="6">
            <div className="image">
              <img src="images/re.jpg" alt="images" />
            </div>
          </Col>
          <Col lg="6">
            <div className="items">
              <p>Make in Appointment</p>
              <h2>
                Contact us for any medical help and fill out an appointment
                form.
              </h2>
            </div>
            <div className="itemform">
              <Form onSubmit={handelSubmit} method="post">
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

                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>Select Department</Form.Label>
                    <Form.Select
                      defaultValue="Choose..."
                      name="department"
                      onChange={({ target }) =>
                        handelChange(target?.name, target?.value)
                      }
                    >
                      <option>Choose...</option>
                      <option value="Dermatologists">Dermatologists</option>
                      <option value="Endocrinologists">Endocrinologists</option>
                      <option value="Anesthesiologists">
                        Anesthesiologists
                      </option>
                      <option value="Cardiologists">Cardiologists</option>
                      <option value="Rectal Surgeons">Rectal Surgeons</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>Select Doctor</Form.Label>
                    <Form.Select
                      defaultValue="Choose..."
                      name="doctorId"
                      onChange={({ target }) =>
                        handelChange(target?.name, target?.value)
                      }
                    >
                      <option>Choose...</option>
                      {doctors &&
                        doctors?.map((doctor) => (
                          <option value={doctor?.id}>{doctor?.fullName}</option>
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
                        onChange={({ target }) =>
                          handelChange(target?.name, target?.value)
                        }
                        value="Male"
                        type="radio"
                        label="Male"
                        name="gender"
                        id="formHorizontalRadios1"
                      />
                      <Form.Check
                        type="radio"
                        label="Female"
                        value="Female"
                        name="gender"
                        id="formHorizontalRadios2"
                        onChange={({ target }) =>
                          handelChange(target?.name, target?.value)
                        }
                      />
                      <Form.Check
                        type="radio"
                        label="Others"
                        value="Other"
                        name="gender"
                        id="formHorizontalRadios3"
                        onChange={({ target }) =>
                          handelChange(target?.name, target?.value)
                        }
                      />
                    </Col>
                  </Form.Group>
                </fieldset>

                <FloatingLabel controlId="floatingTextarea2" label="Comments">
                  <Form.Control
                    as="textarea"
                    placeholder="Leave a comment here"
                    style={{ height: "100px" }}
                  />
                </FloatingLabel>

                <Button className="mt-3" variant="primary" type="submit">
                  Create Appointment
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HelpForm;
