import './App.css';

import React from 'react';

import BufferDiv from './components/buffer';
import Carousel from './components/carousel';
import Footer from './components/footer';
import Header from './components/header';
import NavBar from './components/navbar';

function App() {
  return (
    <div>
      <NavBar />
      <BufferDiv />
      <Header />
      <Carousel />
      <Footer />
    </div>
  );
}

export default App;
