import React from 'react'
import { Button } from 'react-bootstrap'
import PopularPro from './../popularPro/PopularPro';


const Pagination = ({totalposts,postPerPage,setCurrentPage}) => {
  console.log(totalposts)

    let pages = []
    for(let i=1; i <= Math.ceil(totalposts/postPerPage); i++){
      pages.push(i)
    }
    

  return (
    <div>
      {pages.map((item, index) => (

        <Button key={index} onClick={()=>setCurrentPage(item)} > {item} </Button>
      ))
    }
    </div>
  )
}

export default Pagination