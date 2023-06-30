import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { selectAllCart } from '../features/CartSlice'
import '../Style.css'




const Navbar = () => {
  const carts = useSelector(selectAllCart);
  const[searchTerm,setSearchTerm]=useState('');

  const ChangeHandler=(e)=>{
    e.preventDefault();
    setSearchTerm(e.target.value);
  
  }



  return (
    <>


      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">

          <Link className="navbar-brand  d-none d-sm-block fs-4" to="/">
            <span className="text-primary" style={{ fontFamily: "serif" }}>F</span>
            <span className="text-danger" style={{ fontFamily: "serif" }}>i</span>
            <span className="text-warning" style={{ fontFamily: "serif" }}>t</span>
            <span className="text-success" style={{ fontFamily: "serif" }}>w</span>
            <span className="text-danger" style={{ fontFamily: "serif" }}>e</span>
            <span className="text-warning" style={{ fontFamily: "serif" }}>a</span>
            <span className="text-primary" style={{ fontFamily: "serif" }}>r</span>
          </Link>
          <form className="d-flex col-10 col-sm-8 col-md-8 col-lg-8" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={searchTerm}  onChange={(e)=>ChangeHandler(e)} />
            <Link to={`search/${searchTerm}`}  className='link-light text-decoration-none bg-success px-3 fs-5 rounded  '> 
         Search
            </Link>
            
          </form>
          <Link to='/cart' className='px-1 my-4 my-ms-4 my-md-0 my-lg-0'>
            <i className="fa-solid fa-cart-shopping fs-3   text-dark position-relative">
              <span className="position-absolute top-0 start-100  translate-middle badge rounded-pill bg-danger " style={{ fontSize: '12px' }}>
                <span span className='' style={{ fontSize: '13px' }}>{carts.length} </span>
              </span>
            </i>
          </Link>
        </div>
      </nav>

    </>
  )
}

export default Navbar


