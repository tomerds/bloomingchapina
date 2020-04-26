import '../styles/contact.scss'

import React from 'react';

class Contact extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      id: '',
    }
  }

  componentDidMount() {
    console.log('state', this.state.id)
    this.setState({ id: this.props.match.params.id });
  }

  render() {
    return (
      <div className='contact-container'>
        <h1>Contact us!</h1>
        <div className='contact-content'>
          {console.log(this.props.items.map(e => e.id))}
          {this.props.items.filter(e => e.id === this.state.id).map(e => {
            return (
              <img src={e.src} alt={e.alt}></img>
            )
          })}
          <h4>We are still building our online shop but contact us directly for purchases and shipping information.</h4>
          <a href="mailto:bloomingchapina@gmail.com?cc= &subject=I'd%20like%20to%20make%20a%20purchase!"><span role="img" aria-label='email button'>📩</span></a>
        </div>
      </div>
    )
  }
}

export default Contact;