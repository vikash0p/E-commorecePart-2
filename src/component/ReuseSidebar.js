import React from 'react'
import { NavLink } from 'react-router-dom'


const routes = [
  {
    path: '/',
    name: "Home"
  },
  {
    path: '/product',
    name: "Product"
  },
  {
    path: '/about',
    name: 'About'
  },
  {
    path: '/contact',
    name: 'Contact'
  },
  {
    path: '/cart',
    name: 'Cart'
  }
]

const ReuseSidebar = () => {



  return (
    <section className=''>

      <div className='routes bg-light' style={{ height: "100vh" }}>
        {
          routes && routes.map((cat, index) => {
            return (
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li className='nav-item'>
                  <NavLink to={cat.path} aria-current="page" className=" nav-link active fs-4 text-success text-decoration-none my-2  px-2 link " key={cat.path} >
                  {cat.name}
                  </NavLink>
                </li>
              </ul>
            )
          })
        }
      </div>
    

    </section>
  )
}

export default ReuseSidebar
