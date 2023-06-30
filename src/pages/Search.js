import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import CardTwo from '../component/CardFour';
import { useGetProductBySearchQuery } from '../services/productApi';

const Search = () => {
  const[show,setShow]=useState(true);
  const{searchTerm}=useParams();

  const{data=[] , isLoading}=useGetProductBySearchQuery(searchTerm);

  if(isLoading) return <h3>Loading....</h3>
  const product=data.products;
  console.log(product)
  
  
  return (
    <>
    {
      product.length > 0 ? (<div className='d-flex flex-wrap'>
      <CardTwo tempProducts={product} />
      </div>)
      :
       <div className=' container-fluid'>
        <div className="row">
          <div className="col border"  style={{ height : "500px"}}>
          <div className="d-flex justify-content-center align-self-center">
          <h1 className=''>Product not Found! </h1>
          </div>
          </div>
          
        </div>

      </div>
    }
    
 
    </>
  )
}

export default Search

