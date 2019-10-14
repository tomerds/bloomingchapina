import '../styles/shop.scss'

import React from 'react';
import Masonry from 'react-masonry-component';
import { Link } from 'react-router-dom';

const masonryOptions = {
  transitionDuration: 0,
  fitWidth: true,
};

const imagesLoadedOptions = { background: '.my-bg-image-el' }

class Shop extends React.Component {

  render() {

    console.log(this.props.items)
    const imageChildren = this.props.items.map((item) => {
      return (
        <div className='image-container' >
          <Link to={`/shop/contact`}>
            <div className='shop-image'>
              <img src={item.src} alt={item.altText} />
              <span>{item.name}</span>
            </div>
          </Link>
        </div>
      )
    });

    return (
      <div className='shop-container'>
        <Masonry
          className={'my-gallery-class'} // default ''
          elementType={'div'} // default 'div'
          options={masonryOptions} // default {}
          disableImagesLoaded={false} // default false
          updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
          imagesLoadedOptions={imagesLoadedOptions}
        >
          {imageChildren}
        </Masonry>
      </div>
    )
  }
}

export default Shop;