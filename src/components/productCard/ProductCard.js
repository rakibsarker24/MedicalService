import react from 'react'
import {Col,Card,Button } from 'react-bootstrap'
import { NavLink,Link } from 'react-router-dom'
import { IMAGE_URL } from './../../config/index';


const ProductCard = (props) => {


  return (
        
            <Col lg='2' xs='6' sm='4' md='3'>
                <Card className='pcard' style={{ width: '100%' }}>
                    <Card.Img variant="top" src={`${IMAGE_URL}/products/${props?.image}`} style={{height:'150px'}} />
                        <Card.Body>
                                <Card.Title className='text-center norap'>{props?.title}</Card.Title>
                                <Card.Text className='text-center'>
                                <label>{props?.price} TK</label>
                                <span>56</span>
                                </Card.Text>
                                <NavLink to='/addcard' className='mybtn' variant="primary">Add to Card</NavLink>
                    </Card.Body>
                </Card>
            </Col>
  )
}


export default ProductCard