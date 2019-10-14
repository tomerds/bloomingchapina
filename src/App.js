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
import Contact from './components/contact';

//still need to add specific item page



import img1 from './images/1E7C97DB-B725-4BB5-8154-71958753E907.JPG';
import img2 from './images/F0B16481-90A8-406E-AAF1-74F42B791546.JPG';
import img3 from './images/4BB98C82-CD74-41D5-8615-A207C66F3CFA.JPG';
import img4 from './images/6FBA9049-EA90-4FBF-BAE7-C8EE683ECC00.JPG';
import img5 from './images/7CEC7AC4-4C2F-4857-BC67-44FDFBA43E41.JPG';
import img6 from './images/DA526DA4-4F37-4B8F-819D-9DE9A5F6BE92.JPG';
import img7 from './images/EC62BCAE-EE8D-4224-9328-CFCFF117E5B3.JPG';
import img8 from './images/F0F02AF9-D1D8-4C41-81C7-6F9DEF99B929.JPG';
import img9 from './images/F1918FDB-18BB-43BA-B0E2-E653A100F645.JPG';
import img10 from './images/Facetune_04-10-2019-13-43-52.JPG';
import img11 from './images/Facetune_04-10-2019-13-49-55.JPG';


import necklace1 from './images/1C6E0E41-3E2E-498D-8F28-FB4DA0754098.JPG';
import bag1 from './images/71FAF340-464B-4B71-A694-E51E6A647DDF.JPG';
import model1 from './images/jumbomodel.png';

const items = [
  {
    src: img1,
    altText: 'Necklace Model',
    name: 'Lilac 0101',
    id: 1
  },
  {
    src: img2,
    altText: 'Necklace Model',
    name: 'Lilac 0101',
    id: 1
  },
  {
    src: img3,
    altText: 'Necklace',
    name: 'Daisy 0101',
    id: 2
  },
  {
    src: img4,
    altText: 'Bag Model',
    name: 'pre-release',
    id: 3

  },
  {
    src: img5,
    altText: 'Bag Model',
    name: 'pre-release',
    id: 3
  },
  {
    src: img6,
    altText: 'Bag Model',
    name: 'pre-release',
    id: 3
  },
  {
    src: img7,
    altText: 'Bag Model',
    name: 'pre-release',
    id: 3
  },
  {
    src: img8,
    altText: 'Bag Model',
    name: 'pre-release',
    id: 3
  },
  {
    src: img9,
    altText: 'Bag Model',
    name: 'pre-release',
    id: 3
  },
  {
    src: img10,
    altText: 'Necklace Model 2',
    name: 'pre-release',
    id: 4
  },
  {
    src: img11,
    altText: 'Necklace Model 2',
    name: 'pre-release',
    id: 4
  },
];


const carousel_items = [
  {
    src: bag1,
    altText: 'Necklace Model',
  },
  {
    src: necklace1,
    altText: 'Necklace',
  },
  {
    src: model1,
    altText: 'Bag Model',
  }
];

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      carousel_items: [],
      loading: true,
    }
  }

  componentDidMount() {
    this.setState({
      items,
      carousel_items,
    })
  }

  render() {
    return (
      <div className='app-container'>
        <NavBar />
        <BufferDiv />
        <Header />
        <div className='components-container' >
          <Route exact path='/' render={props => (<Carousel {...props} items={carousel_items} />)} />
          <Route exact path='/shop' render={props => (<Shop {...{ props }} items={items} />)} />
          <Route path='/shop/contact' render={props => (<Contact {...{ props }} />)} />
          <Route path='/follow' render={props => (<Follow {...{ props }} />)} />
          <Route path="shop/:itemid" render={props => (<Follow {...{ props }} />)} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
