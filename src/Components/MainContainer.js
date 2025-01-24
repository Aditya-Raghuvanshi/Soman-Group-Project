import React from 'react'
import HomeHero from './HomeHero'
import HomeImage1 from '../assets/images/hero_image.png'
import MidContainer from './MidContainer'
import DomainContainer from './DomainContainer'
import Contact from './Contact'
import MapComponent from './MapComponent'


const MainContainer = () => {
  return (
    <div className='scroll-smooth h-[100vh]'>
      <HomeHero/>
      <div className='w-full'>
        <img className='w-full absolute top-24 -z-20' src={HomeImage1} alt="" />
    </div>
    <div className='flex justify-center mt-[359px] py-8 bg-[#101828]'>
        <div className='flex justify-between'>
            <div className='px-24 border-r-2 border-gray-600'><p className='text-6xl text-white font-semibold '>60+</p><p className='text-[#A2A2A2] pt-2'>locations</p></div>
            <div className='px-24 border-r-2 border-gray-600'><p className=' text-6xl text-white font-semibold'>5</p><p className='text-[#A2A2A2] pt-2'>benchmark industries</p></div>
            <div className='px-24 border-r-2 border-gray-600'><p className=' text-6xl text-white font-semibold'>2300+</p><p className='text-[#A2A2A2] pt-2'>motivated employees </p></div>
            <div className='px-24 '><p className='text-6xl text-white font-semibold '>24x7</p><p className='text-[#A2A2A2] pt-2'>At your support. Always</p></div>
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
