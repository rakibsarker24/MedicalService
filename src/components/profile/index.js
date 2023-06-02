import React from "react";
import "../admin/madmin.css";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  FloatingLabel,
  Nav,
  Tab,
  ListGroup,
  Table,
} from "react-bootstrap";
import ProductUpload from "../Upload/productUpload/ProductUpload";
import AddAmbulance from "../Upload/addAmbulance/AddAmbulance";
import AddDoctor from "../Upload/addDoctor/AddDoctor";
import AddDoner from "../Upload/addDoner/AddDoner";
import AddShopSlider from "../Upload/addShopSlider/AddShopSlider";
import AddArtical from "../Upload/addArtical/AddArtical";
import AddBloodSlider from "../Upload/addBloodSlider/AddBloodSlider";
import AddHomeSlider from "../Upload/addHomeSlider/AddHomeSlider";
import AddBloodArtical from "../Upload/addBloodArtical/AddBloodArtical";
import Appointment from "../Upload/appointment/Appointment";
import { authUser } from "../../config";
import Message from "./message";
import Appointments from "./appointments";

const Profile = () => {
  return (
    <section id="madmin">
      <Container>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="first">My info</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Appointments</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  {authUser() && (
                    <>
                      <ListGroup>
                        <ListGroup.Item>
                          Name: {authUser()?.username}
                        </ListGroup.Item>
                        <ListGroup.Item>
                          Email: {authUser()?.email}
                        </ListGroup.Item>
                        {/* <ListGroup.Item>Phone: {authUser()?.contactNumber}</ListGroup.Item> */}
                        <ListGroup.Item>
                          Address: {authUser()?.address}
                        </ListGroup.Item>
                      </ListGroup>
                    </>
                  )}
                </Tab.Pane>

                <Tab.Pane eventKey="second">
                  <Appointments />
                  {/* <Message/> */}
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
  );
};

export default Profile;
