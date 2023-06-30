import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  removeToCart, selectAllCart } from '../features/CartSlice'

import '../Style.css'


const Cart = () => {

  const carts = useSelector(selectAllCart)
  const dispatch = useDispatch()
  const handleRemove = (productId) => {
    dispatch((removeToCart(productId)))
  }


  return (
    <>
      <div className="container-fluid" >
        <div className="row">
          <div className="col">
            <h1 className='text mt-4 border border-success border-0 border-bottom  mb-4 m-auto'> Shopping Cart </h1>


            <div>
            
              {
                carts && carts.map((cart) => {
                  return (
                    
                    <div key={cart.id} className='d-flex flex-wrap  justify-content-around border border-success  mb-1  align-items-center' >

                      <img src={cart?.thumbnail} alt={cart?.title} width="120px" height="80px" className='py-1 ' />

                     

                      <h4 className=''> $ {cart.price} </h4>

                      <div>  <i class="fa-solid fa-trash text-danger" onClick={() => handleRemove(cart.id)} ></i></div>
                    </div>
                  )
                })
              }
            </div>


          </div>
        </div>
      </div>
    </>
  )
}

export default Cart