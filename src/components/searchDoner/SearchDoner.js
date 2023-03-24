import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "../searchDoner/searchDoner.css";
import DonerCard from "../donerCard/DonerCard";
import { route } from "../../config";
import divisions from "../../_data/bd-divisions.json";
import districts from "../../_data/bd-districts.json";
import upazilas from "../../_data/bd-upazilas.json";

const initialState = {
  division: "",
  district: "",
  upazila: "",
};

const SearchDoner = () => {
  const [donors, setDonors] = useState([]);
  const [inputs, setInputs] = useState(initialState);
  const [filters, setFilters] = useState({});

  const handelChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setInputs((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  useEffect(() => {
    let queryParams = new URLSearchParams();

    if (Object.keys(filters)?.length) {
      Object.keys(filters).forEach((filter) => {
        if (filters[filter] !== "") {
          queryParams.append(filter, filters[filter]);
        }
      });
    }

    async function fetchData() {
      try {
        const response = await route?.get(`blooddonors?page=1&${queryParams}`);

        console.log(response, "response");
        setDonors(response?.data?.rows);
      } catch (error) {
        console.log(error, "error");
      }
    }
    fetchData();
  }, [filters]);

  const handelSearch = () => {
    setFilters(inputs);
  };

  return (
    <section id="searchDoner">
      <Container>
        <Row>
          <Col lg="12">
            <div className="title">
              <h2>Search Doner</h2>
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
                Search Doner
              </Button>
            </div>
          </Col>
        </Row>
        <div className="">
          <DonerCard items={donors} />
        </div>
      </Container>
    </section>
  );
};

export default SearchDoner;
