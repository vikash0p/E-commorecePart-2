
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import img from '../images/contact.svg'
import '../Style.css'


const Contact = () => {
  const [visible, setVisible] = useState(false);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState("");
    const onSubmithandler = (e) => {
        e.preventDefault();
    }
    const handleToggle = () => {
        setVisible(!visible)

    }



  return (
    <>
      <div className="container m-auto">
        <div className="row">
          <div className="col">
            <h1 className='text-center mt-3 ' >Contact Us</h1>
            <hr className='w-25 mx-auto mb-3' />

          </div>
        </div>
        {/* --------------------------------------images------------------------------------------ */}
        <section className="row align-items-center" id='sectionOne'>
          <div className="col">

            <div className=' text-center  align-items-center'>
              <h1 className='text-secondary' >
                <span className='fw-bolder  ' >Happy Holidays!</span>
                Dont't miss our sale!
              </h1>
              <h1 className='text-secondary'>Up to #-% off on all Products and membership packages</h1>
              <NavLink to='/product' className="btn btn-success px-5 fs-5" >Check Out Now</NavLink>
            </div>

          </div>
        </section>
      </div>


      <div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 m-auto shadow mt-5">
             
              <div className="row">
                <div className="col-12 col-sm-12 col-md-6 col-6">
                  <img src={img} alt="" className='img-fluid' height={'500px'} />
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-6 align-self-center">

                  <form onSubmit={onSubmithandler}>
                    <h4 className='text-center m-3'>Register</h4>
                    <div className="m-3">
                      <label htmlFor="name" className="form-label">Name</label>
                      <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} className="form-control rounded-0" id="name" placeholder="Name" />
                    </div>

                    <div className="m-3">
                      <label htmlFor="email" className="form-label">Email</label>
                      <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control rounded-0" id="email" placeholder="Email" />
                    </div>

                    <div className="m-3">
                      <label htmlFor="password" className="form-label">password</label>
                      <div className="position-relative">
                        <input type={visible ? "text" : "password"} name='password' value={password} onChange={(e) => setPassword(e.target.value)} className="form-control rounded-0" id="password" placeholder="password" />
                        <label htmlFor="password" onClick={handleToggle}>
                          {
                            visible ? <i className="fa-solid fa-eye position-absolute top-0 end-0 px-3 py-2 text-dark "></i> : <i className="text-dark fa-solid fa-eye-slash position-absolute top-0 end-0 px-3 py-2"></i>
                          }
                        </label>
                      </div>

                    </div>

                    <div className="d-grid m-4">
                      <button type='submit' className="btn btn-success rounded-pill col-md-8 m-auto fs-5">Submit</button>

                    </div>

                  </form>
                </div>
              </div>
            </div>

          </div>
        </div>
       
      
      </div>
      {/*------------------------------ third section start(contact number) ------------------*/}
      <div className="container mx-auto">
        <div className="row">
          <div className="col my-3 p-5 text-center headingThreeCss" >
            <h2 className='fw-bolder'>Join Our Newsletter</h2>
            <p>Subscribe to our newsletter to receive emails about new template releases and updates</p>
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                      
            <button className="btn btn-success  px-5 mt-3 fs-5 fw-bold" >Subscribe</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
