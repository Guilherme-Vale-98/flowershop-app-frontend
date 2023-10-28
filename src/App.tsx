import React from 'react';
import './App.css';
import Navbar from './Layout/Navbar/Navbar';
import ExploreTopProducts from './Layout/ExploreTopProducts/ExploreTopProducts';
import Carousel from './Layout/Carousel/Carousel';
import Section from './Layout/Section/Section';
import Heros from './Layout/Heros/Heros';
import Footer from './Layout/Footer/Footer';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <ExploreTopProducts></ExploreTopProducts>
      <Heros></Heros>
      <Section/>
      <Footer></Footer>
    </div>

  );
}

export default App;
