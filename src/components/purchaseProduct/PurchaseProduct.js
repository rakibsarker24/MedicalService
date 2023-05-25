import React, { useState } from "react";
import { Container, Col, Row, Button } from "react-bootstrap";
import "../purchaseProduct/purchaseProduct.css";
import { RxCross2 } from "react-icons/rx";
import { NavLink, useNavigate } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";
import { authUser, route } from "../../config";

const PurchaseProduct = ({ products, handelRemove }) => {
  const navigate = useNavigate();
  const totalPrice = products
    .map((item) => item?.quantity * item.amount)
    .reduce((prev, next) => prev + next, 0);

  const handelConfirmOrder = async () => {
    if (!authUser()) {
      navigate("/login");
    }
    const data = {
      userId: authUser()?.id,
      items: products,
      price: totalPrice,
    };

    // console.log(data)
    // return ;

    try {
      const response = await route?.post("orders", data);
      console.log(response, "response");
      alert(response?.data?.message);
    } catch (error) {
      console.log(error, "error");
    }
    console.log("confirm order");
  };
  return (
    <>
      <section id="purchaseProduct">
        <Container>
          {/* {JSON.stringify(products)} */}
          <table className="table border">
            <thead>
              <tr>
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
              <tr>
                <td align="right" colSpan={"3"}>
                  Total:
                </td>
                <td>Tk {totalPrice}</td>
                {products && products?.length > 0 && (
                  <td>
                    <Button
                      onClick={handelConfirmOrder}
                      className="btn-success"
                    >
                      Confirm Order
                    </Button>
                  </td>
                )}
              </tr>
            </thead>
          </table>
        </Container>
      </section>
    </>
  );
};

export default PurchaseProduct;
