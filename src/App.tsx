import React from 'react';
import './App.css';
import Navbar from './Layout/Navbar/Navbar';
import ExploreTopProducts from './Layout/ExploreTopProducts/ExploreTopProducts';
import Carousel from './Layout/Carousel/Carousel';
import Section from './Layout/Section/Section';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <ExploreTopProducts></ExploreTopProducts>
      <Section/>
    </div>

  );
}

export default App;
