import React from 'react'

const Delivery = () => {
  return (
    <div>
      
      <h4 className='px-2  mb-1 mt-4 fw-bold'>Delivery</h4>
      <div className="form-check">
        <input className="form-check-input mt-1" type="checkbox" value="" id="flexCheckDefault" />
        <label className="form-check-label" for="flexCheckDefault">
          Get it Today
        </label>
      </div>
      <div className="form-check">
        <input className="form-check-input mt-1" type="checkbox" value="" id="flexCheckDefault" />
        <label className="form-check-label" for="flexCheckDefault">
          Get it by Tommarow
        </label>
      </div> <div className="form-check">
        <input className="form-check-input mt-1" type="checkbox" value="" id="flexCheckDefault" />
        <label className="form-check-label" for="flexCheckDefault">
          Get it in 2 days
        </label>
      </div>
    </div>
  )
}

export default Delivery
