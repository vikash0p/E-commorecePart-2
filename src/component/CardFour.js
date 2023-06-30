import React from 'react'
import { Link } from 'react-router-dom'
import Stars from './Stars'


const CardTwo = ({tempProducts, side}) => {
  return (
    <>
       {
            tempProducts && tempProducts.map((pro) => {

              return (
                
                <div className='col-10 col-sm-6 col-md-4 col-lg-3 p-3 m-auto p-0 '>
                  <Link to={`/product/${pro.id}`} className='link-dark text-decoration-none' key={pro.id}>
                    <div className="card h-100 position-relative border-0 shadow " key={pro.id}>
                      <img src={pro?.images[0]} className="card-img-top" alt={pro?.title} height='220px' />
                      <div className="position-absolute top-0 start-0 fs-5 bg-warning px-2 mt-2 text-dark">
                        {side}
                      </div>
                      <div className="card-body text-center">
                        <h5 className="card-title">{pro?.title.substring(0, 20)}</h5>
                        <p className="card-text">{pro?.brand} </p>
                        <div className=''>
                          <span className='text-dark fs-3'>${(pro?.price)} </span>
                          <span className='ms-3 bg-success text-light px-2 py-1'>({(pro?.discountPercentage)}  %off) </span>
                          <p className="card-text">{pro?.rating}  <Stars stars={pro?.rating} /></p>

                        </div>
                      </div>
                    </div>
                  </Link>

                </div>
              )
            })
          }
    </>
  )
}

export default CardTwo
