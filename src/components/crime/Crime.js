import {useState ,useEffect} from 'react'
import '../crime/crime.css'
import { Container,Row,Col,Card } from 'react-bootstrap'
import axios from 'axios'
import { NavLink } from 'react-router-dom';

const Crime = () => {

    
  const [constData,setConsData] = useState([])

    useEffect(()=>{
        async function rakib(){
            let data = await axios.get("https://fakestoreapi.com/products")
            setConsData(data.data)
            // console.log(data.data)
        }
        rakib()
    },[])

  return (
    <section id='crime'>
        <Container>
            <Row>
                {constData.map((item)=>(
                  <Col lg='2' xs='6' sm='4' md='3'>
                      <Card className='pcard mb-3' style={{ width: '100%' }}>
                          <Card.Img variant="top" src={item.image} />
                              <Card.Body>
                                      <Card.Title className='text-center'>itemtitle</Card.Title>
                                      <Card.Text className='text-center'>
                                      <label>price</label>
                                      <span>56</span>
                                      </Card.Text>
                                      <NavLink to='/addcard' variant="primary">Add to Card</NavLink>
                          </Card.Body>
                      </Card>
                  </Col>
                ))}
            </Row>
        </Container>
    </section>
  )
}

export default Crime