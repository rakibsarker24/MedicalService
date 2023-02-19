import React from 'react'
import ProductCard from '../productCard/ProductCard'
import { Container,Row } from 'react-bootstrap'

const CriptoList = ({currentPost}) => {

  return (
    <>
        <Container>
            <Row>
                    {currentPost.map((item)=>(
                        <ProductCard image={item.image}/>
                    ))}
            </Row>
        </Container>
    </>
  )
}

export default CriptoList