import React, { useState } from 'react'
import '../searchBox/searchBox.css'
import { Container,Row,Col, ListGroup, ListGroupItem } from 'react-bootstrap'
import { CiSearch } from 'react-icons/ci';
import { route } from '../../config';
import { NavLink } from 'react-router-dom';
import { makeSlug } from '../../utils';

const SearchBox = () => {
    const [search, setSearch] = useState();
    const [results, setResults] = useState([]);

    const handelSearch = async () => {

        try {
            let res = await route.get(`products/search/list?page=1&title=${search}`)
            res?.data && setResults(res?.data?.rows?.length > 0 ? res?.data?.rows : null)

        } catch (error) {
            
        }
    }
  return (
    <section id='searchbox'>
        <Container>
            <Row className='justify-content-center'>
                <Col lg='6' xs='12' sm='8' md='8'>
                    <div className="searchinput text-center">
                        <input type="search" onChange={(e) => setSearch(e?.target?.value)} placeholder='search products'/>
                        <span onClick={handelSearch}>Search</span>
                    </div>
                    <ListGroup className='mt-3'>
                {results && results?.length > 0 ? results?.map(result => (
                    <ListGroupItem>
                        <NavLink
                        to={`/category/${makeSlug(result?.category?.name)}-${result?.category?.id
                        }/${makeSlug(result?.title)}-${result?.id}`}
                        variant="primary"
                    >
                        {result?.title}
                    </NavLink>
                    </ListGroupItem>
                )): (
                    <>
                    {results === null && (
                        <ListGroupItem>Not Found</ListGroupItem>
                    )}
                    </>
                )}
            </ListGroup>
                </Col>
            </Row>
            
            
        </Container>
    </section>
  )
}

export default SearchBox