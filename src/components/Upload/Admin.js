import React from 'react'
import ProductUpload from './productUpload/ProductUpload'
import AddDoctor from './addDoctor/AddDoctor'
import AddAmbulance from './addAmbulance/AddAmbulance'

const Admin = () => {
  return (
    <div>
        <AddAmbulance/>
        <AddDoctor/>
        <ProductUpload/>
    </div>
  )
}

export default Admin