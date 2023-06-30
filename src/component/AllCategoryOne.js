import React from 'react'
import { Link } from 'react-router-dom'

const AllCategoryOne = ({product,setFilter}) => {
  return (
    <div>
       <h4 className='px-2  mb-1 mt-4 fw-bold'>Category</h4>
      {/* -----------------------------------start----------------------------------------- */}
      <div className="btn-group-vertical px-2 col-12  " role="group" aria-label="Vertical button group">

        <button type="button" className="btn btn-success rounded-0 " onClick={()=>setFilter(product)}>
          All Product
        </button>
        <div className="btn-group" role="group">
          <button type="button" className="btn btn-success dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            Electronic
          </button>
          <ul className="dropdown-menu dropdown-menu-end">
            <Link to='/category/laptops' className="link-dark text-decoration-none dropdown-item" >
              <span className=' grounplinkAll'>
                laptops
              </span>
            </Link>
            <Link to='/category/smartphones' className="link-dark text-decoration-none dropdown-item" >
              <span className=' grounplinkAll'>
                SmartPhones
              </span>
            </Link>

          </ul>
        </div>

        <div className="btn-group" role="group">
          <button type="button" className="btn btn-success dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            Mens
          </button>
          <ul className="dropdown-menu dropdown-menu-end">
            <Link to='/category/mens-shirts' className="link-dark text-decoration-none dropdown-item" >
              <span className=' grounplinkAll'>
                Shirts
              </span>
            </Link>
            <Link to='/category/mens-shoes' className="link-dark text-decoration-none dropdown-item" >
              <span className=' grounplinkAll'>
                Shoes
              </span>
            </Link>
            <Link to='/category/mens-watches' className="link-dark text-decoration-none dropdown-item" >
              <span className=' grounplinkAll'>
                Watch
              </span>
            </Link>
          </ul>
        </div>
        <div className="btn-group" role="group">
          <button type="button" className="btn btn-success dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            Womens
          </button>
          <ul className="dropdown-menu dropdown-menu-end">
            <Link to='/category/womens-watches' className="link-dark text-decoration-none dropdown-item" >
              <span className=' grounplinkAll'>
                womens-watches
              </span>
            </Link>
            <Link to='/category/womens-bags' className="link-dark text-decoration-none dropdown-item" >
              <span className=' grounplinkAll'>
                womens-bags
              </span>
            </Link>
            <Link to='/category/womens-jewellery' className="link-dark text-decoration-none dropdown-item" >
              <span className=' grounplinkAll'>
                womens-jewellery
              </span>
            </Link>
            <Link to='/category/tops' className="link-dark text-decoration-none dropdown-item" >
              <span className=' grounplinkAll'>
                tops
              </span>
            </Link>
          </ul>
        </div>
        <div className="btn-group" role="group">
          <button type="button" className="btn btn-success dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            Skin Care
          </button>
          <ul className="dropdown-menu dropdown-menu-end">
            <Link to='/category/fragrances' className="link-dark text-decoration-none dropdown-item" >
              <span className=' grounplinkAll'>
                Fragances
              </span>
            </Link>
            <Link to='/category/skincare' className="link-dark text-decoration-none dropdown-item" >
              <span className=' grounplinkAll'>
                Skincare
              </span>
            </Link>
          </ul>
        </div>
        <button type="button" className="btn btn-success rounded-0 ">
          <Link to='/category/groceries' className="link-light text-decoration-none dropdown-item" >
            <span className=' grounplinkAll'>
              Grocery
            </span>
          </Link>
        </button>
        <div className="btn-group" role="group">
          <button type="button" className="btn btn-success dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            Home Decoration
          </button>
          <ul className="dropdown-menu dropdown-menu-end">
            <Link to='/category/home-decoration' className="link-dark text-decoration-none dropdown-item" >
              <span className=' grounplinkAll'>
                home-decoration
              </span>
            </Link>
            <Link to='/category/furniture' className="link-dark text-decoration-none dropdown-item" >
              <span className=' grounplinkAll'>
                furniture
              </span>
            </Link>
          </ul>
        </div>
        <button type="button" className="btn btn-success rounded-0 ">
          <Link to='/category/lighting' className="link-light text-decoration-none dropdown-item" >
            <span className=' grounplinkAll'>
              lighting
            </span>
          </Link>
        </button>
        <div className="btn-group" role="group">
          <button type="button" className="btn btn-success dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            AutoMobiles
          </button>
          <ul className="dropdown-menu dropdown-menu-end">
            <Link to='/category/motorcycle' className="link-dark text-decoration-none dropdown-item" >
              <span className=' grounplinkAll'>
                motorcycle
              </span>
            </Link>
            <Link to='/category/automotive' className="link-dark text-decoration-none dropdown-item" >
              <span className=' grounplinkAll'>
                automotive
              </span>
            </Link>

          </ul>
        </div>
      </div>
    </div>
  )
}

export default AllCategoryOne
