import React from 'react'
import { Link } from 'react-router-dom'
import '../Style.css'
const Topbar = () => {
    return (
        <>
            <div className="container m-auto  headingThreeCss">
                <div className="row py-1">
                    <div className="col">
                        <div className="hstack gap-1">
                            
          <Link className="navbar-brand 	d-block d-sm-none fs-4" to="/">
            <span className="text-primary" style={{ fontFamily: "serif" }}>F</span>
            <span className="text-danger" style={{ fontFamily: "serif" }}>i</span>
            <span className="text-warning" style={{ fontFamily: "serif" }}>t</span>
            <span className="text-success" style={{ fontFamily: "serif" }}>w</span>
            <span className="text-danger" style={{ fontFamily: "serif" }}>e</span>
            <span className="text-warning" style={{ fontFamily: "serif" }}>a</span>
            <span className="text-primary" style={{ fontFamily: "serif" }}>r</span>
          </Link>
                            <Link to='/' className='link-dark text-decoration-none text-nowrap d-none d-sm-block'>Seller Center</Link>
                            <div className="vr d-none d-sm-block"></div>
                            <Link to='/' className='link-dark text-decoration-none d-none d-sm-block'>Download</Link>
                            <div className="vr d-none d-sm-block"></div>
                            <Link to='/' className='link-dark text-decoration-none text-nowrap d-none d-sm-block'>follow us on</Link>
                           
                            <Link to='/' className='link-dark text-decoration-none ms-auto'>Support </Link>
                            <div className="vr"></div>
                            <Link to='/contact' className='link-dark text-decoration-none'>Register</Link>
                            <div className="vr"></div>
                            <Link to='/contact' className='link-dark text-decoration-none'>Login</Link>
                        </div>
                    </div>
                  
                </div>
            </div>
        </>
    )
}

export default Topbar
