import React from 'react'
import { NavLink,Link } from 'react-router-dom'

import girl2 from '../images/gimg1.jpg'
import girl3 from '../images/gimg2.jpg'
import girl4 from '../images/gimg3.jpg'


const Blog = () => {
  
  return (
    <>
        <h1 className='text-center mt-4' >Blogs</h1>
        <hr className='w-25 mx-auto mb-5' />
       <div className="container m-auto">
        <div className="row d-flex">
          <div className="col-12 col-sm-12 col-md-4 col-lg-4  ">
            <h5 className='fw-bold mb-3 '>Blog</h5>
           
            <h4 className='fw-bold mb-5' >Recent Posts</h4>
            <NavLink to=" " className='fs-4 link-dark '>Color,Size,Material Seatches</NavLink>
            <p className="lead">JANUARY 08,2019</p>
            <h4 className='fw-bold mt-5' >Flexible Banner Section</h4>
            <p className="lead">JANUARY 15,2019</p>
            <h4 className='fw-bold mt-5' >Dynamic Checkout Buttons</h4>
            <p className="lead">JANUARY 09,2019</p>

            <hr className='my-5' />
            <h5 className="fw-bold">About</h5>
            <p className="lead">
            Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.
            </p>
           <NavLink to='' className="btn btn-success mt-2 px-5 fs-5 mb-5 " >Read More</NavLink>
           <hr className='mb-5' />
           <h5 className="fw-bold mb-2">Tags</h5>
           <div className="d-flex flex-wrap gap-2">
           <NavLink to='' className="btn btn-success px-5 lead  " >Awesome</NavLink>
           <NavLink to='' className="btn btn-success px-5 fs-5  " >Cool</NavLink>
           <NavLink to='' className="btn btn-success px-5 fs-5  " >Rectangle</NavLink>
           <NavLink to='' className="btn btn-success px-5 fs-5  " >Summer</NavLink>
           <NavLink to='' className="btn btn-success px-5 fs-5  " >Vintage</NavLink>
           <NavLink to='' className="btn btn-success px-5 fs-5  " >Winter</NavLink>
           </div>
           <h5 className="fw-bold  mt-2">Subscribe to Our Newsletter!</h5>
           <div className="mt-5 mb-3">
  
               <input type="text" className="form-control"placeholder="Enter your e-mail"/>
             </div>
             <button className="btn btn-success  px-5 fs-5 mb-3 " >Send</button>
            
           
          </div>
             
          <div className="col-12 col-sm-12 col-md-8 col-lg-8 ">

            {/* ------------------------------------first image-------------------------------- */}
          <img src={girl2} alt="images" className='img-fluid' />
          
            <p className="lead">Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div>
           
              <div className='d-flex justify-content-between flex-wrap'>

                 <p className="lead lh-sm">BY <span className="fw-bold"> DIEGO LOPEZ</span> ON JANUARY 08, 2019  IN  <span className="fw-bold"> COOL, VINTAGE</span> </p>
                 <p className="lead lh-1">2 COMMENT(S)</p>
              </div>
            </div>
                  {/* ------------------------------------second image-------------------------------- */}
                  <hr className='my-5' />
              <div className='mt-5'>
              <img src={girl3} alt="images" className='img-fluid' />
          
          <p className="lead">Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <div>
         
            <div className='d-flex justify-content-between flex-nowrap'>

               <p className="lead lh-sm">BY <span className="fw-bold"> DIEGO LOPEZ</span> ON JANUARY 08, 2019  IN  <span className="fw-bold"> COOL, VINTAGE</span> </p>
               <p className="lead lh-1">2 COMMENT(S)</p>
            </div>
          </div>
              </div>

  {/* ------------------------------------third image-------------------------------- */}
                 <hr className='my-5' />
              <div className='mt-5 mb-5'>
              <img src={girl4} alt="images" className='img-fluid' />
          
          <p className="lead">Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <div>
         
            <div className='d-flex justify-content-between flex-wrap'>

               <p className="lead lh-sm">BY <span className="fw-bold"> DIEGO LOPEZ</span> ON JANUARY 08, 2019  IN  <span className="fw-bold"> COOL, VINTAGE</span> </p>
               <p className="lead lh-1">2 COMMENT(S)</p>
            </div>
          </div>
            </div>
            {/* -------------------------------------end-------------------------------------- */}
          </div>
        </div>
       </div>
    </>
  )
}

export default Blog
