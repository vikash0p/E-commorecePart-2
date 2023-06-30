import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import '../Style.css'
import payment from '../images/payment.png'




const Footer = () => {


    return (
        <footer>
            <div className="container-fluid bg-success bg-opacity-10 ">
                <div className="row px-5 py-4  ">
                    <div className=" fs-1  fw-bold text-center " to="/product" >
                        <span className="text-primary" >F</span>
                        <span className="text-danger" >i</span>
                        <span className="text-warning" >t</span>
                        <span className="text-success" >w</span>
                        <span className="text-danger" >e</span>
                        <span className="text-warning" >a</span>
                        <span className="text-primary" >r</span>
                    </div>
                    <hr />
                    <div className=" mt-3 col-12 col-sm-12 col-md-6 col-lg-3 ">

                        <h4 className=''>About Us</h4>
                        <p className=''>We know there are a lot of threa <br /> developers our but we pride into firm <br /> in the industry.</p>


                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-3 mt-3">
                        <h4>Feature</h4>
                        <Link to='/' className='text-secondary text-decoration-none '>About Us</Link> <br />
                        <Link to='/' className='text-secondary text-decoration-none  '>Term Condition</Link> <br />
                        <Link to='/' className='text-secondary text-decoration-none  '>Best Products</Link> <br />
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-3 mt-3 ">
                        <h4>General link</h4>
                        <Link to='/blog' className='text-secondary text-decoration-none '>Blog</Link> <br />
                        <Link to='/' className='text-secondary text-decoration-none  '>Tracking Order</Link> <br />
                        <Link to='/' className='text-secondary text-decoration-none  '>Become Seller</Link> <br />
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-3 mt-3 ">
                        <h4>Helpful</h4>
                        <Link to='/' className='text-secondary text-decoration-none '>Flash Sale</Link> <br />
                        <Link to='/' className='text-secondary text-decoration-none  '>FAQ</Link> <br />
                        <Link to='/' className='text-secondary text-decoration-none  '>Support</Link> <br />
                    </div>
                </div>
                <div className="row py-3">
                    <hr />
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                        <i className=" px-2 fs-5 fa-brands fa-instagram"></i>
                        <i className=" px-2 fs-5 fa-brands fa-facebook"></i>
                        <i className=" px-2 fs-5 fa-brands fa-youtube"></i>
                        <span className='fs-5'> <span>&#169;</span>2023 Fitwere All rights reserved </span>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 mt-2">
                            <img src={payment} alt="payment" className='float-end' />
                        </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer