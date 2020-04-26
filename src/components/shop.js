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

  constructor(props) {
    super(props);
    this.state = {
      loadedCount: 0,
      loaded: false,
    }
  }

  onLoad = () => {
    this.setState(prevState => {
      if (this.loadedCount === this.props.items.length) {
        console.log(this.loadedCount)
        return { loaded: true }
      }
      return { loadedCount: prevState.loadedCount + 1 };
    })
  }



  render() {

    const imageChildren = this.props.items.map((item) => {
      return (
        <div className='image-container' >
          <Link to={`/shop/${item.id}`}>
            <div className='shop-image'>
              <img src={item.src} alt={item.altText} onLoad={this.onLoad} />
              <span className='shop-image-span'>{item.name}</span>
            </div>
          </Link>
        </div>
      )
    });

    return (
      <div className='shop-container'>
        <div className={this.loaded = false ? 'show-images' : 'hide-images'}><h1>Loading</h1></div>
        <div className={this.loaded = false ? 'hide-images' : 'show-images'}>
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
      </div>
    )
  }
}

export default Shop;