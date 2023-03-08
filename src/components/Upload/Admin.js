import React from 'react'
import ProductUpload from './productUpload/ProductUpload'
import AddDoctor from './addDoctor/AddDoctor'
import AddAmbulance from './addAmbulance/AddAmbulance'
import AddDoner from './addDoner/AddDoner'
import AddArtical from './addArtical/AddArtical'
import AddShopSlider from './addShopSlider/AddShopSlider'

const Admin = () => {
  return (
    <div>
        <AddShopSlider/>
        <AddArtical/>
        <AddDoner/>
        <AddAmbulance/>
        <AddDoctor/>
        <ProductUpload/>
    </div>
  )
}

export default Admin