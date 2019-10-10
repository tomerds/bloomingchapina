import '../styles/shop.scss';

import React from 'react';

class Follow extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      nothing: false,
    }
  }

  render() {
    return (
      <div className='follow-container'>
        <a className='navitem-link' href="https://www.instagram.com/bloomingchapinast/">
          <h1 className='nothing-yet'>Instagram</h1>
        </a>
        <a className='navitem-link' href="https://www.facebook.com/𝐁𝐥𝐨𝐨𝐦𝐢𝐧𝐠-𝑪𝒉𝒂𝒑𝒊𝒏𝒂-104446820966124/">
          <h1 className='nothing-yet'>Facebook</h1>
        </a>
      </div>
    )
  }
}

export default Follow;