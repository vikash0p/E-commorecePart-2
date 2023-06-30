
import React, { useRef, useState } from "react";
import './SwiperSlideOne.css';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/navigation";
import { Navigation } from "swiper";
import img1 from '../images/shoping1.jpg'
import img2 from '../images/shoping2.jpg'
import img3 from '../images/shoping4.jpg'




const SwiperSlideOne = () => {
    return (
        <div className='container-fluid p-0'>
            <div className="row  m-0"  >
                <div className="col p-0">
                    <Swiper navigation={true} modules={[Navigation]} className="mySwiperOne " >
                        <SwiperSlide className=""><img src={img1} alt="images" className="object-fit-fill" /></SwiperSlide>
                        <SwiperSlide className=""><img src={img2} alt="images" className="object-fit-fill" /></SwiperSlide>
                        <SwiperSlide className=""><img src={img3} alt="images" className="object-fit-fill" /></SwiperSlide>
                       
                    </Swiper>
                </div>
            </div>

        </div>
    )
}

export default SwiperSlideOne
