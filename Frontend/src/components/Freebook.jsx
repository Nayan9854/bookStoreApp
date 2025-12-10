import React from 'react' ;
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';
import list from '../../public/list.json' ;

function Freebook({ isDark }) {
  const filterData = list.filter((data) => data.category === "Free") ;   

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 0
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'> 
      <div>
         <h1 className='font-semibold text-xl pb-2'>Free Courses Offered</h1>
      <p >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut officiis doloremque minus, sapiente ex unde veniam corrupti labore, ea accusantium inventore olor .
      </p>
      </div>  
    <div className='py-4'>
       <Slider {...settings}>
        {filterData.map((item) => (
          <Cards item={item} key={item.id} isDark={isDark} />
        ))}
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
        <div>
          <h3>7</h3>
        </div>
        <div>
          <h3>8</h3>
        </div>
      </Slider>
    </div>
    </div>
    </>
  )
}

export default Freebook
