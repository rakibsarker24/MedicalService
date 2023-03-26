import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "../ecommerce-category/ecommerce_category.css";
import { Link } from "react-router-dom";
import { BASE_URL, IMAGE_URL, route } from "../../config";
import { makeSlug } from "../../utils";

const initialInputs = {};

const Ecommerce_category = () => {
  const [categories, setCategories] = useState([]);
  const [filters, setFilters] = useState({});
  const handelSearch = (data) => {
    setFilters(data);
    // console.log(data, "search");
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
        const response = await route?.get(`categories?page=1&${queryParams}`);
        console.log(response, "response");
        setCategories(response?.data?.rows);
      } catch (error) {
        console.log(error, "error");
      }
    }
    fetchData();
  }, [filters]);
  return (
    <section id="e_category">
      <Container>
        {/* <Row>
                    <Col lg='12'>
                       <div className="title">
                       <h2>Choice Catagory</h2>
                       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi dolorem omnis iure enim totam voluptatem amet vel reprehenderit quia laudantium?</p>
                       </div>
                    </Col>
                </Row> */}
        <Row>
          {categories &&
            categories?.map((category) => (
              <Col lg="3" xs="6" md="3" sm="3">
                <Link
                  to={`/category/${makeSlug(category?.name)}-${category?.id}`}
                >
                  <div className="card-content">
                    <img
                      src={`${IMAGE_URL}/categories/${category?.image}`}
                      alt="Pharmacy"
                    />
                    {/* <span><FaNotesMedical/></span> */}
                    <h3>{category?.name} </h3>
                  </div>
                </Link>
              </Col>
            ))}
        </Row>
      </Container>
    </section>
  );
};

export default Ecommerce_category;
