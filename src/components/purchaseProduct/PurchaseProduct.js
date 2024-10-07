import React, { useState } from "react";
import {
  Container,
  Col,
  Row,
  Button,
  FloatingLabel,
  Form,
} from "react-bootstrap";
import "../purchaseProduct/purchaseProduct.css";
import { RxCross2 } from "react-icons/rx";
import { NavLink, useNavigate } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";
import { IMAGE_URL, authUser, route } from "../../config";
import { toast } from "react-toastify";

const PurchaseProduct = ({ products, handelRemove }) => {
  const navigate = useNavigate();
  const totalPrice = products
    ?.map((item) => item?.quantity * item.amount)
    .reduce((prev, next) => prev + next, 0);

  const [transId, setTransId] = useState("");
  const [errorTransId, setErrTransId] = useState("");

  const [note, setNote] = useState("");

  const [address, setAddress] = useState("");
  const [errorAddress, setErrAddress] = useState("");

  let handleSubmit = (e) => {
    e.preventDefault();

    let validForm = true;

    //password
    if (!transId) {
      setErrTransId("Transition id required");
      validForm = false;
    }

    if (!address) {
      setAddress("Address required");
      validForm = false;
    }

    if (validForm) {
      handelConfirmOrder();
    }
  };

  const handelConfirmOrder = async () => {
    // alert("confirm");
    // return;
    if (!authUser()) {
      navigate("/login");
    }

    const data = {
      userId: authUser()?.id,
      items: products,
      price: totalPrice,
      transId: transId,
      address: address,
      note: note,
    };

    // console.log(data)
    // return ;

    try {
      const response = await route?.post("orders", data);
      console.log(response, "response");
      toast.success(response?.data?.message);
      sessionStorage.removeItem("cart");
      navigate("/");
    } catch (error) {
      toast.error("Please try again");
      console.log(error, "error");
    }
    console.log("confirm order");
  };

  return (
    <>
      <section id="purchaseProduct">
        <Container className="mt-3">
          {/* {JSON.stringify(products)} */}
          <Row>
            <Col>
              <table className="table border">
                <thead>
                  <tr>
                    <td>Image</td>
                    <td>Title</td>
                    <td>Price</td>
                    <td>Quantity</td>
                    <td>Total</td>
                    <td>Action</td>
                  </tr>
                </thead>
                <thead>
                  {products && products?.length > 0
                    ? products?.map((item, index) => (
                        <tr>
                          <td>
                            <img
                              width="50"
                              alt={item?.product?.title}
                              src={`${IMAGE_URL}/products/${item?.product?.image}`}
                            />
                          </td>
                          <td>{item?.product?.title}</td>
                          <td>Tk {item?.product?.price}</td>
                          <td>{item?.quantity}</td>
                          <td>Tk {item?.quantity * item?.amount}</td>
                          <td>
                            <Button
                              className="btn-danger"
                              onClick={() => handelRemove(item?.product?.id)}
                            >
                              <FaTrashAlt className="nicon" />
                            </Button>
                          </td>
                        </tr>
                      ))
                    : null}
                </thead>
              </table>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-5 mt-5" style={{ backgroundColor: "#f7f7f7" }}>
        <Container>
          <Row>
            <Col>
              <div className="text-center">
                <h1 className="pb-4">How To Pay</h1>
              </div>
              <div className="text-center">
                <img className="img-fluid" alt="" src={`/images/bkash.png`} />
              </div>
            </Col>
            <Col>
              <div className="border rounded-2 p-3">
                <Form onSubmit={() => {}} method="post">
                  <Row className="mb-3">
                    <div className="text-center">
                      <h1
                        style={{ color: "#3498db", borderColor: "#3498db" }}
                        className="border d-inline-block p-2 rounded-1"
                      >
                        Tk {totalPrice}
                      </h1>
                    </div>
                    <Row>
                      <Col sm="12" className="mt-2">
                        <Form.Group as={Col} controlId="formGridEmail">
                          <Form.Label>bKash Transition ID</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Transition ID"
                            name="transId"
                            onChange={({ target }) => setTransId(target?.value)}
                          />

                          {errorTransId ? (
                            <Form.Text className="text-danger">
                              {errorTransId}
                            </Form.Text>
                          ) : (
                            ""
                          )}
                        </Form.Group>
                      </Col>
                      <Col sm="12" className="mt-2">
                        <Form.Group as={Col} controlId="formGridEmail">
                          <Form.Label>Shipping Address</Form.Label>
                          <Form.Control
                            as="textarea"
                            placeholder="Full address"
                            name="transId"
                            onChange={({ target }) => setAddress(target?.value)}
                          />

                          {errorAddress ? (
                            <Form.Text className="text-danger">
                              {errorAddress}
                            </Form.Text>
                          ) : (
                            ""
                          )}
                        </Form.Group>
                      </Col>
                      <Col sm="12" className="mt-2">
                        <Form.Group as={Col} controlId="formGridEmail">
                          <Form.Label>Note</Form.Label>
                          <Form.Control
                            as="textarea"
                            placeholder="If any query"
                            name="note"
                            onChange={({ target }) => setNote(target?.value)}
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                  </Row>

                  {products && products?.length > 0 && (
                    <Button
                      onClick={handleSubmit}
                      className="btn-success"
                      variant="primary"
                      type="submit"
                    >
                      Confirm
                    </Button>
                  )}
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default PurchaseProduct;
