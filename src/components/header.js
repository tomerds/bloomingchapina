import '../styles/header.scss';

import React from 'react';

import blooming from '../images/blooming.png';

class Header extends React.Component {

  render() {
    return (
      <div className='header-container'>
        <div className='title-container'>
          <h1 className='blooming-chapina'><img src={blooming} alt='blooming chapina' className='header-image'></img></h1>
        </div>
        <div className='links-container'>
          <ul className='links-list'>
            <li>SHOP</li>
            <li>FOLLOW</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Header;