import React from 'react';
import './App.css';
import Navbar from './Layout/Navbar/Navbar';
import ExploreTopProducts from './Layout/ExploreTopProducts/ExploreTopProducts';
import Carousel from './Layout/Carousel/Carousel';
import Section from './Layout/Section/Section';
import Heros from './Layout/Heros/Heros';
import Footer from './Layout/Footer/Footer';
import SearchProductPage from './Layout/SearchProductPage/SearchProductPage';
import Home from './Layout/Home/Home';
import { Navigate, Route, Routes } from 'react-router-dom';
import ProductCheckoutPage from './Layout/ProductCheckoutPage/ProductCheckoutPage';

function App() {
  return (
    <div className='d-flex flex-column min-vh-100'>
      <Navbar/>
        <div className='flex-grow-1'>  
          <Routes >
            <Route path='/' element={<Navigate to={"/home"}></Navigate>}></Route>
            <Route path='/home' element={<Home/>}/>
            <Route path='/search' element={<SearchProductPage/>}/>
            <Route path="/checkout/:productId" element={<ProductCheckoutPage/>}></Route>
          </Routes>
        </div>
      <Footer/>
    </div>

  );
}

export default App;
