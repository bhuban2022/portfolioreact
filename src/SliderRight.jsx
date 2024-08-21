import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function SliderRight() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay:true,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="">
           <div>
          <img src="t1.jpg" height="300px" />
        </div>
        <div>
        <img src="t1.jpg" height="300px" />
        </div>
        <div>
        <img src="t1.jpg" height="300px" />
        </div>
        </div>
       
        <div>
        <img src="t1.jpg" height="300px" /><h3>4</h3>
        </div>
        <div>
        <img src="t1.jpg" height="300px" />
        </div>
        <div>
        <img src="t1.jpg" height="300px" />
        </div>
        
      </Slider>
    </div>
  );
}

export default SliderRight;
