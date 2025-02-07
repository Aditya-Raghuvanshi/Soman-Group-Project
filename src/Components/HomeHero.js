import React, { useEffect } from 'react'
import gsap from 'gsap';
// import HeroGraphic from '../assets/hero_graphics.svg'
import './Legacy.css'

const HomeHero = () => {

  useEffect(() => {
    // Animate the first paragraph (hero-text)
    gsap.fromTo('.hero-text', 
    { opacity: 0, y: 50 },
    {
      y: 0,
      opacity: 1,
      duration: 2,
      delay:0.1,
      ease: 'power4.out',
    });

    // Animate the second paragraph
    gsap.fromTo('.description-text', 
    { opacity: 0, y: 50 },
    {
      y: 0,
      opacity: 1,
      duration: 2,
      delay:0.4,
      ease: 'power4.out',
    });

    gsap.fromTo('.Hero',
      { opacity: 0, y: 50 },
      {
        y: 0,
        opacity: 1,
        duration: 4,
        delay:0.3,
        ease: 'power4.out',
      }
    );
  }, []);


  return (
    <div className='flex justify-center py-16 bg-white px-8 Hero'>
        <div className=''>
          {/* Apply the class hero-text and use the splitText function */}
          <p className='hero-text text-6xl font-semibold font-zodiac'>
            For You, With You.
          </p>
          <p className='description-text w-1/2 text-[#444444] mt-4 font-outfit'>
            We at <b>Somani Group</b> drive transparent and open business practices to translate our honest and authentic beliefs about responsibility into anything we venture into.
          </p>
          {/* <img className='overflow-hidden hero-graphic absolute top-28 left-0 w-full' src={HeroGraphic} alt="" /> */}
        </div>
    </div>
  )
}

export default HomeHero;