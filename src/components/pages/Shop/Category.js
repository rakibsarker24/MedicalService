import { useState, useEffect } from "react";
import "../../tablet/tablet.css";
import { Container, Row, Col, Card } from "react-bootstrap";
import axios from "axios";
import { NavLink, useParams } from "react-router-dom";
import Navber from "../../navber/Navber";
import Footer from "../../footer/Footer";
import { IMAGE_URL, route } from "../../../config";
import { useNavigate } from 'react-router-dom';
import { makeSlug } from "../../../utils";


const Category = (props) => {
  const navigate = useNavigate();
  let { slug } = useParams();
  const [constData, setConsData] = useState([]);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

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
        console.log(response, "response");
      } catch (error) {
        console.log(error, "error");
      }
    }
    fetchData();
  }, [slug]);
  console.log(slug, "idid");

  const handelAddToCart = (e, item) => {
    e.preventDefault();
    setCart(item)
    let cartItem = { product: item, quantity: 1, amount: item?.price };
    const carts =
      sessionStorage.getItem("cart") && JSON.parse(sessionStorage.getItem("cart"));
    if (carts === null || carts?.length === 0) {
      sessionStorage.setItem("cart", JSON.stringify([cartItem]));
    } else if (carts?.length > 0) {
      const isInCart = carts.some((cart) => cart?.product?.id === item.id);
      let cartItems = [];
      if (isInCart) {
        cartItems = carts?.map((cart) => {
          if (cart.product?.id === item.id) {
            return { ...cart, quantity: cart.quantity + 1 };
          } else {
            return cart;
          }
        });
      } else {
        cartItems = [...carts, cartItem];
      }

      sessionStorage.setItem("cart", JSON.stringify(cartItems));
    }

    navigate(`/category/${makeSlug(item?.category?.name)}-${item?.category?.id}/${makeSlug(item?.title)}-${item?.id}`);

  };
  return (
    <>
      <Navber />
      <section id="tablet">
        <Container>
          <Row>
            {products &&
              products.map((item) => (
                <Col lg="3" xs="4" sm="4" md="3" key={item?.id}>
                  <Card className="pcard mb-3" style={{ width: "100%" }}>
                    <Card.Img
                      variant="top"
                      src={`${IMAGE_URL}/products/${item.image}`}
                    />
                    <Card.Body>
                      <Card.Title className="text-center">
                        {item?.title}
                      </Card.Title>
                      <Card.Text className="text-center">
                        <label>price</label>
                        <span>{item?.price}</span>
                      </Card.Text>
                      <NavLink
                        to="/addcard"
                        onClick={(e) => handelAddToCart(e, item)}
                        variant="primary"
                      >
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
