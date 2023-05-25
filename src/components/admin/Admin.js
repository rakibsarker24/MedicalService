import React from 'react'
import '../admin/madmin.css'
import { Container,Row,Col,Button,Form,FloatingLabel,Nav,Tab  } from 'react-bootstrap'
import ProductUpload from '../Upload/productUpload/ProductUpload'
import AddAmbulance from '../Upload/addAmbulance/AddAmbulance'
import AddDoctor from '../Upload/addDoctor/AddDoctor'
import AddDoner from '../Upload/addDoner/AddDoner'
import AddShopSlider from '../Upload/addShopSlider/AddShopSlider'
import AddArtical from '../Upload/addArtical/AddArtical'
import AddBloodSlider from '../Upload/addBloodSlider/AddBloodSlider'
import AddHomeSlider from '../Upload/addHomeSlider/AddHomeSlider'
import AddBloodArtical from '../Upload/addBloodArtical/AddBloodArtical'
import Appointment from '../Upload/appointment/Appointment'


const Admin = () => {
  return (
    <section id='madmin'>
        <Container>
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Row>
                        <Col sm={3}>
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                                <Nav.Link eventKey="first">Product Upload</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Add Ambulance</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">Add Doctor</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="four">Add Doner</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="fifth">Add Artical </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="six">Shop Slider Upload</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="seven">Blood Slider Upload</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="eight">Home Slider Upload</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="nine">Blood Artical Upload</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="ten"> Appointment</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <ProductUpload />
                                </Tab.Pane>

                                <Tab.Pane eventKey="second">
                                    <AddAmbulance />
                                </Tab.Pane>

                                <Tab.Pane eventKey="third">
                                    <AddDoctor />
                                </Tab.Pane>

                                <Tab.Pane eventKey="four">
                                    <AddDoner />
                                </Tab.Pane>

                                <Tab.Pane eventKey="fifth">
                                    <AddArtical />
                                </Tab.Pane>
                                <Tab.Pane eventKey="six">
                                    <AddShopSlider />
                                </Tab.Pane>
                                <Tab.Pane eventKey="seven">
                                    <AddBloodSlider />
                                </Tab.Pane>
                                <Tab.Pane eventKey="eight">
                                    <AddHomeSlider />
                                </Tab.Pane>
                                <Tab.Pane eventKey="nine">
                                    <AddBloodArtical />
                                </Tab.Pane>
                                <Tab.Pane eventKey="ten">
                                    <Appointment />
                                </Tab.Pane>
                                

                            </Tab.Content>
                            
                        </Col>
                    </Row>
                </Tab.Container>
        </Container>
    </section>
  )
}

export default Admin