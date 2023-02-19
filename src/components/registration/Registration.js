import { useState } from 'react'
import { Container,Row,Col,Button,Form,Alert } from 'react-bootstrap'
import '../registration/registration.css'
import { Link } from 'react-router-dom'
import NavTop from '../navTop/NavTop'
import Navber from '../navber/Navber'
import Footer from '../footer/Footer'

const Registration = () => {


    let [name,setName]= useState("")
    let [errname,setErrName]= useState("")

    let [email,setEmail]= useState("")
    let [erremail,setErrEmail]= useState("")
    
    let [password,setPassword]= useState("")
    let [errpassword,setErrPassword]= useState("")
    
    let [cpassword,setCpassword]= useState("")
    let [errcpassword,setErrCpassword]= useState("")



    let handleSubmit=(e)=>{
        e.preventDefault()
        
        
        // username
        if(!name){
            setErrName("enter your name")
        }else{
            if(name.length<=2){
                setErrName("name must be grater than 2")
            }
        }


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
        }else{
            if(!/^(?=.*[a-z])/.test(password)){
                setErrPassword("password must contain a lowercase")
            }else if(!/^(?=.*[A-Z])/.test(password)){
                setErrPassword("password must contain a uppercase")
            }else if(!/^(?=.*[0-9])/.test(password)){
                setErrPassword("password must contain a number")
            }else if(!/^(?=.{6,})/.test(password)){
                setErrPassword("password have atleast 6 character")
            }
        }

        //cpassword
        if(!cpassword){
            setErrCpassword("password is requied")
        }else{
            if(password!=cpassword){
                setErrCpassword("password can't match")
            }
        }

    
    }



  return (
    <>
      {/* <NavTop/> */}
      <Navber/>
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
                              <Form.Control type="text" placeholder="user name"  value={name} onChange={(e)=>{setName(e.target.value)}}/>
                              {errname?
                                     <Form.Text className="text-muted red">
                                         {errname}
                                    </Form.Text> 
                                :
                                ""
                                }
                          </Form.Group>
                          <Form.Group className="mb-3" controlId="formBasicEmail">
                              <Form.Label>Email address</Form.Label>
                              <Form.Control type="email" placeholder="enter email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                              {erremail?
                                     <Form.Text className="text-muted red">
                                         {erremail}
                                    </Form.Text> 
                                    :
                                    ""
                                    }
                          </Form.Group>

                          <Form.Group className="mb-3" controlId="formBasicPassword">
                              <Form.Label>Create Password</Form.Label>
                              <Form.Control type="password" placeholder="creative password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
                              {errpassword?
                                     <Form.Text className="text-muted red">
                                         {errpassword}
                                    </Form.Text> 
                                    :
                                    ""
                                    }
                          </Form.Group>

                          <Form.Group className="mb-3" controlId="formBasicPassword">
                              <Form.Label>Confrim Password</Form.Label>
                              <Form.Control type="password" placeholder="confrim password" value={cpassword} onChange={(e)=>{setCpassword(e.target.value)}}/>
                              {errcpassword?
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
      <Footer/>
    </>
  )
}

export default Registration