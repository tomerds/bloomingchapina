import '../styles/header.scss';

import React from 'react';

import blooming from '../images/blooming.png';
import { Link } from 'react-router-dom';

class SubHeader extends React.Component {

  render() {
    return (
      <div className='sub-header-container'>
        <div className='links-container'>
          <ul>
            <li>
              <Link to='/shop/'> </Link>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default SubHeader;