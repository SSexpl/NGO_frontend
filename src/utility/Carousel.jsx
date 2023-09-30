import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import { Carousel_data } from '../content/carousel';
export function Carousel() {
  

  const [currentIndex, setCurrentIndex] = useState(0);
  const [slides,setSlides]=useState(Carousel_data);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className='max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group'>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className='w-full h-full rounded-2xl border-solid border-2 border-sky-500 bg-center bg-cover duration-500 '
      ></div>
      <div  className='h-52 relative bottom-[32%] text-white bg-slate-500 rounded-2xl p-5 bg-opacity-50' >
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
          Voluptate, eos, eum mollitia inventore commodi consectetur 
          placeat veniam quaerat illo dolor sint distinctio ducimus ea excepturi? 
          Magni commodi maxime molestiae excepturi!
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
          Voluptate, eos, eum mollitia inventore commodi consectetur 
          placeat veniam quaerat illo dolor sint distinctio ducimus ea excepturi? 
          Magni commodi maxime molestiae excepturi!
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
          Voluptate, eos, eum mollitia inventore commodi consectetur 
          placeat veniam quaerat illo dolor sint distinctio ducimus ea excepturi? 
          Magni commodi maxime molestiae excepturi!
        </p>
      </div>
      {/* Left Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className='flex top-4 justify-center py-2'>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className='text-2xl cursor-pointer'
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Carousel;