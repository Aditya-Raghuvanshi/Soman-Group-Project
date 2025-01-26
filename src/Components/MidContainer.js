// import React from 'react'
// import horizontalLine from '../assets/horizontal-line.svg'
// import image1 from '../assets/images/MidContainerImage1.svg'
// import image2 from '../assets/images/MidContainerImage2.svg'

// const MidContainer = () => {
//   return (
//     <div className='px-28 pt-32 pb-24'>
//       <div className='flex justify-between h-[560px]'>
//         <div className='flex flex-col my-auto'>
//             <div className='flex'>
//                 <img className='w-16' src={horizontalLine} alt="" />
//                 <p className='text-sm text-[#996830] ml-4'>ABOUT US</p>
//             </div>
//             <p className='text-7xl my-6 font-[zodiac]'>Since 1968</p>
//             <p className='text-[#444444] text-base w-[80%]'>Founded by the a founder late Mr. Motilal Somani and his late son Mr. Champalal Motilal Somani, the Somani Group is one of the most respected and renowned business houses of Baramati & Maharashtra</p>
//         </div>
//         <img className='mb-20' src={image1} alt="" />
//         <img className='mt-20 ml-4' src={image2} alt="" />
//       </div>
//     </div>
//   )
// }

// export default MidContainer


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
          const letters = document.querySelectorAll('.about-text span');

          // GSAP staggered animation for the letters
          gsap.fromTo(
            letters, 
            { opacity: 0, y: -50 },  // Start with letters off-screen and transparent
            { 
              opacity: 1, 
              y: 0, 
              duration: 1, 
              stagger: 0.1,  // Stagger the animation by 0.1 seconds per letter
              ease: "ease.out"  // Smooth easing effect
            }
          );

          gsap.fromTo(
            '.image1', 
            { scale: 0.8, opacity: 0 }, // Start smaller and invisible
            { scale: 1, opacity: 1, duration: 4, ease: "power2.out" } // Scale to normal size
          );

          gsap.fromTo(
            '.image2', 
            { scale: 0.8, opacity: 0 }, // Start smaller and invisible
            { scale: 1, opacity: 1, duration: 4, ease: "power2.out" } // Scale to normal size
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

  const splitText = (text) => {
    return text.split('').map((letter, index) => (
      letter===' '?<span key={index}>&nbsp;</span>: <span key={index} className="inline-block">{letter}</span>
    ));
  };

  return (
    <div ref={containerRef} className='px-28 pt-32 pb-24'>
      <div className='flex justify-between h-[560px]'>
        <div className='flex flex-col my-auto'>
          <div className='flex'>
            <img className='w-16' src={horizontalLine} alt="" />
            <p className='text-sm text-[#996830] ml-4'>ABOUT US</p>
          </div>
          <p className='about-text text-7xl my-6 font-zodiac'>{splitText('Since 1968')}</p>
          <p className='text-[#444444] text-base w-[80%]'>
            Founded by the a founder late Mr. Motilal Somani and his late son Mr. Champalal Motilal Somani, the Somani Group is one of the most respected and renowned business houses of Baramati & Maharashtra
          </p>
        </div>
        <img className='image1 mb-20' src={image1} alt="" />
        <img className='image2 mt-20 ml-4' src={image2} alt="" />
      </div>
    </div>
  )
}

export default MidContainer
