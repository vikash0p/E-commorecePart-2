import React, { useReducer, useState } from 'react'
import '../Style.css';
import { useGetProductByLimitQuery } from '../services/productApi'
import CardTwo from '../component/CardTwo';
import SwiperSlideOne from '../component/SwiperSlideOne';
import AllCategory from '../component/AllCategory';
import Card from '../component/Card';


const Home = () => {

  const { data = [], } = useGetProductByLimitQuery(100);

  const product = data.products
  console.log(product);





  const tempProducts = [];



  for (let i in product) {
    let randomIndex = Math.floor(Math.random() * product.length);
    while (tempProducts.includes(product[randomIndex])) {
      randomIndex = Math.floor(Math.random() * product.length);
    }
    tempProducts[i] = product[randomIndex];
  }

  const [filter, setFilter] = useState(tempProducts);

  const filterProduct = (cat, cat1) => {
    const updatedList = tempProducts.filter((x) => x.price >= cat && x.price <= cat1);
    setFilter(updatedList)
  }
  const filterCategory = (cat, cat1) => {
    const updatedListOne = tempProducts.filter((x) => x.rating >= cat && x.rating <= cat1);
    setFilter(updatedListOne)
  }

  const functionOne = (cat) => {

    const filter1 = product.filter((value, index, array) => value.price < cat).sort((a, b) => b.price - a.price)
    console.log(filter1);
    setFilter(filter1);

  }
  const functionTwo = (cat) => {

    const filter1 = product.filter((value, index, array) => value.price < cat).sort((a, b) => a.price - b.price)
    console.log(filter1);
    setFilter(filter1);

  }


  return (
    <>
      <SwiperSlideOne />
      <div className="container-fluid p-0 ">
        <div className="row m-0">
          <div className="col-8 col-sm-8 col-md-2 col-lg-2 p-0">


            <AllCategory setFilter={setFilter} product={product} filterCategory={filterCategory} filterProduct={filterProduct} />
            <h4 className='px-2  mb-1 mt-4 fw-bold'>Pay On Delivery</h4>
            <div className="form-check">
              <input className="form-check-input mt-1" type="checkbox" value="" id="flexCheckDefault" />
              <label className="form-check-label" for="flexCheckDefault">
                Eliglible for Pay on Delivery
              </label>
            </div>
            <h4 className='px-2  mb-1 mt-4 fw-bold'>Eligibility</h4>
            <div className="form-check">
              <input className="form-check-input mt-1" type="checkbox" value="" id="flexCheckDefault" />
              <label className="form-check-label" for="flexCheckDefault">
                Include Out of Stock
              </label>
            </div>
            {/* -------------------------------------- price range end.. ----------------------------- */}
          </div>
          <div className="col-12 col-sm-12 col-md-10 col-lg-10">
            <div className="row">
              <div className='d-flex flex-wrap justify-content-between mt-4'>

                <div>
                  <ul className="nav nav-pills mb-3  px-5" id="pills-tab" role="tablist">
                    <li className="nav-item" role="presentation">
                      <button className="nav-link active " id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true"><i className="  fa-solid fa-grip"></i></button>
                    </li>
                    <li className="nav-item d-sm-none d-md-block  d-none d-sm-block" role="presentation">
                      <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false"><i className="  fa-solid fa-bars"></i></button>
                    </li>

                  </ul>
                </div>
                <div>
                  <h4>{`${tempProducts.length} product available`} </h4>
                </div>
                <div>
                  < div className="dropdown">
                    <button className="btn btn-success dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Sort by :featured
                    </button>
                    <ul className="dropdown-menu">
                      <li><button className="dropdown-item" type="button" onClick={()=>functionOne(2000)}>Price : high to low</button></li>
                      <li><button className="dropdown-item" type="button" onClick={()=>functionTwo(2000)}>Price : low to hight</button></li>
                     
                    </ul>
                  </div>
                </div>
              </div>
              <div className="tab-content" id="pills-tabContent">
                <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabIndex="0">
                  {/* <HeadingThree headingthree={"See YOU PORDUCT"} /> */}
                  <div className='d-flex flex-wrap'>
                    {
                         <CardTwo tempProducts={filter} />   ??    <CardTwo tempProducts={tempProducts} /> 
                    }

                 
                  </div>
                </div>
                <div className="tab-pane fade " id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabIndex="0">
                  <Card product={filter} />
                </div>

              </div>

            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Home
