import React from 'react'
import './Style.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Header from './component/Header'
import ProductSingle from './pages/ProductSingle'
import CategoryProduct from './pages/CategoryProduct'
import Cart from './pages/Cart'
import Search from './pages/Search'
import Footer from './pages/Footer'
import Product from './pages/Product'
import Contact from './pages/Contact'


const App = () => {
  return (
 
      <div className='bg-light'>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<Product />} />
            <Route path='/product' element={<Home />} />
            <Route path='/blog' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/product/:id' element={<ProductSingle />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/category/:category' element={<CategoryProduct />} />
            <Route path='/search/:searchTerm' element={<Search />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
   
  )
}

export default App