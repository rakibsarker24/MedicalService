import { useState, useEffect } from "react";
import "../../tablet/tablet.css";
import { Container, Row, Col, Card } from "react-bootstrap";
import axios from "axios";
import { NavLink, useParams } from "react-router-dom";
import Navber from "../../navber/Navber";
import Footer from "../../footer/Footer";
import { IMAGE_URL, route } from "../../../config";

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
          `products?page=1&category=${slug?.split("-")?.at(-1)}`
        );
        setProducts(response?.data?.rows)
        console.log(response, "response");
      } catch (error) {
        console.log(error, "error");
      }
    }
    fetchData();
  }, [slug]);
  console.log(slug, "idid");
  return (
    <>
      <Navber />
      <section id="tablet">
        <Container>
          <Row>
            {products && products.map((item) => (
              <Col lg="3" xs="4" sm="4" md="3" key={item?.id}>
                <Card className="pcard mb-3" style={{ width: "100%" }}>
                  <Card.Img variant="top" src={`${IMAGE_URL}/products/${item.image}`} />
                  <Card.Body>
                    <Card.Title className="text-center">{item?.title}</Card.Title>
                    <Card.Text className="text-center">
                      <label>price</label>
                      <span>{item?.price}</span>
                    </Card.Text>
                    <NavLink to="/addcard" variant="primary">
                      Add to Card
                    </NavLink>
                  </Card.Body>
                </Card>
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
