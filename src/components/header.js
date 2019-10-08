import '../styles/header.scss';

import React from 'react';

import blooming from '../images/blooming.png';
import { Link } from 'react-router-dom';

class Header extends React.Component {

  render() {
    return (
      <div className='header-container'>
        <div className='title-container'>
          <Link to='/' >
            <h1 className='blooming-chapina'><img src={blooming} alt='blooming chapina' className='header-image'></img></h1>
          </Link>
        </div>
        <div className='links-container'>
          <ul className='links-list'>
            <Link to='/shop'><li>SHOP</li></Link>
            <Link to='/follow'><li>FOLLOW</li></Link>
          </ul>
        </div>
      </div>
    )
  }
}

export default Header;