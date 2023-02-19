import useState from 'react'
import '../newArticle/newArticle.css'
import { Container,Row,Col,Card } from 'react-bootstrap'
import { AiOutlineShareAlt } from 'react-icons/ai';
import { AiOutlineHeart } from 'react-icons/ai';
import { BiRightArrowAlt } from 'react-icons/bi';

const NewArticle = () => {

  return (
    <section id='newarticle'>
        <Container>
            <Row>
                 <Col lg='12'>
                       <div className="title">
                       <h2>New Article</h2>
                       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi dolorem omnis iure enim totam voluptatem amet vel reprehenderit quia laudantium?</p>
                       </div>
                </Col>
            </Row>
            <Row>
                    <Col lg='3' className='mb-4' sm='6'>
                        <Card style={{ width: '100%' }}>
                            <Card.Img variant="top" src="images/blog1.jpg" />
                            <Card.Body>
                                <div className="btitle">
                                    <a href='/#'>Vision and eye health in children</a>
                                </div>
                                <span>Oct 21,2022</span>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad nobis obcaecati voluptate quidem voluptatibus sint?

                                <a href="">Read more<BiRightArrowAlt/></a>
                                </p>
                                <div className="bicon">
                                    <span><AiOutlineShareAlt/></span>
                                    <span><AiOutlineHeart/></span>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
          

                
                <Col lg='3' className='mb-4' sm='6'>
                    <Card style={{ width: '100%' }}>
                        <Card.Img variant="top" src="images/blog2.jpg" />
                        <Card.Body>
                            <div className="btitle">
                                <a href='/#'>Vision and eye health in children</a>
                            </div>
                            <span>Oct 21,2022</span>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad nobis obcaecati voluptate quidem voluptatibus sint?

                            <a href="">Read more<BiRightArrowAlt/></a>
                            </p>
                            <div className="bicon">
                                <span><AiOutlineShareAlt/></span>
                                <span><AiOutlineHeart/></span>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg='3' className='mb-4' sm='6'>
                    <Card style={{ width: '100%' }}>
                        <Card.Img variant="top" src="images/blog3.jpg" />
                        <Card.Body>
                            <div className="btitle">
                                <a href='/#'>Vision and eye health in children</a>
                            </div>
                            <span>Oct 21,2022</span>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad nobis obcaecati voluptate quidem voluptatibus sint?

                            <a href="">Read more<BiRightArrowAlt/></a>
                            </p>
                            <div className="bicon">
                                <span><AiOutlineShareAlt/></span>
                                <span><AiOutlineHeart/></span>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg='3' className='mb-4' sm='6'>
                    <Card style={{ width: '100%' }}>
                        <Card.Img variant="top" src="images/blog4.jpg" />
                        <Card.Body>
                            <div className="btitle">
                                <a href='/#'>Vision and eye health in children</a>
                            </div>
                            <span>Oct 21,2022</span>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad nobis obcaecati voluptate quidem voluptatibus sint?

                            <a href="">Read more<BiRightArrowAlt/></a>
                            </p>
                            <div className="bicon">
                                <span><AiOutlineShareAlt/></span>
                                <span><AiOutlineHeart/></span>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default NewArticle