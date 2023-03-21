import React, { useState } from 'react'
import '../login/login.css'
import { Container,Row,Col,Button,Form,Alert,Modal} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import NavTop from '../navTop/NavTop'
import Navber from '../navber/Navber'
import Footer from '../footer/Footer'

const Login = () => {

    let [email,setEmail]= useState("")
    let [erremail,setErrEmail]= useState("")
    
    let [password,setPassword]= useState("")
    let [errpassword,setErrPassword]= useState("")
    let [reset,setReset] = useState("")
    const [sshow, setSshow] = useState(false);

    const [show, setShow] = useState(false);
    const handleClose = () =>{
        setSshow(true)
        setShow(false)};
    const handleShow = () => setShow(true);

    const handleCllose = () => setSshow(false);


    let handleSubmit=(e)=>{
        e.preventDefault()

        // email
        if(!email){
            setErrEmail("email is required")
        }else{
            if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
                setErrEmail("valid email is required")
            }
        }

        //password
        if(!password){
            setErrPassword("password is required")
        }
    
    }



  return (
    <>
    {/* <NavTop/> */}
    <Navber/>
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
                                <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                                {erremail?
                                     <Form.Text className="text-muted red">
                                         {erremail}
                                    </Form.Text> 
                                    :
                                    ""
                                    }
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} />
                                {errpassword?
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
                                        <Form.Control type="email" placeholder="Enter email" />
                                           
                                    </Form.Group>
                                    </Modal.Body>
                                    <Modal.Footer>
                                    <Button variant="primary" onClick={handleClose} >
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
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Code</Form.Label>
                                            <Form.Control type="text" placeholder="enter code" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>New Password</Form.Label>
                                            <Form.Control type="password" placeholder="Enter new password" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Confrim New Password</Form.Label>
                                            <Form.Control type="password" placeholder="Enter confrim new password" />
                                    </Form.Group>
                                </Modal.Body>
                                <Modal.Footer>
                                    
                                <Button variant="primary" onClick={handleCllose}>
                                    Save Changes
                                </Button>
                                </Modal.Footer>
                            </Modal>
                </Row>
            </Container>
        </section>
      <Footer/>
      </>
  )
}

export default Login