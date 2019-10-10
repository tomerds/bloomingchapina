import '../styles/contact.scss'

import React from 'react';

class Contact extends React.Component {

  render() {
    return (
      <div className='contact-container'>
        <h1>Contact us!</h1>
        <div className='contact-content'>
          <h4>We are still building our online shop but contact us directly for purchases and shipping information.</h4>
          <a href="mailto:mirandanunez95@gmail.com"><span role="img" aria-label='email button'>📩</span></a>
        </div>
      </div>
    )
  }
}

export default Contact;