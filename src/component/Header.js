import React from 'react'
import SwiperSlide from '../component/SwiperSlide'
import Navbar from './Navbar'
import Topbar from './Topbar'
import '../Style.css'

const Header = () => {
  return (
    <>
      <div className='sticky-top'>
        <div className='headingThreeCss'>
        <Topbar/>
        <Navbar />
        </div>
       
        <SwiperSlide />
      </div>
    
    </>

  )
}

export default Header
