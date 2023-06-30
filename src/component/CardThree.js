import React from 'react'
import { Link } from 'react-router-dom'
import Stars from './Stars'


const CardThree = ({ product }) => {
    return (
        <>
            <div className="row mb-5 m-0">
                {
                    product && product.map((pro) => {

                        return (
                            <div className='col-10 col-sm-6 col-md-4 col-lg-3 border  m-auto p-0  '>
                                <Link to={`/product/${pro.id}`} className='link-dark text-decoration-none' key={pro.id}>
                                    <div className="card py-2 h-100 border border-0 rounded rounded-0 " key={pro.id}>
                                        <div className='d-flex'>
                                        <img src={pro?.images[0]} className="" alt={pro?.title} height='70px' width='80px' />
                                        <div className="card-body text-center">
                                            <h5 className="card-title">{pro?.title.substring(0, 10)}</h5>
                                            <p className="card-text">  <Stars stars={pro?.rating} /></p>
                                        </div>
                                        </div>
                                        
                                    </div>
                                </Link>

                            </div>

                        )
                    })
                }
            </div>

        </>
    )
}

export default CardThree
