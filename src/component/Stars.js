import React from 'react'

const Stars = ({stars}) => {
    
   const ratingStar= Array.from({length:5}, (elem,index)=>{
        let number=index+0.5;
        return(
            <span key={index}>
                {
                stars>= index + 1 ?(<i className="text-warning  fa-solid fa-star"></i>) :stars>=number ? (<i className="text-warning fa-solid fa-star-half-stroke"></i>):(<i className="text-warning fa-regular fa-star"></i>)

                }
            </span>
        )

   
    })
  return (
    <>
    <span>{ratingStar}</span>
    </>
    
  )
}

export default Stars
