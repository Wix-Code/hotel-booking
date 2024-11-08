import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './home.css'

const Firstslide = () => {
  const pics = [
    {
      id: 1,
      pic : 'hotels/1.jpg'
    },
    {
      id: 2,
      pic : 'hotels/2.jpg'
    },
    {
      id: 3,
      pic : 'hotels/3.jpg'
    },
    {
      id: 4,
      pic : 'hotels/4.jpg'
    },
  ]

 

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    fade : true,
    autoplay: true,
    speed: 7000,
    autoplaySpeed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  
  return (
    <div className='slider'>
      <Slider  {...settings}>
        {
          pics.map((pic)=>{
            return (
              <div className="slide">
                <img src={pic.pic} alt="" />
              </div>
            )
          })
        }
      </Slider>
      {

      }
    </div>
  )
}

export default Firstslide