import React from 'react';

const Banner = () => {
    return (
        <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img
      src="https://i.ibb.co/TBHzfY6j/garden1.jpg"
      className="w-full h-200 relative" />
      <div className='absolute text-center' data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">   <h2 className="text-white text-2xl md:text-4xl text-center font-bold ml-25 mt-25">Grow Green, Live Clean</h2></div>
   
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide4" className="btn btn-circle">❮</a>
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide2" className="carousel-item relative w-full">
    <img
      src="https://i.ibb.co/yD2CNmZ/garden3.jpg"
      className="w-full h-200 relative" />

<div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className='absolute mt-10 ml-10'>  <h2 className="text-white text-2xl md:text-4xl font-bold slide-down">Plants Make Life Better</h2></div>

    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide1" className="btn btn-circle">❮</a>
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide3" className="carousel-item relative w-full">
    <img
      src="https://i.ibb.co/WNbzR854/garden4.jpg"
      className="w-full h-200 relative" />
      <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className='absolute mt-10 ml-10'>  <h2 className="text-black text-2xl md:text-4xl font-bold slide-down">Nature’s Touch in Every Leaf</h2></div>
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide2" className="btn btn-circle">❮</a>
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide4" className="carousel-item relative w-full">
    <img
      src="https://i.ibb.co/BVJT7MdP/downloadgarddenlast.jpg"
      className="w-full h-200 relative" />
        <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className='absolute mt-10 ml-10'>  <h2 className="text-white text-2xl md:text-4xl font-bold slide-down">Every Plant Tells a Story</h2></div>
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide3" className="btn btn-circle">❮</a>
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
 
</div>

    );
};

export default Banner;
