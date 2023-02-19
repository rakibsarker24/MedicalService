import react from 'react'
import {Col,Card,Button } from 'react-bootstrap'


const ProductCard = (props) => {


  return (
        
            <Col lg='2' xs='6' sm='4' md='3'>
                <Card className='pcard' style={{ width: '100%' }}>
                    <Card.Img variant="top" src={props.image} />
                        <Card.Body>
                                <Card.Title className='text-center'>itemtitle</Card.Title>
                                <Card.Text className='text-center'>
                                <label>price</label>
                                <span>56</span>
                                </Card.Text>
                                <Button variant="primary">Add to Card</Button>
                    </Card.Body>
                </Card>
            </Col>
  )
}


export default ProductCard