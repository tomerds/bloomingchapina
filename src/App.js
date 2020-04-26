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


import img1 from './lowQimages/1E7C97DB-B725-4BB5-8154-71958753E907 copy.JPG';
import img2 from './lowQimages/F0B16481-90A8-406E-AAF1-74F42B791546 copy.JPG';
import img3 from './lowQimages/4BB98C82-CD74-41D5-8615-A207C66F3CFA copy.JPG';
import img4 from './lowQimages/6FBA9049-EA90-4FBF-BAE7-C8EE683ECC00 copy.JPG';
import img5 from './lowQimages/7CEC7AC4-4C2F-4857-BC67-44FDFBA43E41 copy.JPG';
import img6 from './lowQimages/DA526DA4-4F37-4B8F-819D-9DE9A5F6BE92 copy.JPG';
import img7 from './lowQimages/EC62BCAE-EE8D-4224-9328-CFCFF117E5B3 copy.JPG';
import img8 from './lowQimages/F0F02AF9-D1D8-4C41-81C7-6F9DEF99B929 copy.JPG';
import img9 from './lowQimages/F1918FDB-18BB-43BA-B0E2-E653A100F645 copy.JPG';
import img10 from './lowQimages/Facetune_04-10-2019-13-43-52 copy.JPG';
import img11 from './lowQimages/Facetune_04-10-2019-13-49-55 copy.JPG';
import img12 from './latestImages/D6854387-4D71-4553-9F5A-305D303CB242LATEST.jpg';
import img13 from './latestImages/Facetune_21-09-2019-19-32-30LATEST.JPG';
import img14 from './latestImages/1C6E0E41-3E2E-498D-8F28-FB4DA0754098 2LATEST.JPG';
import img15 from './latestImages/2C3D86FA-40AC-42FB-9857-19D27B208D30LATEST.JPG';
import img16 from './latestImages/5C56B54A-158F-4335-A4D1-E91E17DF79E5LATEST.JPG';
import img17 from './latestImages/58BA5B5A-94C6-42B1-B5FF-1EB61FE869D3LATEST.JPG';
import img18 from './latestImages/181ADBCE-A5BD-4C83-BD67-E212C5812150LATEST.JPG';
import img19 from './latestImages/0766871E-8262-4B91-9EB1-8935EA1E33D0LATEST.JPG';
import img20 from './latestImages/A6A05DAE-6D15-4921-A8DA-03A38FA0DA78LATEST.JPG';
import img21 from './latestImages/AC7975F9-22EA-426D-8B5D-41A748C872ECLATEST.JPG';
import img22 from './latestImages/D25C1A02-1013-4A0B-A955-55A036F6CF3ELATEST.JPG';
import img23 from './latestImages/D82BDD2D-DDC9-42E2-9B83-5F6BF6E3649DLATEST.JPG';
import img24 from './latestImages/F55B1606-3082-4471-AFAA-1DFA452D5A41LATEST.JPG';
import img25 from './latestImages/F98FB9BB-DF13-4980-A8AC-838887E1BCE8LATEST.JPG';
import img26 from './latestImages/FDDD3E3B-7650-4A93-822F-054E0DEA51C8LATEST.JPG';


const items = [
  {
    src: img1,
    tag: 'img1',
    altText: 'Necklace Model',
    name: 'Lilac 0101',
    id: 1
  },
  {
    src: img2,
    tag: 'img2',
    altText: 'Necklace Model',
    name: 'Lilac 0101',
    id: 1
  },
  {
    src: img3,
    tag: 'img3',
    altText: 'Necklace',
    name: 'Daisy 0101',
    id: 2
  },
  {
    src: img4,
    tag: 'img4',
    altText: 'Bag Model',
    name: 'Amber 0101',
    id: 3

  },
  {
    src: img5,
    tag: 'img5',
    altText: 'Bag Model',
    name: 'Amber 0101',
    id: 3
  },
  {
    src: img6,
    tag: 'img6',
    altText: 'Bag Model',
    name: 'Amber 0101',
    id: 3
  },
  {
    src: img7,
    tag: 'img7',
    altText: 'Bag Model',
    name: 'Amber 0101',
    id: 3
  },
  {
    src: img8,
    tag: 'img8',
    altText: 'Bag Model',
    name: 'Amber 0101',
    id: 3
  },
  {
    src: img9,
    tag: 'img9',
    altText: 'Bag Model',
    name: 'Amber 0101',
    id: 3
  },
  {
    src: img10,
    tag: 'img10',
    altText: 'Necklace Model 2',
    name: 'Amber 0101',
    id: 4
  },
  {
    src: img11,
    tag: 'img11',
    altText: 'Necklace Model 2',
    name: 'Amber 0101',
    id: 4
  },
  {
    src: img12,
    tag: 'img12',
    altText: 'photo',
    name: 'Daisy 0101',
    id: 2
  },
  {
    src: img13,
    tag: 'img13',
    altText: 'photo',
    name: 'Daisy 0101',
    id: 2
  },
  {
    src: img14,
    tag: 'img14',
    altText: 'photo',
    name: 'Lilac 0101',
    id: 1
  },
  {
    src: img15,
    tag: 'img15',
    altText: 'photo',
    name: 'Jade 0101',
    id: 6
  },
  {
    src: img16,
    tag: 'img16',
    altText: 'photo',
    name: 'Amber 0102',
    id: 7
  },
  {
    src: img17,
    tag: 'img17',
    altText: 'photo',
    name: 'Amber 0102',
    id: 7
  },
  {
    src: img18,
    tag: 'img18',
    altText: 'photo',
    name: 'Jade 0101',
    id: 6
  },
  {
    src: img19,
    tag: 'img19',
    altText: 'photo',
    name: 'Jade 0101',
    id: 6
  },
  {
    src: img20,
    tag: 'img20',
    altText: 'photo',
    name: 'Amber 0102',
    id: 7
  },
  {
    src: img21,
    tag: 'img21',
    altText: 'photo',
    name: 'Amber 0102',
    id: 7
  },
  {
    src: img22,
    tag: 'img22',
    altText: 'photo',
    name: 'Jade 0101',
    id: 6
  },
  {
    src: img23,
    tag: 'img23',
    altText: 'photo',
    name: 'Jade 0101',
    id: 6
  },
  {
    src: img24,
    tag: 'img24',
    altText: 'photo',
    name: 'Jade 0101',
    id: 6
  },
  {
    src: img25,
    tag: 'img25',
    altText: 'photo',
    name: 'Jade 0101',
    id: 6
  },
  {
    src: img26,
    tag: 'img26',
    altText: 'photo',
    name: 'Amber 0102',
    id: 7
  },
];

//still need to add specific item page

function App() {
  return (
    <div className='app-container'>
      <NavBar />
      <BufferDiv />
      <Header />
      <div className='components-container' >
        <Route exact path='/' render={props => (<Carousel {...props} />)} />
        <Route exact path='/shop' render={props => (<Shop {...props} items={items} />)} />
        <Route path='/shop/:id' render={props => (<Contact {...props} items={items} />)} />
        <Route path='/follow' render={props => (<Follow {...props} />)} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
