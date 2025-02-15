import React, { useEffect, useRef } from 'react'
import gsap from 'gsap';
import horizontalLine from '../assets/horizontal-line.svg'
import image1 from '../assets/images/MidContainerImage1.svg'
import image2 from '../assets/images/MidContainerImage2.svg'

const MidContainer = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const handleIntersection = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Trigger animations when the component enters the viewport

          // GSAP staggered animation for the letters
          gsap.fromTo(
            '.about-text', 
            { opacity: 0, y: 70 },  // Start with letters off-screen and transparent
            { 
              opacity: 1, 
              y: 0, 
              duration: 2,
              delay:0.2, 
              ease: "ease.out"  // Smooth easing effect
            }
          );
          gsap.fromTo(
            '.about-text1', 
            { opacity: 0, y: 70 },  // Start with letters off-screen and transparent
            { 
              opacity: 1, 
              y: 0, 
              duration: 2,
              delay:0.5, 
              ease: "ease.out"  // Smooth easing effect
            }
          );

          gsap.fromTo(
            '.image1', 
            { opacity: 0, y:100 }, // Start smaller and invisible
            { opacity: 1, y:0 , duration: 4,delay:0.7,  ease: "power2.out" } // Scale to normal size
          );

          gsap.fromTo(
            '.image2', 
            { opacity: 0, y:100 }, // Start smaller and invisible
            { opacity: 1, y:0, duration: 4,delay:0.8, ease: "power2.out" } // Scale to normal size
          );

          // Stop observing once the animations have been triggered
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1, // Trigger when 30% of the element is in the viewport
    });

    if (container) {
      observer.observe(container);
    }

    // Clean up the observer when the component is unmounted
    return () => {
      if (container) {
        observer.unobserve(container);
      }
    };
  }, []);

  return (
    <div ref={containerRef} className='px-4 md:px-28 pt-20 md:pt-32 pb-24'>
      <div className='flex flex-col md:flex-row justify-between'>
        <div className='flex flex-col my-auto'>
          <div className='flex'>
            <img className='w-16' src={horizontalLine} alt="" />
            <p className='text-sm text-[#996830] ml-4'>ABOUT US</p>
          </div>
          <p className='about-text text-3xl md:text-7xl my-6 font-zodiac font-semibold'>Since 1968</p>
          <p className='about-text1 text-[#444444] text-sm md:text-base mb-4 md:mb-auto w-full md:w-[80%] font-outfit'>
            Founded by the a founder late Mr. Motilal Somani and his late son Mr. Champalal Motilal Somani, the Somani Group is one of the most respected and renowned business houses of Baramati & Maharashtra
          </p>
        </div>
        <img className='image1 h-80 md:h-auto md:mb-20' src={image1} alt="" />
        <img className='image2 h-80 md:h-auto mt-4 md:mt-20 md:ml-4' src={image2} alt="" />
      </div>
    </div>
  )
}

export default MidContainer
