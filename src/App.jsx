import React from 'react'
import Navbar from './assets/component/navbar/Navbar.jsx'
import Product from './assets/component/product/Product.jsx'
import Resturant from './assets/component/resturant/Resturant.jsx'
import Home from './assets/component/home/Home.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


export default function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path="/" element={<Home/>}></Route>    
      <Route path="/product" element={<Product/>}></Route>    
      <Route path="/resturant" element={<Resturant/>}></Route>    
    </Routes>
    </BrowserRouter>
  )
}
