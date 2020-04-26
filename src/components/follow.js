import '../styles/follow.scss';

import React from 'react';

import instagram from "../images/assets/insta.png";
import facebook from "../images/assets/fb.png";

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
        <a className='link' href="https://www.instagram.com/bloomingchapinast/">
          <img src={instagram} alt="instagram" />
        </a>
        <a className='link' href="https://www.facebook.com/𝐁𝐥𝐨𝐨𝐦𝐢𝐧𝐠-𝑪𝒉𝒂𝒑𝒊𝒏𝒂-104446820966124/">
          <img src={facebook} alt="facebook" />
        </a>
      </div>
    )
  }
}

export default Follow;