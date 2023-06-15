import { useState } from 'react'
import { Container, Row, Col, Button, Form, Alert } from 'react-bootstrap'
import '../registration/registration.css'
import { Link, useNavigate } from 'react-router-dom'
import NavTop from '../navTop/NavTop'
import Navber from '../navber/Navber'
import Footer from '../footer/Footer'
import axios from 'axios'
import { API_URL, route } from '../../config'
import { toast } from 'react-toastify'

const Registration = () => {
    const navigate = useNavigate();


    let [name, setName] = useState("")
    let [errname, setErrName] = useState("")

    let [email, setEmail] = useState("")
    let [erremail, setErrEmail] = useState("")

    let [password, setPassword] = useState("")
    let [errpassword, setErrPassword] = useState("")

    let [cpassword, setCpassword] = useState("")
    let [errcpassword, setErrCpassword] = useState("")

    let [address, setAddress] = useState("")
    let [erraddress, setErrAddress] = useState("")

    let [contactNumber, setContactNumber] = useState("")
    let [errcontactnumber, setErrContactNumber] = useState("")    
    
    let [dob, setDob] = useState("")
    let [errdob, setErrdob] = useState("")



    let handleSubmit = (e) => {
        e.preventDefault()

        let valid = true;
        // username
        if (!name) {
            setErrName("enter your name")
            valid = false;
        } else {
            if (name.length <= 2) {
                setErrName("name must be grater than 2")
                valid = false;
            }
        }
        // address
        if (!address) {
            setErrAddress("enter your address")
            valid = false;
        } else {
            if (address.length <= 3) {
                setErrAddress("name must be grater than 3")
                valid = false;
            }
        }


        // email
        if (!email) {
            setErrEmail("email is required")
            valid = false;
        } else {
            if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
                setErrEmail("valid email is required")
                valid = false;
            }
        }

        if (!contactNumber) {
            setErrContactNumber("Contact number is required")
            valid = false;
        }
        
        if (!dob) {
            setErrdob("Date of birth is required")
            valid = false;
        }


        //password
        if (!password) {
            setErrPassword("password is required")
            valid = false;
        } else {
            if (!/^(?=.*[a-z])/.test(password)) {
                setErrPassword("password must contain a lowercase")
                valid = false;
            } else if (!/^(?=.*[A-Z])/.test(password)) {
                setErrPassword("password must contain a uppercase")
                valid = false;
            } else if (!/^(?=.*[0-9])/.test(password)) {
                setErrPassword("password must contain a number")
                valid = false;
            } else if (!/^(?=.{6,})/.test(password)) {
                setErrPassword("password have atleast 6 character")
                valid = false;
            }
        }

        //cpassword
        if (!cpassword) {
            setErrCpassword("password is requied")
            valid = false;
        } else {
            if (password != cpassword) {
                setErrCpassword("password can't match")
                valid = false;
            }
        }

        if (valid) {
            handelRegistration()
        }

    }

    const handelRegistration = async () => {
        let formData = new FormData();
        formData.append('username', name);
        formData.append('email', email);
        formData.append('dob', dob);
        formData.append('contactNumber', contactNumber);
        formData.append('address', address);
        formData.append('password', password);

        try {
            const response = await route.post(`/auth/sign-up`, formData);
            localStorage.setItem('token', JSON.stringify(`Bearer ${response?.data?.token}`));
            localStorage.setItem('user', JSON.stringify(response?.data?.user));
            toast.success(response?.data?.message)
            navigate('/')
            console.log(response, 'response')
        } catch (error) {
            console.log(error, 'error')
            toast.error(error.response?.data?.message)
        }

    }



    return (
        <>
            {/* <NavTop/> */}
            <Navber />
            <section id='registration'>
                <Container>
                    <Row className="justify-content-center">
                        <Col lg='4' sm='6' xs='10' md='5' className="body">
                            <Alert>
                                <h2 className='text-center'>Registration</h2>
                            </Alert>
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>User Name</Form.Label>
                                    <Form.Control type="text" placeholder="user name" value={name} onChange={(e) => { setName(e.target.value) }} />
                                    {errname ?
                                        <Form.Text className="text-muted red">
                                            {errname}
                                        </Form.Text>
                                        :
                                        ""
                                    }
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="enter email" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                                    {erremail ?
                                        <Form.Text className="text-muted red">
                                            {erremail}
                                        </Form.Text>
                                        :
                                        ""
                                    }
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Contact Number</Form.Label>
                                    <Form.Control type="email" placeholder="enter contact number" value={contactNumber} onChange={(e) => { setContactNumber(e.target.value) }} />
                                    {errcontactnumber ?
                                        <Form.Text className="text-muted red">
                                            {errcontactnumber}
                                        </Form.Text>
                                        :
                                        ""
                                    }
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Your Address</Form.Label>
                                    <Form.Control type="email" placeholder="enter address" value={address} onChange={(e) => { setAddress(e.target.value) }} />
                                    {erraddress ?
                                        <Form.Text className="text-muted red">
                                            {erraddress}
                                        </Form.Text>
                                        :
                                        ""
                                    }
                                    
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Date of Birth <small>(It's remember for reset password)</small></Form.Label>
                                    <Form.Control type="date" placeholder="enter date of birth" value={dob} onChange={(e) => { setDob(e.target.value) }} />
                                    {errdob ?
                                        <Form.Text className="text-muted red">
                                            {errdob}
                                        </Form.Text>
                                        :
                                        ""
                                    }
                                </Form.Group>



                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Create Password</Form.Label>
                                    <Form.Control type="password" placeholder="creative password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                                    {errpassword ?
                                        <Form.Text className="text-muted red">
                                            {errpassword}
                                        </Form.Text>
                                        :
                                        ""
                                    }
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Confrim Password</Form.Label>
                                    <Form.Control type="password" placeholder="confrim password" value={cpassword} onChange={(e) => { setCpassword(e.target.value) }} />
                                    {errcpassword ?
                                        <Form.Text className="text-muted red">
                                            {errcpassword}
                                        </Form.Text>
                                        :
                                        ""
                                    }
                                </Form.Group>

                                <Button variant="primary" type="submit" onClick={handleSubmit}>
                                    Submit
                                </Button>
                                <p>Have Your already Account? <Link to={'/login'}>Login</Link></p>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </section>
            <Footer />
        </>
    )
}

export default Registration