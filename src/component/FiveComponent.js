import React from 'react'
import { Link } from 'react-router-dom'

const FiveComponent = () => {
  return (
    <div>
      <div className="container-fluid my-4 py-2 " >
            <div className="row">
              <div className="col ">
                <div className='d-flex justify-content-between flex-wrap py-3 py-3 py-md-0 py-lg-0'>

                  <Link to='/' className="link-dark text-decoration-none">
                  <div className="d-flex px-2 px-sm-2 px-md-0 px-lg-0 " >
                    <div>
                      <i className="fa-sharp fa-solid fa-truck-fast fs-3 me-2 mt-3"></i>
                    </div>
                    <div>
                      <p className="lead">Free shipping</p>
                      <p>From all order over $50</p>
                    </div>
                  </div>
                  </Link>
                 
                  <Link to='/' className="link-dark text-decoration-none py-3 py-3 py-md-0 py-lg-0">
                  <div className="d-flex  px-2 px-sm-2 px-md-0 px-lg-0" >
                    <div className=''>
                    <i className="fa-sharp fa-solid fa-gift fs-3 me-2 mt-3  "></i>
                    </div>
                    <div>
                      <p className="lead">Daily Surprise Offers</p>
                      <p>Save upto 25% Off</p>
                    </div>
                  </div>
                  </Link>
                  <Link to='/' className="link-dark text-decoration-none py-3 py-3 py-md-0 py-lg-0">
                  <div className="d-flex  px-2 px-sm-2 px-md-0 px-lg-0 " >
                    <div>
                    <i className="fa-sharp fa-solid fa-headset fs-3 me-2 mt-3"></i>
                    </div>
                    <div>
                      <p className="lead">Support 24/7</p>
                      <p>shop with an export</p>
                    </div>
                  </div>
                  </Link>
                  <Link to='/' className="link-dark text-decoration-none py-3 py-3 py-md-0 py-lg-0">
                  <div className="d-flex  px-2 px-sm-2 px-md-0 px-lg-0 " >
                    <div>
                    <i className="fa-solid fa-percent fs-3 me-2 mt-3 "></i>
                    </div>
                    <div>
                      <p className="lead">Affordable Price</p>
                      <p>Get Factory Direct Price</p>
                    </div>
                  </div>
                  </Link>
                  <Link to='/' className="link-dark text-decoration-none py-3 py-3 py-md-0 py-lg-0">
                  <div className="d-flex  px-2 px-sm-2 px-md-0 px-lg-0 " >
                    <div>
                    <i className="fa-regular fa-credit-card fs-3 me-2 mt-3"></i>
                    </div>
                    <div>
                      <p className="lead">Secure Paymenet</p>
                      <p>100% Protection Payments</p>
                    </div>
                  </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
    </div>
  )
}

export default FiveComponent
