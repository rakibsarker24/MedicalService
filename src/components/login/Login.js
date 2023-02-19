import React, { useState } from 'react'
import '../login/login.css'
import { Container,Row,Col,Button,Form,Alert } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import NavTop from '../navTop/NavTop'
import Navber from '../navber/Navber'
import Footer from '../footer/Footer'

const Login = () => {

    let [email,setEmail]= useState("")
    let [erremail,setErrEmail]= useState("")
    
    let [password,setPassword]= useState("")
    let [errpassword,setErrPassword]= useState("")



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
                        </Form>
                    </Col>
                </Row>
            </Container>
        </section>
      <Footer/>
      </>
  )
}

export default Login