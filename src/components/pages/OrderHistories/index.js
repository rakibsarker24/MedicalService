import React, { useEffect, useState } from "react";
import "./style.css";
import Accordion from "react-bootstrap/Accordion";
import { IMAGE_URL, authUser, route } from "../../../config";
import { Col, Row } from "react-bootstrap";

const OrderHistories = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    getOrders();
  }, []);

  const getOrders = async () => {
    try {
      const response = await route?.get(
        `orders?page=1&userId=${authUser()?.id}`
      );
      console.log(response, "response");
      response?.data?.rows && setOrders(response.data?.rows);
    } catch (error) {
      console.log("Error getting orders", error);
    }
  };
  return (
    <div>
      <Accordion defaultActiveKey="0">
        {orders && orders?.length > 0 && (
          <>
            {orders?.map((order, key) => (
              <Accordion.Item eventKey={key ?? 0}>
                <Accordion.Header>
                  <div className="d-flex justify-content-between w-100 align-items-center">
                    <div>
                      <h5>Order #{key + 1}</h5>
                      <p className="m-0">
                        <strong>Status: </strong>
                        <span className="text-capitalize">
                          {" "}
                          {order?.status}
                        </span>
                      </p>
                    </div>
                    <h5 className="m-0 me-3">
                      <strong>Trans ID:</strong> {order?.bkash_trans_id}
                    </h5>
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                  <div className="card">
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
                            </tr>
                          </thead>
                          <thead>
                            {order?.order_items &&
                            order?.order_items?.length > 0
                              ? order?.order_items?.map((item, index) => (
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
                                    <td>Tk {item?.quantity * item?.price}</td>
                                  </tr>
                                ))
                              : null}
                          </thead>
                        </table>
                      </Col>
                    </Row>
                    <div className="row d-flex justify-content-center">
                      <div className="col-12">
                        <ul id="progressbar" className="text-center">
                          <li className={`active step0`}></li>
                          {/* ${
                              [
                                "pending",
                                "processing",
                                "waiting",
                                "shipped",
                                "completed",
                              ]?.indexOf(order?.status) !== -1
                                ? "active"
                                : ""
                            } */}
                          <li
                            className={`${
                              [
                                "shipped",
                                "order-en-route",
                                "completed",
                              ]?.indexOf(order?.status) !== -1
                                ? "active"
                                : ""
                            } step0`}
                          ></li>
                          <li
                            className={`${
                              ["order-en-route", "completed"]?.indexOf(
                                order?.status
                              ) !== -1
                                ? "active"
                                : ""
                            }  step0`}
                          ></li>
                          <li
                            className={`${
                              ["completed"]?.indexOf(order?.status) !== -1
                                ? "active"
                                : ""
                            } step0`}
                          ></li>
                        </ul>
                      </div>
                    </div>
                    <div className=" justify-content-between top d-flex">
                      <div className="row d-flex icon-content">
                        <img
                          alt=""
                          className="icon"
                          src={`/images/9nnc9Et.png`}
                        />
                        <div className="d-flex flex-column">
                          <p className="font-weight-bold">
                            Order
                            <br />
                            Processed
                          </p>
                        </div>
                      </div>
                      <div className="row d-flex icon-content">
                        <img
                          alt=""
                          className="icon"
                          src={`/images/u1AzR7w.png`}
                        />
                        <div className="d-flex flex-column">
                          <p className="font-weight-bold">
                            Order
                            <br />
                            Shipped
                          </p>
                        </div>
                      </div>
                      <div className="row d-flex icon-content">
                        <img
                          alt=""
                          className="icon"
                          src={`/images/TkPm63y.png`}
                        />
                        <div className="d-flex flex-column">
                          <p className="font-weight-bold">
                            Order
                            <br />
                            En Route
                          </p>
                        </div>
                      </div>
                      <div className="row d-flex icon-content">
                        <img
                          alt=""
                          className="icon"
                          src={`/images/HdsziHP.png`}
                        />
                        <div className="d-flex flex-column">
                          <p className="font-weight-bold">
                            Order
                            <br />
                            Delivered
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </>
        )}
      </Accordion>
    </div>
  );
};

export default OrderHistories;
