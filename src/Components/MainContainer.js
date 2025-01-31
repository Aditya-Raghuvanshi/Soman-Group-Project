import React, { useEffect } from 'react'
import HomeHero from './HomeHero'
// import HomeImage1 from '../assets/images/hero_image.png'
import HomeImage1 from '../assets/images/MainImg.png'
import MidContainer from './MidContainer'
import DomainContainer from './DomainContainer'
import Contact from './Contact'
import MapComponent from './MapComponent'
import Divider from '../assets/Divider.svg'
import gsap from 'gsap'


const MainContainer = () => {

  useEffect(()=>{
    gsap.fromTo(
      '.image7', 
      { opacity: 0,y:70 }, // Start smaller and invisible
      { opacity: 1,y:0 ,duration: 2,delay:1, ease: "power2.out" } // Scale to normal size
    );
    gsap.fromTo(
      '.matrix-text',
      { opacity: 0,y:50 },
      { opacity: 1,y:0 ,duration: 1.5,delay:1.8, ease: "power2.out" }
    )
  },[])

  return (
    <div className='scroll-smooth h-[100vh]'>
      <HomeHero/>
      <div className='w-full'>
      {/* absolute top-72 md:top-64 lg:top-64 -z-20 */}
        <img className='image7 w-full ' src={HomeImage1} alt="" />
    </div>
    <div className='matrix-text p-8 bg-[#101828]'>
    <div className='flex justify-around'>
        <div className=''><p className='text-6xl text-white font-semibold font-zodiac'>60+</p><p className='text-[#A2A2A2] pt-2 font-outfit'>locations</p></div>
        <img src={Divider} alt="Divider" />
        <div className=''><p className=' text-6xl text-white font-semibold text-center font-zodiac'>5</p><p className='text-[#A2A2A2] pt-2 font-outfit'>benchmark industries</p></div>
        <img src={Divider} alt="Divider" />
        <div className=''><p className=' text-6xl text-white font-semibold font-zodiac'>2300+</p><p className='text-[#A2A2A2] pt-2 font-outfit'>motivated employees </p></div>
        <img src={Divider} alt="Divider" />
        <div className=''>
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
