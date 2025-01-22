import React from 'react'
import HomeHero from './HomeHero'
// import HeroBackground from '../assets/hero-background-img.svg'
// import HomeImage1 from '../assets/images/HomeImage1.svg'
import HomeImage1 from '../assets/images/hero_image.png'
// import HomeImage2 from '../assets/images/HomeImage2.svg'
// import HomeImage3 from '../assets/images/HomeImage3.svg'
// import HomeImage4 from '../assets/images/HomeImage4.svg'
// import HomeImage5 from '../assets/images/HomeImage5.svg'
import MidContainer from './MidContainer'
import DomainContainer from './DomainContainer'
import Contact from './Contact'


const MainContainer = () => {
  return (
    <div className='scroll-smooth'>
      <HomeHero/>
      <div className='w-full'>
        <img className='w-full' src={HomeImage1} alt="" />
    </div>
    <div className='flex justify-center py-8 bg-[#101828]'>
        <div className='flex justify-between'>
            <div className='px-24 border-r-2 border-gray-600'><p className='text-6xl text-white font-semibold '>60+</p><p className='text-[#A2A2A2] pt-2'>locations</p></div>
            <div className='px-24 border-r-2 border-gray-600'><p className=' text-6xl text-white font-semibold'>5</p><p className='text-[#A2A2A2] pt-2'>benchmark industries</p></div>
            <div className='px-24 border-r-2 border-gray-600'><p className=' text-6xl text-white font-semibold'>2300+</p><p className='text-[#A2A2A2] pt-2'>motivated employees </p></div>
            <div className='px-24 '><p className='text-6xl text-white font-semibold '>24x7</p><p className='text-[#A2A2A2] pt-2'>At your support. Always</p></div>
        </div>
    </div>
    <MidContainer/>
    <DomainContainer/>
    <Contact/>
    </div>
  )
}

export default MainContainer
