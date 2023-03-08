import React from 'react'
import ProductUpload from './productUpload/ProductUpload'
import AddDoctor from './addDoctor/AddDoctor'
import AddAmbulance from './addAmbulance/AddAmbulance'
import AddDoner from './addDoner/AddDoner'
import AddArtical from './addArtical/AddArtical'

const Admin = () => {
  return (
    <div>
        <AddArtical/>
        <AddDoner/>
        <AddAmbulance/>
        <AddDoctor/>
        <ProductUpload/>
    </div>
  )
}

export default Admin