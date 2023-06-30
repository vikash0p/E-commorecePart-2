import React from 'react'
import '../Style.css'

const CartMessage = () => {
    return (
        <div className='container-fluid cartMessage p-0'>
            <div className="row m-0 ">
                <div className="col-5 m-auto  ">
                    <div className="alert text-light headingThreeCss  " role="alert">
                        <h4 className="alert-heading text-center mb-3 mt-3"><i className="fa-solid fa-circle-check fs-1"></i></h4>
                        <p className='text-center mb-4'> An item has Been Added To Your Shopping Cart</p>
                       
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CartMessage
