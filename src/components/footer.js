import '../styles/footer.scss';

import React from 'react';

import blooming from '../images/blooming.png';

// Add router links for international shipping

class Footer extends React.Component {

  render() {
    return (
      <div className='footer-container'>
        <div className='footer-box'>
          <div className='footer-title-container'>
            <h1 className='footer-blooming-chapina'><img src={blooming} alt='blooming chapina' className='footer-image'></img></h1>
          </div>
          <div className='footer-links-container'>
            <ul className='footer-links-list'>
              <li>INTERNATIONAL SHIPPING</li>
              <li><a href='https://www.instagram.com/bloomingchapinast/'> INSTAGRAM </a> </li>
              <li><a href='https://www.facebook.com/𝐁𝐥𝐨𝐨𝐦𝐢𝐧𝐠-𝑪𝒉𝒂𝒑𝒊𝒏𝒂-104446820966124/'> FACEBOOK </a> </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Footer;