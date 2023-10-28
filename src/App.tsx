import React from 'react';
import './App.css';
import Navbar from './Layout/Navbar/Navbar';
import ExploreTopProducts from './Layout/ExploreTopProducts/ExploreTopProducts';
import Carousel from './Layout/Carousel/Carousel';
import Section from './Layout/Section/Section';
import Heros from './Layout/Heros/Heros';
import Footer from './Layout/Footer/Footer';
import SearchProductPage from './Layout/SearchProductPage/SearchProductPage';

function App() {
  return (
    <div>
      <Navbar></Navbar>
{/*       <ExploreTopProducts></ExploreTopProducts>
      <Heros></Heros>
      <Section/> */}
      <SearchProductPage></SearchProductPage>
      <Footer></Footer>
    </div>

  );
}

export default App;
