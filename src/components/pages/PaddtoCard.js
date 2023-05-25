import React, { useEffect, useState } from 'react'
import AddCard from '../addTocard/AddCard'
import Footer from '../footer/Footer'
import Navber from '../navber/Navber'
import { useParams } from 'react-router-dom'
import { route } from '../../config'

const Shop = () => {
  const [product, setProduct] = useState({})
  const {slug, productSlug} = useParams();
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await route?.get(
          `products/${productSlug?.split("-")?.at(-1)}`
        );
        setProduct(response?.data);
        console.log(response, "response");
      } catch (error) {
        console.log(error, "error");
      }
    }
    fetchData();
  }, [productSlug])
  return (
    <>
        <Navber/>
        <AddCard product={product}/>
        <Footer/>
    </>
  )
}

export default Shop