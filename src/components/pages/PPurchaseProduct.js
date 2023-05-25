import React, { useState } from 'react'
import Footer from '../footer/Footer'
import PurchaseProduct from '../purchaseProduct/PurchaseProduct'
import Navber from '../navber/Navber'

const PPurchaseProduct = () => {
  const [index, setIndex] = useState(0);

  const products =
    sessionStorage.getItem("cart") &&
    JSON.parse(sessionStorage.getItem("cart"));

  const handelRemove = (productId) => {
    setIndex(productId)
    const items = products?.filter(item => item?.product?.id !== productId);
    sessionStorage.setItem('cart', JSON.stringify(items));
  };
  return (
    <>
        {/* <NavTop/> */}
        <Navber/>
        <PurchaseProduct products={products} handelRemove={handelRemove}/>
        <Footer/>
    </>
  )
}

export default PPurchaseProduct