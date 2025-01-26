import React, { useEffect } from 'react'
import gsap from 'gsap';

const HomeHero = () => {

  useEffect(() => {
    // Split the text into individual spans for each letter
    const letters = document.querySelectorAll('.hero-text span');

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
  }, []);

  // Helper function to split the text into individual letters
  const splitText = (text) => {
    return text.split('').map((letter, index) => (
      
      letter===' '?<span key={index}>&nbsp;</span>: <span key={index} className="inline-block">{letter}</span>
    ));
  };

  return (
    <div className='flex justify-center py-16 bg-white'>
        <div>
          {/* Apply the class hero-text and use the splitText function */}
          <p className='hero-text text-6xl font-semibold font-zodiac'>
            {splitText('For You, With You.')}
          </p>
          <p className='w-1/2 text-[#444444] mt-4'>
            We at <b>Somani Group</b> drive transparent and open business practices to translate our honest and authentic beliefs about responsibility into anything we venture into.
          </p>
        </div>
    </div>
  )
}

export default HomeHero;