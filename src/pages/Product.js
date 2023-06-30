import React from 'react'
import CardThree from '../component/CardThree'

import CardFour from '../component/CardFour'
import FiveComponent from '../component/FiveComponent'
import HeadingThree from '../component/HeadingThree'
import SwiperSlideOne from '../component/SwiperSlideOne'
import { useGetProductByLimitQuery } from '../services/productApi'

const Product = () => {
  const { data = [], } = useGetProductByLimitQuery(12);
  
  const product = data.products
  console.log(product);

  





  const tempProducts = [];

  for (let i in product) {
    let randomIndex = Math.floor(Math.random() * product.length);
    while (tempProducts.includes(product[randomIndex])) {
      randomIndex = Math.floor(Math.random() * product.length);
    }
    tempProducts[i] = product[randomIndex];
  }

  

  return (
    <div className="container-fluid p-0">
      <div className="row m-0">
        <div className="col p-0">
          <SwiperSlideOne />
          <div className="container-fluid" style={{ background: '#E7EAE0' }} >
            <div className="row">
              <div className="col">
                <FiveComponent />
                <CardThree product={tempProducts} />
                <HeadingThree headingthree={"Tranding Products"} />
                <div className='d-flex overflow-scroll '>
               
                  <CardFour tempProducts={tempProducts} side={'Tranding Products'} />
                </div>
                <HeadingThree headingthree={"New Lunched Product "} />
                <div className='d-flex flex-wrap '>
                  <CardFour tempProducts={tempProducts} side={'New Lunched'} />
                </div>
                <HeadingThree headingthree={"Most sell product"} />
                <div className='d-flex overflow-scroll '>
                  <CardFour tempProducts={tempProducts} side={'Most sell product'} />
                </div>
                <div className="container-fluid">
                  <div className="row">
                    <div className="col my-3 p-2  text-center headingThreeCss" >
                      <h2 className='fw-bolder'>Join  New customer</h2>
                     
                        
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                      
                      <button className="btn btn-success  px-5 mt-3 fs-5 fw-bold" >Subscribe</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product
