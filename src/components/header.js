import '../styles/header.scss';

import React from 'react';

import blooming from '../images/blooming.png';
import { Link, NavLink } from 'react-router-dom';

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
            <NavLink to='/shop'
              activeStyle={{
                fontWeight: "bold",
                color: "rgba(211, 105, 95, 1)"
              }}
              className='navlink'>
              <li>SHOP</li>
            </NavLink>
            <NavLink to='/follow'
              activeStyle={{
                fontWeight: "bold",
                color: "rgba(211, 105, 95, 1)"
              }}
              className='navlink'>
              <li>FOLLOW</li>
            </NavLink>
          </ul>
        </div>
      </div>
    )
  }
}

export default Header;