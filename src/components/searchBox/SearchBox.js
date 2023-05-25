import React from 'react'
import '../searchBox/searchBox.css'
import { Container,Row,Col } from 'react-bootstrap'
import { CiSearch } from 'react-icons/ci';

const SearchBox = () => {
  return (
    <section id='searchbox'>
        <Container>
            <Row className='justify-content-center'>
                <Col lg='6' xs='12' sm='8' md='8'>
                    <div className="searchinput text-center">
                        <input type="search" placeholder='search products'/>
                        <span>Search</span>
                    </div>
                </Col>
            </Row>
            
        </Container>
    </section>
  )
}

export default SearchBox