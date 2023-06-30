import React from 'react'

const CustomerReview = ({filterCategory}) => {
  return (
    <>
    
       <h4 className='px-2  mb-1 mt-4 fw-bold'>Customer Review</h4>
         
         <button className='btn ' onClick={()=>filterCategory(4.5, 5.0)}>
        
         <i className="text-warning  fa-solid fa-star"></i>
         <i className="text-warning  fa-solid fa-star"></i>
         <i className="text-warning  fa-solid fa-star"></i>
         <i className="text-warning  fa-solid fa-star"></i>
         <i className="text-warning fa-solid fa-star-half-stroke"></i>
         <span className='link-dark '>& up</span>
         </button> <br/>
         <button className='btn '  onClick={()=>filterCategory(4.0, 4.4)} >
         
         <i className="text-warning  fa-solid fa-star"></i>
         <i className="text-warning  fa-solid fa-star"></i>
         <i className="text-warning  fa-solid fa-star"></i>
         <i className="text-warning  fa-solid fa-star"></i>
         <i className="text-warning fa-regular fa-star"></i>
         <span className='link-dark '>& up</span>
         </button><br/>
         
         <button className='btn ' onClick={()=>filterCategory(3.0, 3.9)}>
       
         <i className="text-warning  fa-solid fa-star"></i>
         <i className="text-warning  fa-solid fa-star"></i>
         <i className="text-warning  fa-solid fa-star"></i>
         <i className="text-warning fa-regular fa-star"></i>
         <i className="text-warning fa-regular fa-star"></i>
         <span className='link-dark '>& up</span>
         </button><br/>
         <button className='btn ' onClick={()=>filterCategory(2.0, 2.9)}>
        
         <i className="text-warning  fa-solid fa-star"></i>
         <i className="text-warning  fa-solid fa-star"></i>
         <i className="text-warning fa-regular fa-star"></i>
         <i className="text-warning fa-regular fa-star"></i>
         <i className="text-warning fa-regular fa-star"></i>
         <span className='link-dark '>& up</span>
         </button><br/>
    </>
  )
}

export default CustomerReview
