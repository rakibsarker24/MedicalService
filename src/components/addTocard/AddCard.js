import React, { useEffect, useState } from "react";
import "../addTocard/addCard.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import { AiFillStar } from "react-icons/ai";
import { BsStar } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { IMAGE_URL } from "../../config";

const AddCard = ({ product }) => {
  const [item, setItem] = useState(null);
  const [cartItems, setCartItems] = useState(
    sessionStorage.getItem("cart")
      ? JSON.parse(sessionStorage.getItem("cart"))
      : []
  );

  useEffect(() => {
    console.log("hello");
    setCartItems(
      sessionStorage.getItem("cart") &&
        JSON.parse(sessionStorage.getItem("cart"))
    );
  }, [item]);

  const navigate = useNavigate();
  let handleClick = () => {
    navigate("/purchaseProduct");
  };

  const handelIncrement = (id) => {
    console.log(id, "id");

    const increment = cartItems?.map((item) =>
      item.product.id === product.id
        ? { ...item, quantity: item?.quantity + 1 }
        : item
    );

    sessionStorage.setItem("cart", JSON.stringify(increment));
    setItem((prevState) => prevState + id);
  };
  const handelDecrement = (id) => {
    if (item !== 0 || item > 0) {
      const decrement = cartItems?.map((item) =>
        item.product.id === product.id && item.quantity > 1
          ? { ...item, quantity: item?.quantity - 1 }
          : item
      );
      sessionStorage.setItem("cart", JSON.stringify(decrement));
      setItem((prevState) => prevState - id);
    }
  };


  return (
    <section id="addcard">
      {/* {JSON.stringify(cartItems, "cartItems")} */}
      <Container>
        <Row>
          <Col lg="4" sm="6" md="6">
            <div className="imageitem">
              <div className="main">
                <img
                  src={`${IMAGE_URL}/products/${product.image}`}
                  alt="main Image"
                  style={{ width: "100%" }}
                />
              </div>
              {/* <div className="subimage flex">
                                <div className="item">
                                    <img src="/images/Surgical Mask.png" alt="" />
                                </div>
                                <div className="item">
                                    <img src="/images/Medicine.png" alt="" />
                                </div>
                                <div className="item">
                                    <img src="/images/Pharmacy.png" alt="" />
                                </div>
                        </div> */}
            </div>
          </Col>
          <Col lg="5" sm="6" md="6">
            <div className="allitems">
              <h2>{product?.title}</h2>
              <p>{product?.description}</p>
              {/* <div className="rating">
                            <AiFillStar/>
                            <AiFillStar/>
                            <AiFillStar/>
                            <AiFillStar/>
                            <BsStar/>
                        </div> */}
              <div className="price">
                <label>
                  <strong>Price:</strong>
                  {product?.price}
                </label>
                {/* <span>65$</span> */}
              </div>
              {/* <div className="size">
                            <strong>Size: </strong>
                            <label>M</label>
                            <label>L</label>
                            <label>XL</label>
                        </div> */}
              <div className="add">
                <strong onClick={() => handelDecrement(product?.id)}>-</strong>

                <span>
                  {(cartItems &&
                    cartItems?.find((item) => parseInt(item?.product?.id) === parseInt(product?.id))
                      ?.quantity) ?? 1}
                </span>
                <strong onClick={() => handelIncrement(product?.id)}>+</strong>
              </div>
              <div className="cbtn">
                <Button onClick={handleClick}>Order Now</Button>
              </div>
            </div>
          </Col>
          <Col lg="3">
            <div className="delivery">
              <h2>Delevery Charge:</h2>
              <div className="indhaka">
                <label>In Dhaka City</label>
                <span>Cash on Delevery: 2$</span>
              </div>
              <div className="outdhaka">
                <label>Outsite Dhaka City</label>
                <span>Cash on Delevery: 2$</span>
              </div>
              <hr />
            </div>
            <div className="delivery">
              <p>Retun and Warrenty:</p>
              <div className="list">
                <ul>
                  <li>100% Orginal product</li>
                  <li>Return with 7 Days</li>
                  <li>Not Warrenty</li>
                </ul>
              </div>
              <hr />
            </div>
            <div className="marcent">
              <p>Merchant </p>
              <div className="">
                <span>
                  {" "}
                  <img src="images/bikash.jpg" alt="" />
                </span>
                <span>
                  <img src="images/roket.jpg" alt="" />
                </span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AddCard;
