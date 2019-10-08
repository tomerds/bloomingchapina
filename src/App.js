import './App.css';

import React from 'react';
import { Route } from 'react-router-dom';

import BufferDiv from './components/buffer';
import Carousel from './components/carousel';
import Footer from './components/footer';
import Header from './components/header';
import NavBar from './components/navbar';
import Shop from './components/shop';
import Follow from './components/follow';

function App() {
  return (
    <div className='app-container'>
      <NavBar />
      <BufferDiv />
      <Header />
      <div className='components-container' >
        <Route exact path='/' render={props => (<Carousel {...props} />)} />
        <Route path='/shop' render={props => (<Shop {...{ props }} />)} />
        <Route path='/follow' render={props => (<Follow {...{ props }} />)} />
        <Route path="shop/:itemid" render={props => (<Follow {...{ props }} />)} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
