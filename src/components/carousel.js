import '../styles/carousel.scss';

import React from 'react';
import { Carousel, CarouselControl, CarouselItem } from 'reactstrap';

import necklace1 from '../lowQimages/1C6E0E41-3E2E-498D-8F28-FB4DA0754098 copy.JPG';
import bag1 from '../lowQimages/71FAF340-464B-4B71-A694-E51E6A647DDF copy.JPG';
import model1 from '../lowQimages/jumbomodel copy.png';

const items = [
  {
    src: bag1,
    altText: 'Necklace Model',
  },
  {
    src: necklace1,
    altText: 'Necklace',
  },
  {
    src: model1,
    altText: 'Bag Model',
  }
];

class JumboCarousel extends React.Component {

  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }
  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  render() {
    const { activeIndex } = this.state;
    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img src={item.src} alt={item.altText} />
        </CarouselItem>
      );
    });

    return (
      <div className='carousel-container'>
        <Carousel activeIndex={activeIndex}
          next={this.next}
          previous={this.previous}>

          {slides}

          <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
          <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
        </Carousel>
      </div>
    )
  }
}

export default JumboCarousel;