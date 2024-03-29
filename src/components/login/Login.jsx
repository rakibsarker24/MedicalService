import React, { useState } from 'react'
import '../login/login.css'
import { Container, Row, Col, Button, Form, Alert, Modal } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import NavTop from '../navTop/NavTop'
import Navber from '../navber/Navber'
import Footer from '../footer/Footer'
import { authUser, route } from '../../config'
import { toast } from 'react-toastify'

const Login = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({});
    const [reset, setReset] = useState({
        email: '',
        dob: ''
    });

    const [pass, setPass] = useState({
        pass: '',
        cpass: ''
    });

    let [email, setEmail] = useState("")
    let [erremail, setErrEmail] = useState("")

    let [password, setPassword] = useState("")
    let [errpassword, setErrPassword] = useState("")
    // let [reset, setReset] = useState("")
    const [sshow, setSshow] = useState(false);

    const [show, setShow] = useState(false);
    const handleClose = () => {
        // setSshow(true)
        // setShow(false)
    };
    const handleShow = () => setShow(true);

    const handleCllose = () => setSshow(false);


    let handleSubmit = (e) => {
        e.preventDefault()

        let validForm = true;
        // email
        if (!email) {
            setErrEmail("email is required")
            validForm = false;
        } else {
            if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
                setErrEmail("valid email is required")
                validForm = false;
            }
        }

        //password
        if (!password) {
            setErrPassword("password is required")
            validForm = false;
        }

        if (validForm) {
            handelLogin()
        }

    }

    const handelLogin = async () => {
        let formData = new FormData();
        formData.append('patient', email);
        formData.append('email', email);
        formData.append('password', password);

        try {
            const response = await route.post(`/auth/sign-in`, formData);
            localStorage.setItem('token', JSON.stringify(`Bearer ${response?.data?.token}`));
            localStorage.setItem('user', JSON.stringify(response?.data?.user));
            toast.success(response?.data?.message)
            navigate('/')
            console.log(response, 'response')
        } catch (error) {
            console.log(error.response, 'error')
            toast.error(error.response?.data?.message)
        }

    }

    const handelReset = async () => {
        try {
            const response = await route?.post('/auth/verify', { email: reset?.email, dob: reset?.dob })
            console.log(response, 'reset')
            setUser(response?.data?.user)
            toast.success(response?.data?.message)
            setSshow(true)
        } catch (error) {
            toast.error(error?.data?.message)
        }
    }

    const resetPassword = async () => {
        try {
            let formData = new FormData();
            formData.append('password', pass?.pass);
            formData.append('userId', user?.id);
            const response = await route?.post('/auth/reset-password', formData)
            toast.success(response?.data?.message)
            setSshow(false)
            setShow(false)
        } catch (error) {
            console.log('error')
            console.log(error, 'error')
            toast.error(error?.data?.message)
        }
    }

    return (
        <>
            {/* <NavTop/> */}
            <Navber />
            <section id='login'>
                <Container >
                    <Row className="justify-content-center">
                        <Col lg='4' sm='6' xs='10' md='5' className='body'>
                            <Alert>
                                <h2 className='text-center'>Login</h2>
                            </Alert>
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                                    {erremail ?
                                        <Form.Text className="text-muted red">
                                            {erremail}
                                        </Form.Text>
                                        :
                                        ""
                                    }
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                                    {errpassword ?
                                        <Form.Text className="text-muted red">
                                            {errpassword}
                                        </Form.Text>
                                        :
                                        ""
                                    }
                                </Form.Group>

                                <Button variant="primary" type="submit" onClick={handleSubmit} >
                                    Submit
                                </Button>
                                <p className='text-center'>Have not Account? <Link to={'/registration'}>Registration</Link></p>
                                <p className='text-center forget' >Forget Password?<span className='reset' onClick={handleShow}> Reset</span></p>


                            </Form>
                        </Col>
                        <div className="modaltop">
                            <Modal className='mt-5' show={show} onHide={handleClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Email Here</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="email" name="email" placeholder="Enter email" onChange={e => setReset(prevState => ({ ...prevState, [e.target?.name]: e.target?.value }))} />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Date of Birth</Form.Label>
                                        <Form.Control type="date" name="dob" onChange={e => setReset(prevState => ({ ...prevState, [e.target?.name]: e.target?.value }))} />
                                    </Form.Group>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="primary" onClick={handelReset} >
                                        Sent Email
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                        </div>

                        {/* klhkjgg */}
                        <Modal className='mt-5' show={sshow} onHide={handleCllose}>
                            <Modal.Header closeButton>
                                <Modal.Title>Set New Password</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                {/* <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Code</Form.Label>
                                    <Form.Control type="text" placeholder="enter code" />
                                </Form.Group> */}
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>New Password</Form.Label>
                                    <Form.Control type="password" name="pass" placeholder="Enter new password" onChange={e => setPass(prevState => ({ ...prevState, [e.target?.name]: e.target?.value }))} />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Confrim New Password</Form.Label>
                                    <Form.Control type="password" name="cpass" onChange={e => setPass(prevState => ({ ...prevState, [e.target?.name]: e.target?.value }))} placeholder="Enter confirm new password" />
                                </Form.Group>
                            </Modal.Body>
                            <Modal.Footer>

                                <Button variant="primary" onClick={resetPassword}>
                                    Save Changes
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </Row>
                </Container>
            </section>
            <Footer />
        </>
    )
}

export default Login