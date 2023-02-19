import  {useState, useEffect } from 'react'
import '../popularPro/popularPro.css'
import { Container,Row,Col,Card,Button } from 'react-bootstrap'
import ProCard from '../damiApi/ProCard'
import Pagination from './../pagination/Pagination';
import ProductCard from '../productCard/ProductCard';
import CriptoList from './CriptoList';
import axios from 'axios';



const PopularPro = () => {

    const [constData,setConsData] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [postPerPage, setPostPerPage] = useState(12)

    useEffect(()=>{
        async function rakib(){
            let data = await axios.get("https://fakestoreapi.com/products")
            setConsData(data.data)
            // console.log(data.data)
        }
        rakib()
    },[])


    const lastPostIndex = currentPage * postPerPage
    const firstPostIndex = lastPostIndex - postPerPage
    const currentPost = constData.slice(firstPostIndex, lastPostIndex)

  return (
    <section id='popularPro'>
    <Container>
        <Row>
            <Col lg='12'>
               <div className="title">
               <h2>Top Product</h2>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi dolorem omnis iure enim totam voluptatem amet vel reprehenderit quia laudantium?</p>
               </div>
            </Col>
        </Row>
        <Row>
            <CriptoList currentPost={currentPost}/>
            <Pagination totalposts={constData.length} postPerPage={postPerPage} setCurrentPage={setCurrentPage}/>
        </Row>
        {/* <Row>
            <Col lg='12'>
            </Col>
        </Row> */}
    </Container>
</section>
  )
}

export default PopularPro