import { useState } from "react";
import "../navber/navber.css";
import {
  Container,
  Row,
  Col,
  Nav,
  Navbar,
  NavDropdown,
  Offcanvas,
  Button,
  Dropdown,
} from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaFacebookMessenger } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import PurchaseProduct from "../purchaseProduct/PurchaseProduct";
import { authUser, route } from "../../config";

const Navber = ({ css = null }) => {
  const navigate = useNavigate();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    if (!authUser()) {
      navigate("/login", { replace: true });
    }
    navigate("/purchaseProduct");
    // setShow(true)
  };

  const [index, setIndex] = useState(0);

  const products =
    sessionStorage.getItem("cart") &&
    JSON.parse(sessionStorage.getItem("cart"));

  const handelRemove = (productId) => {
    setIndex(productId);
    const items = products?.filter((item) => item?.product?.id !== productId);
    sessionStorage.setItem("cart", JSON.stringify(items));
  };

  const loggedIn =
    !!localStorage.getItem("token") && localStorage.getItem("token") !== null;

  return (
    <>
      <section id="navber" className={`navtop ${css}`}>
        <Container className="container">
          <Row>
            <Col lg="3" xs="5">
              <div className="email">
                <span>
                  <MdEmail />
                </span>
                <label>madico@gmail.com</label>
              </div>
            </Col>
            <Col lg="3" xs="5">
              <div className="email">
                <span>
                  <IoIosCall />
                </span>
                <label>+880-8785646582</label>
              </div>
            </Col>
            <Col lg="6" xs="2">
              <div className="icon">
                <span>
                  <BsFacebook />
                </span>
                <span>
                  <FaFacebookMessenger />
                </span>
              </div>
            </Col>
          </Row>
        </Container>

        {/* <section id='menu'> */}
        <Navbar bg="" expand="lg" className="menu">
          <Container className="container px-0">
            <div className="brandlogo">
              <Link to="/" className="logo">
                <img src="/images/logo.png" alt="logo" />
              </Link>
            </div>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="justify-content-center center my-0">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/appointment">Appointment</NavLink>
                <NavLink to="/doctors">Our Doctor</NavLink>
                <NavDropdown
                  className="mb-0  dropbtn"
                  title="Services"
                  id="basic-nav-dropdown"
                >
                  <NavLink to="/appointment">Appointment</NavLink>
                  <NavLink to="/blood">Blood Bank</NavLink>
                  <NavLink to="/ambulance">Ambulance</NavLink>
                  {/* <NavLink to="/donation">Donation</NavLink> */}
                  <NavDropdown.Divider />
                </NavDropdown>
                <NavLink to="/shop">Shop</NavLink>
                <NavLink to="/blog">Blog</NavLink>
                <NavLink to="/about">Contact</NavLink>
              </Nav>

              <div className="navIcons flex align-items-center">
                {/* //Offcanvas */}
                <Link
                  to="/purchaseProduct"
                  variant="primary"
                  // onClick={handleShow}
                  className="position-relative"
                >
                  {/* cart icon */}
                  <FaShoppingCart className="nicon" />
                  <div className="numcart">
                    <p>
                      {sessionStorage.getItem("cart")
                        ? JSON.parse(sessionStorage.getItem("cart"))?.length
                        : 0}
                    </p>
                  </div>
                </Link>
                <Offcanvas show={show} onHide={handleClose}>
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title>All Cards</Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                    <PurchaseProduct
                      products={products}
                      handelRemove={handelRemove}
                    />
                  </Offcanvas.Body>
                </Offcanvas>

                {/* {authUser() ? (
                  <h4 className="text-capitalize">
                    {authUser()?.username?.at(0)}
                  </h4>
                ) : (
                  <Link to="/login">
                    <MdAccountCircle className="nicon" />
                  </Link>
                )} */}

                {authUser() ? (
                  <Link to="/profile">
                    <h4 className="m-0 text-capitalize px-3 py-2 text-white">
                      {authUser()?.username?.at(0)}
                    </h4>
                  </Link>
                ) : (
                  <Link to="/login">
                    {/* <MdAccountCircle className="nicon" /> */}
                    Login
                  </Link>
                )}

                {/* <Dropdown>
                  <Dropdown.Toggle
                    id="dropdown-button-dark-example1"
                    variant="secondary"
                  >
                  </Dropdown.Toggle>

                  <Dropdown.Menu className="bgbtn">
                    {loggedIn ? (
                      <>
                        <Dropdown.Item>
                          <Link to="/profile">Profile</Link>
                        </Dropdown.Item>

                        <Dropdown.Item>
                          <Button onClick={handelLogout}>Logout</Button>
                        </Dropdown.Item>
                      </>
                    ) : (
                      <>
                     
                      </>
                    )}
                  </Dropdown.Menu>
                </Dropdown> */}
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </section>
    </>
  );
};

export default Navber;
