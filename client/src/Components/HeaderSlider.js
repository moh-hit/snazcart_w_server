import React, { Component, useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'
function ControlledCarousel() {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(null);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
      setDirection(e.direction);
    };

    const sources = [
        "https://storage.cloud.google.com/snazcartweb/slider/slider_1.jpg",
        "https://storage.cloud.google.com/snazcartweb/slider/slider_2.jpg",
        "https://storage.cloud.google.com/snazcartweb/slider/slider_3.jpg"
      ];
      const slides = sources.map(source => (
        <Carousel.Item>
        <img
          className="d-block w-100 header-slider"
          src={source}
          alt="First slide"
        />
   
      </Carousel.Item>
      ));
  
    return (
      <Carousel activeIndex={index} direction={direction} onSelect={handleSelect} className="">
          {slides}
      </Carousel>
    );
  }
  
class HeaderSlider extends Component {
    constructor(props) {
        super(props);
        this.state = { 
        
         };
    }
    render() {
        return (
            <ControlledCarousel />
                            

        );
    }
}

export default HeaderSlider;