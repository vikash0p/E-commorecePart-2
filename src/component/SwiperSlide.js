import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { Link, useParams } from 'react-router-dom'
import { useGetProductCategoryQuery } from '../services/productApi'

const Scroller = () => {
    const { category } = useParams()
    const { data: categories,  } = useGetProductCategoryQuery(category);

    return (
        <>
            <div className="container-fluid  p-0">
                <div className="row m-0">
                    <div className="col-12 col-sm-12 col-md-5 col-lg-4 p-0 headingThreeCss ">
                        <ul className="nav ">
                            <li className="nav-item">
                                <Link className="nav-link active  link-dark" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link  link-dark " to="/product">Product</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link  link-dark" to="/blog">Blog</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link  link-dark" to="/contact">Contact</Link>
                            </li>
                            
                        </ul>
                    </div>
                    <div className="col-12 col-sm-12 col-md-7 col-lg-8 p-0">
                        <div className='hstack swiperSliderContainer'>
                            <Swiper navigation={true} modules={[Navigation]} pagination={{ clickable: true }}
                                breakpoints={{
                                    0: {
                                        slidesPerView: 2,
                                        spaceBetween: 5
                                    },
                                    400: {
                                        slidesPerView: 2,
                                        spaceBetween: 5,
                                    },
                                    600: {
                                        slidesPerView: 4,
                                        spaceBetween: 5,
                                    },
                                    800: {
                                        slidesPerView: 2,
                                        spaceBetween: 5,
                                    },
                                    1000: {
                                        slidesPerView: 3,
                                        spaceBetween: 5,
                                    },
                                    1200: {
                                        slidesPerView: 5,
                                        spaceBetween: 10,
                                    },
                                    1400: {
                                        slidesPerView: 6,
                                        spaceBetween: 10,
                                    },
                                }} className="mySwiper ">
                                <div className=''>
                                    {
                                        categories && categories.map((category, index) => {
                                            return (
                                                <SwiperSlide key={index}>
                                                    <Link to={`category/${category}`} className="link-dark text-decoration-none" >
                                                        <div className=' grounplinkAll'>
                                                            {category.replace("-", " ")}
                                                        </div>
                                                    </Link>
                                                </SwiperSlide>
                                            )
                                        })
                                    }
                                </div>
                            </Swiper>
                        </div>
                    </div>

                </div>
            </div>
        </>

    )
}
export default Scroller
