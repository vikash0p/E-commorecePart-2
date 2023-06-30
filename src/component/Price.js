import React,{useState} from 'react'



const Price = ({filterProduct}) => {
 
   
    return (
        <>
        <div className='container-fluid'>
            <div className="row">
                <div className="col ">
                <h4 className='px-2  mt-3 fw-bold'>Price</h4>
                    <nav className="nav flex-column">

                        <button className='btn ' onClick={()=>filterProduct(0, 30)}> Under$30</button>
                        <button className='btn ' onClick={()=>filterProduct(30,50)}>$30-$50</button>
                        <button className='btn ' onClick={()=>filterProduct(50,100)}>$50-$100</button>
                        <button className='btn ' onClick={()=>filterProduct(100,500)}>$100-$500</button>
                        <button className='btn ' onClick={()=>filterProduct(500,1000)}>$500-$1000</button>
                        <button className='btn ' onClick={()=>filterProduct(1000,1500)}>$1000-$1500</button>
                        <button className='btn ' onClick={()=>filterProduct(1500,2000)}>$1500-$2000</button>

                    </nav>
                </div>

            </div>
        </div>
       
        </>

    )
}

export default Price
