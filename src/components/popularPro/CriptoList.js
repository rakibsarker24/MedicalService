import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ProductCard from "../cards/ProductCard";

const CriptoList = ({ currentPost }) => {
  return (
    <>
      <Container>
        <Row>
          {currentPost.map((item) => (
            <Col lg="3" xs="4" sm="4" md="3" key={item?.id}>
              <ProductCard item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default CriptoList;
