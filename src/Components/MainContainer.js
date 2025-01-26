import React, { useEffect } from 'react'
import HomeHero from './HomeHero'
// import HomeImage1 from '../assets/images/hero_image.png'
import HomeImage1 from '../assets/images/MainImg.png'
import MidContainer from './MidContainer'
import DomainContainer from './DomainContainer'
import Contact from './Contact'
import MapComponent from './MapComponent'
import gsap from 'gsap'


const MainContainer = () => {
  useEffect(()=>{
    gsap.fromTo(
      '.image7', 
      { scale: 0.8, opacity: 0 }, // Start smaller and invisible
      { scale: 1, opacity: 1, duration: 4, ease: "power2.out" } // Scale to normal size
    );
  },[])
  return (
    <div className='scroll-smooth h-[100vh]'>
      <HomeHero/>
      <div className='w-full'>
      {/* absolute top-72 md:top-64 lg:top-64 -z-20 */}
        <img className='image7 w-full ' src={HomeImage1} alt="" />
    </div>
    <div className='w-full flex justify-center py-8 bg-[#101828]'>
        <div className='w-full flex justify-between'>
            <div className='px-24 border-r-2 border-gray-600'><p className='text-6xl text-white font-semibold font-zodiac'>60+</p><p className='text-[#A2A2A2] pt-2'>locations</p></div>
            <div className='px-24 border-r-2 border-gray-600'><p className=' text-6xl text-white font-semibold text-center font-zodiac'>5</p><p className='text-[#A2A2A2] pt-2'>benchmark industries</p></div>
            <div className='px-24 border-r-2 border-gray-600'><p className=' text-6xl text-white font-semibold font-zodiac'>2300+</p><p className='text-[#A2A2A2] pt-2'>motivated employees </p></div>
            <div className='px-24 '>
              <p className='text-6xl text-white font-semibold text-center'>24x7</p>
              <p className='text-[#A2A2A2] pt-2'>At your support. Always</p>
            </div>
        </div>
    </div>
    <MidContainer/>
    <DomainContainer/>
    <MapComponent/>
    <Contact/>
    </div>
  )
}

export default MainContainer
