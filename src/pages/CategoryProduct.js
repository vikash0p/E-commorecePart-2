import React from 'react'
import { Link, useParams } from 'react-router-dom'

import AllCategoryOne from '../component/AllCategoryOne';
import Card from '../component/Card';
import CardTwo from '../component/CardTwo';
import Stars from '../component/Stars';
import { useGetProductByCategoryQuery } from '../services/productApi';

const CategoryProduct = () => {
  const { category } = useParams();
  const { data = [], isLoading, isError } = useGetProductByCategoryQuery(category)

  const product = data.products
  console.log(product)


  return (
    <div className='container-fluid '>
      <div className="row ">
        <div className="col-12 col-sm-12 col-md-2 col-lg-2">
          <AllCategoryOne />
        </div>
        <div className="col-12 col-sm-12 col-md-10 col-lg-10">
          <div className='d-flex flex-wrap justify-content-between mt-4'>

            <div>
              <ul className="nav nav-pills mb-3  px-5" id="pills-tab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button className="nav-link active " id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true"><i className="  fa-solid fa-grip"></i></button>
                </li>
                <li className="nav-item d-sm-none d-md-block d-none d-sm-block " role="presentation">
                  <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false"><i className="  fa-solid fa-bars"></i></button>
                </li>

              </ul>
            </div>
            <div>
            </div>
            
          </div>
          <div className="tab-content" id="pills-tabContent">
            <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabIndex="0">

              <div className='d-flex flex-wrap'>
                <CardTwo tempProducts={product} />
              </div>
            </div>
            <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabIndex="0">
              <Card product={product} />
            </div>

          </div>

        </div>
      </div>



    </div>

    
  )
}

export default CategoryProduct
