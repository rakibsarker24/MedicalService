import { useState, useEffect } from "react";
import "../../tablet/tablet.css";
import { Container, Row, Col, Card } from "react-bootstrap";
import axios from "axios";
import { NavLink, useParams } from "react-router-dom";
import Navber from "../../navber/Navber";
import Footer from "../../footer/Footer";
import { IMAGE_URL, route } from "../../../config";
import { useNavigate } from "react-router-dom";
import { makeSlug } from "../../../utils";
import ProductCard from "../../cards/ProductCard";

const Category = (props) => {
  let { slug } = useParams();
  const [constData, setConsData] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function rakib() {
      let data = await axios.get("https://fakestoreapi.com/products");
      setConsData(data.data);
      // console.log(data.data)
    }
    rakib();

    async function fetchData() {
      try {
        const response = await route?.get(
          `products?page=1&categoryId=${slug?.split("-")?.at(-1)}`
        );
        setProducts(response?.data?.rows);
      } catch (error) {
        console.log(error, "error");
      }
    }
    fetchData();
  }, [slug]);

  return (
    <>
      <Navber />
      <section id="tablet">
        <Container>
          <Row>
            {products &&
              products.map((item) => (
                <Col lg="3" xs="4" sm="4" md="3" key={item?.id}>
                  <ProductCard item={item} />
                </Col>
              ))}
          </Row>
        </Container>
      </section>
      <Footer />
    </>
  );
};

export default Category;
