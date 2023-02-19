import React from 'react'
import '../addTocard/addCard.css'
import { Container,Row,Col,Button } from 'react-bootstrap'
import { AiFillStar } from 'react-icons/ai';
import { BsStar } from 'react-icons/bs';

const  AddCard= () => {
  return (
    <section id='addcard'>
        <Container>
            <Row>
                <Col lg='4' >
                    <div className="imageitem">
                        <div className="main">
                            <img src="images/Hand Gloves.png" alt="main Image" />
                        </div>
                        <div className="subimage flex">
                                <div className="item">
                                    <img src="images/Surgical Mask.png" alt="" />
                                </div>
                                <div className="item">
                                    <img src="images/Medicine.png" alt="" />
                                </div>
                                <div className="item">
                                    <img src="images/Pharmacy.png" alt="" />
                                </div>
                        </div>
                    </div>
                </Col>
                <Col lg='5' >
                    <div className="allitems">
                        <h2>Hand Gloves</h2>
                         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, doloremque. Reiciendis sunt ea asperiores minima quisquam atque repellat totam quam!</p>
                        <div className="rating">
                            <AiFillStar/>
                            <AiFillStar/>
                            <AiFillStar/>
                            <AiFillStar/>
                            <BsStar/>
                        </div>
                        <div className="price">
                            <label><strong>Price:</strong> 55$</label>
                            {/* <span>65$</span> */}
                        </div>
                        <div className="size">
                            <strong>Size: </strong>
                            <label>M</label>
                            <label>L</label>
                            <label>XL</label>
                        </div>
                        <div className="color">
                            <strong>Color: </strong>
                            <label></label>
                            <label></label>
                            <label></label>
                        </div>
                        <div className="add">
                            <strong>+</strong>
                            <span>1</span>
                            <strong>-</strong>
                        </div>
                        <div className="cbtn">
                            <Button>Order Now</Button>
                        </div>
                    </div>
                </Col>
                <Col lg='3' >
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
                    </div>
                    <hr />
                    <div className="delivery">
                            <p>Retun and Warrenty:</p>
                            <div className="list">
                                <ul>
                                    <li>100% Orginal product</li>
                                    <li>Return with 7 Days</li>
                                    <li>Not Warrenty</li>
                                </ul>
                            </div>
                    </div>
                    <div className="marcent">
                            <p>Merchant </p>
                            <div className="">
                                <span>Bikas</span>
                                <span>Nogot</span>
                                <span>Visa Card</span>
                            </div>
                           
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default AddCard