import React from 'react'
import ProductCard from '../productCard/ProductCard'
import { Container,Row } from 'react-bootstrap'

const CriptoList = ({currentPost}) => {

  return (
    <>
        <Container>
            <Row>
                    {currentPost.map((item)=>(
                        <ProductCard image={item.image} title={item.title} price={item.price} description={item.description}/>
                    ))}
            </Row>
        </Container>
    </>
  )
}

export default CriptoList