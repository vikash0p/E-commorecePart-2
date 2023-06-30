import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import CartMessage from '../component/CartMessage'
import FiveComponent from '../component/FiveComponent'
import MyImages from '../component/MyImages'
import Stars from '../component/Stars'
import { addToCart, getCartMessageStatus, selectAllCart } from '../features/CartSlice'
import { useGetProductByIdQuery } from '../services/productApi'
import '../Style.css'


const ProductSingle = () => {



  const[quantity,setQuantity]=useState(1);
  const { id } = useParams();
  const dispatch=useDispatch();
  const { data: product, isLoading } = useGetProductByIdQuery(id);

  if(isLoading) return <h3>Loading...</h3>

  
   
  
    const increaseQty=()=>{
        setQuantity((prevQty)=>{
          let tempQty=prevQty + 1;
          if(tempQty > product?.stock) tempQty=product?.stock
          return tempQty
        })
    }
    
    const decreaseQty=()=>{
      setQuantity((prevQty)=>{
        let tempQty=prevQty - 1;
        if(tempQty < 1) tempQty=1;
        return tempQty
      })
  }
    
    const onClickHandle=(product)=>{
      dispatch(addToCart(product));
    }
  return (
    <>
      <div className="container-fluid">
        <div className="row mt-5">
          <div className="col-12 col-sm-12 col-md-6 col-lg-5 mb-5">
            <MyImages images={product.images} />
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 ">
      
            <h2> {product?.title}</h2>
            <p className='lead text-muted'>{product?.description}</p>
            <h4 className='mt-3'> <span className='text-success '>Ratiing :</span> <Stars stars={product?.rating} />  </h4>
            <h4> <span className='text-success'>Brand : </span> {product?.brand} </h4>
            <h4> <span className='text-success'>Category : </span> {product?.category} </h4>
            <h4> <span className='text-success'>Price : </span> ${product?.price} <span className='fs-6'>(inclusive all texes)</span> </h4>
            <div className="btn-group mt-3" role="group" aria-label="Basic mixed styles example">
            <button type="button" className=" px-4   btn headingThreeCss" onClick={()=>decreaseQty()}> <span className='fs-5'>-</span></button>
              <button type="button" className=" px-4   btn btn-warning"> <span className='fs-5'>{quantity}</span></button>
              <button type="button" className=" px-4   btn headingThreeCss "onClick={()=>increaseQty()}>  <span className='fs-5'>+</span></button>
            </div>
      
              <div className="d-flex gap-4 mt-3">
                <button className="btn headingThreeCss px-3 " onClick={()=>onClickHandle(product)}>Add To Cart</button>
                <button className="btn headingThreeCss px-3 ">Buy Now </button>
              </div>
          </div>
        </div>
      </div>
     
    </>
    
  )
}
export default ProductSingle
