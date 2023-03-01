import React from 'react'
import { Container,Col,Row } from 'react-bootstrap'
import '../purchaseProduct/purchaseProduct.css'
import { RxCross2 } from 'react-icons/rx';
import { NavLink } from 'react-router-dom';

const PurchaseProduct = () => {
  return (
    <>
        <section id='purchaseProduct'>
            <Container>
                <Row className='bgcolor'>
                    <Col lg='3' xs='3' sm='3' md='3'>
                        <div className=" flex">
                            <p>Product</p>
                        </div>
                    </Col>
                    <Col lg='3' xs='3' sm='3' md='3'>
                        <div className="">
                            <p>Price</p>
                        </div>
                    </Col>
                    <Col lg='3' xs='3' sm='3' md='3'>
                        <div className="">
                            <p>Quantity</p>
                        </div>
                    </Col>
                    <Col lg='3' xs='3' sm='3' md='3'>
                        <div className="">
                            <p>Totoal</p>
                        </div>
                    </Col>
                </Row>

                <Row className='my-3 rows'>
                    <Col lg='3' xs='3' sm='3' md='3'>
                        <div className="product flex">
                            <span><RxCross2/></span>
                            <img src="images/Nutritions.png" alt="" />
                            <p>Product Name</p>
                        </div>
                    </Col>
                    <Col lg='3' xs='3' sm='3' md='3'>
                        <div className="price">
                            <p>454 Tk</p>
                        </div>
                    </Col>
                    <Col lg='3' xs='3' sm='3' md='3'>
                        <div className="quantity flex">
                            <button>+</button>
                            <p>0</p>
                            <button>-</button>
                        </div>
                    </Col>
                    <Col lg='3' xs='3' sm='3' md='3'>
                        <div className="totoal">
                            <p>454 Tk</p>
                        </div>
                    </Col>
                </Row>

                <Row className='my-3 rows'>
                    <Col lg='3' xs='3' sm='3' md='3'>
                        <div className="product flex">
                            <span><RxCross2/></span>
                            <img src="images/Nutritions.png" alt="" />
                            <p>Product Name</p>
                        </div>
                    </Col>
                    <Col lg='3'  xs='3' sm='3' md='3'>
                        <div className="price">
                            <p>454 Tk</p>
                        </div>
                    </Col>
                    <Col lg='3' xs='3' sm='3' md='3'>
                        <div className="quantity flex">
                            <button>+</button>
                            <p>0</p>
                            <button>-</button>
                        </div>
                    </Col>
                    <Col lg='3' xs='3' sm='3' md='3'>
                        <div className="totoal">
                            <p>454 Tk</p>
                        </div>
                    </Col>
                </Row>

                <Row className='justify-content-end'>
                    <Col lg='3' xs='8' sm='6' md='4' className='mt-3'>
                        <div className="subtotal">
                            <p>Subtotoal : </p>
                        </div>
                        <div className="subtotal">
                            <p>Totoal (Delevery Charge) : </p>
                        </div>
                    </Col>
                    <Col lg='2' xs='3' sm='2' md='2' className='mt-3'>
                        <div className="items">
                            <span>1100 Tk</span>
                        </div>
                        <div className="items">
                            <span>1220 Tk</span>
                        </div>
                    </Col>
                </Row>

                <Row className='justify-content-end'>
                    <Col lg='5' xs='11' sm='8' md='6' className='mt-3'>
                        <div className="link">
                            <NavLink>CheckOut</NavLink>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    </>
  )
}

export default PurchaseProduct