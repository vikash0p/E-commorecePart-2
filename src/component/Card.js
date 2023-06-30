import React from 'react'
import { Link } from 'react-router-dom'
import Stars from './Stars'


const Card = ({product}) => {
  return (
    <>
    <div className="row">
    {
              product && product.map((pro) => {

                return (
                  <div className=''>
                 
                    <div className='col-11 p-3 m-auto p-0' >
                      
                      <Link to={`/product/${pro.id}`} className='link-dark text-decoration-none' key={pro.id}>
                     
                        <div className="card  h-100 position-relative border-0 shadow"  key={pro.id} >
                          <div className="row g-0">
                            <div className="col-md-5 col-lg-3">
                              <img src={pro?.images[0]} className=" rounded-start " alt={pro?.title} height='200px' width={'200px'} />
                              <div className="position-absolute top-0 start-0 fs-5 headingThreeCss px-3 mt-2 text-light">
                          {pro.category}
                        </div>
                            </div>
                            <div className="col-md-7 col-lg-9 border border-0 border-left border-start px-3">
                              <div className="card-body text-center ">
                              <h5 className="card-title fs-3">{pro?.title}</h5>
                             
                              
                                
                                <p className="card-text lead">{pro?.description}</p>
                                <p className="card-text">{pro?.rating}  <Stars stars={pro?.rating} /></p>
                                <p className="card-text fs-5"> ${(pro?.price)}<small className="text-light ms-2 bg-success px-2 py-1 ">({((pro?.discountPercentage) )} %off)</small></p>
                              </div>
                            </div>
                          </div>
                        </div>

                      </Link>
                    </div>
                  </div>

                )
              })
            }
    </div>
      
    </>
  )
}

export default Card
